import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback, useMemo } from "react"
import { SaleProfilePayload, SaleProfileSchema } from "../profileSchemas"
import usePostSale from "@services/Sales/Post/usePost"
import { useI18n } from "@contexts/I18n"

export function useProfile() {
    const { t } = useI18n();
    const schema = useMemo(() => SaleProfileSchema(t), [t])
    const { formMethods, handleSubmit, register, errors } = useFormRules<SaleProfilePayload>({
        schema,
        defaultValues: {
            dependents: []
        }
    })
    const { mutateAsync: postSale, isPending: isLoadingPost } = usePostSale();

    const onSubmit = useCallback(async (payload: SaleProfilePayload) => {
        postSale(payload)
    }, [postSale])

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoadingPost
    }
}