
import { useFormRules } from "@hooks/Forms/useFormRules";
import { useCallback, useMemo } from "react";
import {
    SaleProfilePayload,
    SaleProfileSchema,
} from "../profileSchemas";
import usePostSale from "@services/Sales/Post/usePost";
import { PostCreateSalePayload } from "@services/Sales/Post/type";
import { useI18n } from "@contexts/I18n";

export function useProfile() {
    const { t } = useI18n();

    const schema = useMemo(() => SaleProfileSchema(t), [t]);

    const {
        formMethods,
        handleSubmit,
        register,
        errors,
    } = useFormRules<SaleProfilePayload>({
        schema,
        defaultValues: {
            dependents: [],
        },
    });

    const {
        mutateAsync: postSale,
        isPending: isLoadingPost,
    } = usePostSale();

    const onSubmit = useCallback(
        async (payload: SaleProfilePayload) => {
            const salePayload: PostCreateSalePayload = {
                ...payload,
                contacts: [
                    {
                        name: payload.contacts.name,
                        relation: payload.contacts.relation,
                        phone: payload.contacts.phone,
                    },
                ],
            };

            await postSale(salePayload);
        },
        [postSale]
    );

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoadingPost,
    };
}
