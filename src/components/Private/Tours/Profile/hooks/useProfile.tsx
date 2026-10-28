import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback, useMemo } from "react"
import { TourShape } from "@type/Tours"
import { TourProfilePayload, TourProfileSchema } from "../profileSchemas"
import usePutTour from "@services/Tours/Put/usePut"
import usePostTour from "@services/Tours/Post/usePost"
import dayjs from "dayjs"
import { useI18n } from "@contexts/I18n"

type Props = {
    tour?: TourShape
}

export function useProfile({ tour = {} as TourShape }: Props = {} as Props) {
    const { t } = useI18n();
    const schema = useMemo(() => TourProfileSchema(t), [t]);
    const { formMethods, handleSubmit, register, errors } = useFormRules<TourProfilePayload>({
        schema,
        defaultValues: {
            ...tour,
            featured: tour?.featured ? "1" : "0",
        }
    })
    const { mutateAsync: putTour, isPending: isLoadingPut } = usePutTour()
    const { mutateAsync: postTour, isPending: isLoadingPost } = usePostTour();

    const onSubmit = useCallback(async (data: TourProfilePayload) => {
        const availableAt = data.available_at ? dayjs(data.available_at).format("YYYY-MM-DD HH:mm") : ""
        const unavailableAt = data.unavailable_at ? dayjs(data.unavailable_at).format("YYYY-MM-DD HH:mm") : ""

        const payload = {
            ...data,
            available_at: availableAt,
            unavailable_at: unavailableAt,
        } as TourProfilePayload
        if (payload.id) {
            await putTour({
                ...payload,
                id: tour.id ?? 0,
                banner: payload.banner === "" ? tour?.banner : payload.banner,
            })
        } else {
            await postTour(payload)
        }

    }, [putTour, postTour, tour])

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoadingPut || isLoadingPost
    }
}