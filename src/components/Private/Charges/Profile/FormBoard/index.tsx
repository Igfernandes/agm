import { useForms } from "../hooks/useForms";
import { InfoBoard } from "@components/shared/forms/InfoBoard/form";
import { TInput } from "@components/shared/forms/InfoBoard/fields/Input";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ChargeShape } from "@type/Charges";
import { FormBoardHeader } from "./header";
import { When } from "@components/utilities/When";
import { TNumber } from "@components/shared/forms/InfoBoard/fields/Number";
import { TDatetime } from "@components/shared/forms/InfoBoard/fields/Datetime";
import { useI18n } from "@contexts/I18n";

dayjs.extend(customParseFormat);

type Props = {
  charge: ChargeShape;
};

export function FormBoard({ charge }: Props) {
  const { formMethods, submit, errors, isLoadingPutCharge } =
    useForms({ charge });
  const type = formMethods.watch("type");
  const { t } = useI18n();

  return (
    <div className="bg-white py-7 px-4 rounded-lg">
      <div className="mb-6">
        <FormBoardHeader charge={charge} setValue={formMethods.setValue} />
      </div>
      <InfoBoard
        formMethods={formMethods}
        submit={submit}
        isLoading={isLoadingPutCharge}
      >
        <TInput
          label={t("Words.name")}
          name={"title"}
          dataTestId="title"
          errors={errors.title?.message}
        />

        <When value={type === "APPELLANT"}>
          <TNumber
            label={t("Words.period") + ` (${t("Words.months")})`}
            name={"period"}
            dataTestId="period"
            errors={errors.period?.message}
          />
          <TDatetime
            label={t("Words.started_at")}
            name={"started_at"}
            dataTestId="started_at"
            errors={errors.started_at?.message}
          />
        </When>
        <When value={type !== "APPELLANT"}>
          <TNumber
            label={t("Words.amount")}
            name={"amount"}
            dataTestId="amount"
            min={0}
            errors={errors.amount?.message}
          />
        </When>
        <TNumber
          label={t("Words.price")}
          name={"price"}
          prefix="R$: "
          dataTestId="price"
          step={"0.01"}
          errors={errors.price?.message}
        />
        <TNumber
          label={t("Texts.promotional_price")}
          name={"promotional_price"}
          step={"0.01"}
          prefix="R$: "
          dataTestId="promotional_price"
          errors={errors.promotional_price?.message}
          type="number"
        />
        <TNumber
          label={t("Texts.expired_days")}
          name={"expired_days"}
          dataTestId="expired_days"
          className="bg-white"
        />
      </InfoBoard>
    </div>
  );
}
