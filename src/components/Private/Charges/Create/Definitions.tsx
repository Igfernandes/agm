import { Input } from "@components/shared/forms/Input";
import { Select } from "@components/shared/forms/Select";
import { useFormContext } from "react-hook-form";
import { ChargesPayload } from "./schemas";
import { When } from "@components/utilities/When";
import { Datetime } from "@components/shared/forms/DateTime";
import { useI18n } from "@contexts/I18n";

export function Definitions() {
  const { t } = useI18n()
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<ChargesPayload>();

  return (
    <div className="bg-white  py-4 px-6 rounded-xl mb-6">
      <div className="form-title mt-3 mb-5">
        <h3 className="text-xl">
          <strong>{t("Words.definitions")}</strong>
        </h3>
      </div>
      <div className="form-group w-full mb-6">
        <Input
          {...register("title")}
          dataTestId="title"
          label={t("Words.title")}
          errors={errors.title}
          maxLength={100}
        />
      </div>

      <div className="form-row flex flex-wrap mb-6 justify-between">
        <div className="form-group w-full lg:w-[48%]">
          <Select
            {...register("privacy")}
            dataTestId="privacy"
            label={t("Words.privacy")}
            options={["PUBLIC", "PRIVATE"].map((type) => ({
              text: t(`Words.${type.toLowerCase()}`),
              value: type,
            }))}
            required={true}
            errors={errors.privacy}
          />
          <span className="text-xs text-red ml-2 block mt-1">
            {t(`Screens.dashboard.finances.about_privacy_and_services`)}
          </span>
        </div>
        <div className="form-group w-full lg:w-[48%]">
          <Select
            {...register("type")}
            dataTestId="type"
            label={t("Words.type")}
            options={["APPELLANT", "PUNCTUAL"].map((type) => ({
              text: t(`Words.${type.toLowerCase()}`),
              value: type,
            }))}
            errors={errors.type}
          />
        </div>
      </div>
      <div className="form-row flex flex-wrap mb-6 justify-between">
        <When value={watch("type") === "APPELLANT"}>
          <div className="w-full md:w-[48%] ">
            <Input
              {...register("period", {
                valueAsNumber: true,
                required: true
              })}
              dataTestId="period"
              type="number"
              min={1}
              label={`${t("Words.period")} (${t("Words.months")})`}
              errors={errors.type}
              required={true}
            />
            <span className="text-xs text-red ml-2 block mt-1">
              {t(`Screens.dashboard.finances.about_period`)}
            </span>
          </div>
        </When>
        <When value={watch("type") !== "APPELLANT"}>
          <div className="form-group w-full lg:w-[48%] lg:mt-0">
            <Input
              {...register("amount", {
                valueAsNumber: true,
                required: true
              })}
              dataTestId="amount"
              label={`${t("Texts.charge_amount")}`}
              min={1}
              defaultValue={1}
              type="number"
              required={true}
              errors={errors.amount}
            />
          </div>
        </When>
        <div className="form-group w-full lg:w-[48%] mt-4 lg:mt-0">
          <Input
            {...register("expired_days", {
              valueAsNumber: true,
            })}
            type="number"
            min="1"
            dataTestId="expired_days"
            label={`${t("Texts.expired_days")} (${t("Words.optional")})`}
            errors={errors.expired_days}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between my-6">
        <When value={watch("type") === "APPELLANT"}>
          <div className="w-full md:w-[48%] ">
            <Datetime
              {...register("started_at")}
              dataTestId="started_at"
              label={`${t("Words.started_at")}`}
              errors={errors.type}
              required={true}
            />
          </div>
        </When>
      </div>
      <div className="form-row flex flex-wrap mb-6 justify-between">
        <div className="form-group w-full lg:w-[48%]">
          <Input
            {...register("price", {
              valueAsNumber: true,
              required: true
            })}
            dataTestId="price"
            required={true}
            step={"0.01"}
            prefix="R$: "
            type="number"
            label={t("Words.price")}
            errors={errors.price}
          />
        </div>
        <div className="form-group w-full lg:w-[48%] mt-4 lg:mt-0">
          <Input
            {...register("promotional_price", {
              valueAsNumber: true,
            })}
            step={"0.01"}
            type="number"
            prefix="R$: "
            dataTestId="promotional_price"
            errors={errors.promotional_price}
            label={`${t("Texts.promotional_price")} (${t(
              "Words.optional"
            )})`}
          />
        </div>
      </div>
    </div>
  );
}
