import { useFormContext } from "react-hook-form";
import { SaleProfilePayload } from "./profileSchemas";
import { useI18n } from "@contexts/I18n";
import { Input } from "@components/shared/forms/Input"
import { useCallback, useState } from "react";
import { CPF } from "@components/shared/forms/CPF";
import { Date } from "@components/shared/forms/Date";

export function Dependents() {
    const { t } = useI18n()
    const [amount, setAmount] = useState<number>(0)
    const { register, setValue, watch, formState: { errors } } = useFormContext<SaleProfilePayload>()
    const dependents = watch("dependents")

    const handleRemove = useCallback((index: number) => {
        setAmount((prev) => prev - 1)
        setValue("dependents", (dependents ?? []).filter((_, i) => i !== index))
    }, [setValue, dependents])

    return (
        <div>
            <div className="flex justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-semibold text-primary ">{t("Texts.dependent_information")}</h2>
                    <p className="text-sm">{t("Screens.dashboard.sales.text_describe_dependent_information")}</p>
                </div>
                <div>
                    <span onClick={() => setAmount((prev) => prev + 1)} className="bg-primary cursor-pointer text-white inline-block px-2 py-2 rounded-md font-semibold">{t("Words.add")}</span>
                </div>
            </div>

            {Array.from({ length: amount }).map((_, index) => (
                <div key={`dependent_${index}`} className="flex flex-wrap justify-between bg-secondary my-4 px-2">
                    <div className="w-full my-2">
                        <Input maxLength={100} required={true} dataTestId="name" {...register(`dependents.${index}.name`)} label={t("Words.name")} errors={errors?.dependents?.[index]?.name} />
                    </div>
                    <div className="w-full md:w-[48%] my-2">
                        <CPF {...register(`dependents.${index}.cpf`)} name={`dependents.${index}.cpf`} required={true} dataTestId="cpf" label={t("Words.cpf")} errors={errors?.dependents?.[index]?.cpf} />
                    </div>
                    <div className="w-full md:w-[48%] my-2">
                        <Date {...register(`dependents.${index}.birthdate`)} name={`dependents.${index}.birthdate`} required={true} dataTestId="birthdate" label={t("Words.birthdate")} errors={errors?.dependents?.[index]?.birthdate} />
                    </div>
                    <div className="w-full text-right mt-1 mb-2">
                        <span onClick={() => handleRemove(index)}
                            className="bg-red  text-white cursor-pointer px-2 py-2 inline-block rounded-md">
                            {t("Words.remove")}</span>
                    </div>
                </div>
            ))}
        </div>

    )
}