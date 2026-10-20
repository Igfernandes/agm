import { Input } from "@components/shared/forms/Input";
import { ProfileFormProps } from "./type";
import { useFormContext } from "react-hook-form";
import { useI18n } from "@contexts/I18n";
import { Select } from "@components/shared/forms/Select";
import { KINSHIP } from "@constants/kinship";
import { SaleProfilePayload } from "./profileSchemas";
import { Phone } from "@components/shared/forms/Phone";

type Props = ProfileFormProps;

export function Contact({ errors }: Props) {
    const { register } = useFormContext<SaleProfilePayload>()
    const { t } = useI18n()

    return (
        <div>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-primary ">{t("Texts.contact_emergency")}</h2>
                <p className="text-sm">{t("Screens.dashboard.sales.text_describe_emergency_information")}</p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full my-2">
                    <Input required={true} maxLength={100} dataTestId="name" {...register("contacts.name")} label={t("Words.name")} errors={errors?.contacts?.name} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Phone required={true} dataTestId="phone" {...register("contacts.phone")}  label={`${t("Words.phone")}/Whatsapp`} errors={errors?.contacts?.phone} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Select required={true} options={[
                        {
                            text: t("Texts.select_option"),
                            value: ""
                        },
                        ...KINSHIP.map((kinship) => ({
                            text: t(`Words.${kinship.toLowerCase()}`),
                            value: kinship
                        }))
                    ]}  {...register("contacts.relation")} label={t("Words.kinship")} dataTestId="sale_kinship" />
                </div>
            </div>
        </div>

    )
}