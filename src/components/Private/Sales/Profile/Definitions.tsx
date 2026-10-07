import { useFormContext } from "react-hook-form";
import { SaleProfilePayload } from "./profileSchemas";
import { useDefinitions } from "./hooks/useDefinitions";
import { Select } from "@components/shared/forms/Select";
import { useI18n } from "@contexts/I18n";
import { Input } from "@components/shared/forms/Input";
import { useAddress } from "@components/Public/Sales/hooks/useAddress";


export function Definitions() {
    const { tours, agencies } = useDefinitions()
    const { t } = useI18n()
    const { register, formState: { errors } } = useFormContext<SaleProfilePayload>()
    const { destinyAddresses, originAddresses, builderOption } = useAddress()

    console.log(errors)
    return (
        <div className="mb-5">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-primary ">{t("Words.definitions")}</h2>
                <p className="text-sm">{t("Screens.dashboard.sales.text_describe_definition")}</p>
            </div>
            <div >
                <div className="w-full my-4">
                    <Select options={[
                        {
                            text: t("Texts.select_option"),
                            value: 0
                        },
                        ...tours
                    ]} required={true} dataTestId="tour_id" {...register("tour_id", {
                        valueAsNumber: true
                    })} label={t("Words.tour")} errors={errors?.tour_id} />
                </div>
                <div className="w-full my-4">
                    <Select options={[
                        {
                            text: t("Texts.select_option"),
                            value: 0
                        },
                        ...agencies
                    ]} required={true} dataTestId="agency_id" {...register("agency_id", {
                        valueAsNumber: true
                    })} label={t("Words.agency")} errors={errors?.agency_id} />
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-[48%] mb-2">
                        <Input {...register("reference")} required={true} label={t("Words.reference")} dataTestId="reference" />
                    </div>
                    <div className="w-full md:w-[48%] mb-2">
                        <Input {...register("payment_id")} label={t("Words.payment_id")} dataTestId="payment_id" />
                    </div>
                </div>
                <div className="w-full my-2">
                    <Select dataTestId="boarding" required={true} options={[
                        {
                            text: t("Texts.select_option"),
                            value: ""
                        },
                        ...builderOption(originAddresses)
                    ]}
                        {...register("boarding")}
                        label={t("Screens.tours.address_boarding")} errors={errors?.boarding} />
                </div>
                <div className="w-full my-2">
                    <Select dataTestId="landing" required={true} options={[
                        {
                            text: t("Texts.select_option"),
                            value: ""
                        },
                        ...builderOption(destinyAddresses)
                    ]}
                        {...register("landing")}
                        label={t("Screens.tours.address_landing")} errors={errors?.landing} />
                </div>
            </div>
        </div>

    )
}