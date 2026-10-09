import { useFormRules } from "@hooks/Forms/useFormRules";
import { ChargeSchema, ChargesPayload } from "../schemas";
import usePostCreateCharge from "@services/Charges/Post/usePost";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";

export function useCharge() {
  const { t } = useI18n();
  const schema = useMemo(() => ChargeSchema(t), [t]);
  const { formMethods, errors } = useFormRules<ChargesPayload>({
    schema,
  });
  const { mutateAsync: postCharge, isPending } = usePostCreateCharge();
  const router = useRouter();

  console.log(errors, "errors")
  const submit = ({
    amount,
    period,
    expired_days,
    ...payload
  }: ChargesPayload) => {
    postCharge({
      ...payload,
      price: +payload.price,
      client_ids: payload.client_ids?.filter((id) => id > 0),
      agency_ids: payload.agency_ids?.filter((id) => id > 0),
      amount: amount ? +amount : undefined,
      period: period ? +period : undefined,
      promotional_price: +payload.promotional_price,
      expired_days: expired_days ? +expired_days : undefined,
    }).then(() => {
      setTimeout(() => {
        router.push(privateRoutes.finance);
      }, 2000);
    });
  };

  return {
    formMethods,
    errors,
    submit,
    isPending,
  };
}
