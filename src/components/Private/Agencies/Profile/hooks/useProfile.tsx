import { useFormRules } from "@hooks/Forms/useFormRules"
import { AgencyProfilePayload, AgencyProfileSchema } from "../profileSchemas"
import { useCallback, useMemo } from "react"
import usePutAgency from "@services/Agencies/Put/usePut"
import usePostAgency from "@services/Agencies/Post/usePost"
import { AgencyShape } from "@type/Agencies"
import { getCNPJFormatted, getNumberFormatted } from "@helpers/string"
import { useI18n } from "@contexts/I18n"

type Props = {
    agency?: AgencyShape
}

export function useProfile({ agency = {} as AgencyShape }: Props = {} as Props) {
    const { t } = useI18n()
    const schema = useMemo(() => AgencyProfileSchema(t), [t])
    const { formMethods, handleSubmit, register, errors } = useFormRules<AgencyProfilePayload>({
        schema: schema,
        defaultValues: {
            ...(Object.fromEntries(Object.entries(agency).filter(([index, value]) => !!index && !!value))),
            phone: getNumberFormatted(agency.phone),
            cnpj: getCNPJFormatted(agency.cnpj),
        }
    })
    const { mutateAsync: putAgency, isPending: isLoadingPut } = usePutAgency()
    const { mutateAsync: postAgency, isPending: isLoadingPost } = usePostAgency();

    const onSubmit = useCallback(async (payload: AgencyProfilePayload) => {
        if (payload.id) {
            await putAgency({
                ...payload,
                id: agency.id ?? 0,
                logotype: payload.logotype === "" ? agency?.logotype : payload.logotype
            })
        } else {
            await postAgency(payload)
        }

    }, [putAgency, postAgency, agency])

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoadingPut || isLoadingPost
    }
}