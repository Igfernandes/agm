import { ProfileFormProps } from "./type";
import { Button } from "@components/shared/forms/Button";
import { useFormContext } from "react-hook-form";
import { Select } from "@components/shared/forms/Select";
import { useI18n } from "@contexts/I18n";
import { Input } from "@components/shared/forms/Input";
import { formatMoney } from "@helpers/currencies";
import { Datetime } from "@components/shared/forms/DateTime";

type Props = ProfileFormProps & {
    isLoading: boolean;
};

export function Sidebar({ watch, isLoading }: Props) {
    const { register } = useFormContext()
    const { t } = useI18n()

    return (
        <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
                <div className="mb-4">
                    <Select defaultValue={"PENDING"} options={["PAID", "PENDING", "CANCELED"]
                        .map(status => ({ text: t(`Words.${status.toLowerCase()}`), value: status }))}
                        {...register("status")} dataTestId="status" label={t("Words.status")} />
                </div>
                <div className="mb-4">
                    <Input step={"00.01"} placeholder="00,00" type="number" {...register("price", {
                        setValueAs: (value) => formatMoney(value, "REAL"),
                        valueAsNumber: true
                    })} label={t("Words.price")} dataTestId="price" prefix="R$: " />
                </div>
                <div className="mb-4">
                    <Input step={"00.01"} placeholder="00,00" type="number" {...register("discount", {
                        setValueAs: (value) => formatMoney(value, "REAL"),
                        valueAsNumber: true
                    })} label={t("Words.discount")} dataTestId="discount" prefix="R$: " />
                </div>
                <div className="mb-4">
                    <Datetime
                        {...register("created_at")} dataTestId="created_at" label={t("Texts.realized_at")} />
                </div>
                <hr className="my-2 border-secondary" />

            </div>
            <div className="w-full mt-auto">
                <div className="w-full ml-auto mt-2  mb-3">
                    <Button isLoading={isLoading} className="text-white" text={watch('id') ? t("Words.update") : t("Words.create")} />
                </div>
            </div>

        </div>
    )
}