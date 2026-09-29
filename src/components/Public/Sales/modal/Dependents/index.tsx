import { useI18n } from "@contexts/I18n";
import { useSalesContext } from "../../context"
import { List } from "./List";
import { useDependents } from "./hooks/useDependents";
import { useStep } from "./hooks/useStep";
import { When } from "@components/utilities/When";
import { Preview } from "./preview";
import { useMemo } from "react";

export function Dependents() {
    const { handleStep, tour } = useSalesContext()
    const { t } = useI18n()
    const { register, handleAddDependent, errors, amount } = useDependents();
    const { handleStepChange, step } = useStep()
    const total = useMemo(() => {
        return amount.adults + amount.children + (tour?.sales ?? 0)
    }, [amount, tour])

    return (
        <div className="min-w-[30vw] py-2 mb-3">
            <div className="mb-1">
                <div className="bg-primary text-white rounded-sm px-2 py-1 mb-1">
                    <h3 className="font-semibold">{t("Texts.people_additional")}</h3>
                </div>
                <p className="text-sm">{t("Screens.sales.dependents.text")}</p>
            </div>
            <div className="flex text-sm justify-between">
                <ul className="flex">
                    <li className="mx-2">
                        <strong>{t("Words.adults")}:</strong> {amount.adults}
                    </li>
                    <li className="mx-2">
                        <strong>{t("Words.children")}:</strong> {amount.children}
                    </li>
                </ul>
                <When value={(tour?.slots ?? 0) > total}>
                    <div className="text-right">
                        <span onClick={() => handleStepChange(step === "FORM" ? "PREVIEW" : "FORM")} className="text-primary border-primary border py-1 px-2 rounded-md cursor-pointer">
                            {step === "FORM" ? "Visualizar" : "Adicionar"}
                        </span>
                    </div>
                </When>
                <When value={(tour?.slots ?? 0) < total}>
                    <div className="text-right">
                        <span onClick={() => handleStepChange("PREVIEW")} className="text-primary border-primary border py-1 px-2 rounded-md cursor-pointer">
                            {"Visualizar"}
                        </span>
                    </div>
                    <div>
                        <span>Não há mais vagas disponíveis para essa atividade.</span>
                    </div>
                </When>
            </div>
            <When value={step === "FORM"}>
                <List errors={errors} handleAddDependent={handleAddDependent} register={register} />
            </When>
            <When value={step === "PREVIEW"}>
                <Preview />
            </When>

            <div className="flex items-center justify-between mt-5">
                <div className="w-[48%]">
                    <button type="button" onClick={() => handleStep("REFERENCES")} className="w-full border-primary rounded-md target:scale-90 text-primary border py-2 text-center inline-block">
                        {t("Words.back")}
                    </button>
                </div>
                <div className="w-[48%]">
                    <button type="button" onClick={() => handleStep("RESUME")} className="w-full bg-primary text-white disabled:bg-zinc-300 disabled:border-zinc-300 disabled:text-gray-500 target:scale-90 border border-primary rounded-md py-2 text-center inline-block">
                        {t("Words.next")}
                    </button>
                </div>
            </div>
        </div>
    )
}