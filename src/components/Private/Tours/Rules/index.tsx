import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { TourShape } from "@type/Tours";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Select } from "@components/shared/forms/Select";
import { useRef } from "react";
import { COUNTRIES } from "../../../../data/address/countries";
import { BRAZILIAN_STATES } from "../../../../data/address/states";
import { When } from "@components/utilities/When";
import { Date } from "@components/shared/forms/Date";
import { useRules } from "./hooks/useRules";
import { useI18n } from "@contexts/I18n";

type Props = {
    tour: TourShape;
}

export function TourRules({ tour }: Props) {
    const countriesRef = useRef<{ code: string, name: string }[]>(COUNTRIES ?? [])
    const statesRef = useRef<{ code: string, name: string }[]>(BRAZILIAN_STATES ?? [])
    const { register, errors, formMethods, handleSubmit, onSubmit, isLoading } = useRules({ tour })
    const actionInYearsOld = formMethods.watch("rule.0.action");
    const actionInAddress = formMethods.watch("rule.1.action");
    const { t } = useI18n()

    return (
        <FormProvider {...formMethods}>
            <form className="bg-white w-full px-4 py-1 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap justify-between pb-5">
                    <div className=" md:w-[48%] mt-4">
                        <div className="mb-4">
                            <h2 className="text-2xl font-semibold text-primary ">{i18n("Texts.discount_by_years")}</h2>
                            <p className="text-sm">{t("Screens.dashboard.tours.discount_by_years_description")}</p>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <Input type="hidden" dataTestId="rule_type" {...register('rule.0.type')} defaultValue={"AGE"} />
                            <Input type="hidden" dataTestId="rule_expression" {...register('rule.0.expression')} defaultValue={"MAX"} />

                            <div className="w-full my-2">
                                <Input dataTestId="rule_0_amount" {...register("rule.0.amount")} label={i18n("Texts.until_years_old")} errors={errors?.rule?.[0]?.amount} />
                            </div>
                            <div className="w-full my-2">
                                <Select defaultValue={"FREE"} dataTestId="rule_0_action"
                                    options={[
                                        {
                                            text: t("Texts.select_option"),
                                            value: null
                                        },
                                        {
                                            text: t("Words.gratuity"),
                                            value: "FREE"
                                        }, {
                                            text: t("Words.discount"),
                                            value: "PRICE"
                                        }]}
                                    {...register("rule.0.action")} label={t("Words.action")}
                                    errors={errors?.rule?.[0]?.action} />
                            </div>
                            <When value={actionInYearsOld === "PRICE"}>
                                <div className="w-full md:w-[100%] my-2">
                                    <Input type="number" dataTestId="rule_0_price" {...register("rule.0.price")} label={i18n("Words.price")} errors={errors?.rule?.[0]?.price} />
                                </div>
                            </When>
                            <div className="w-full md:w-[100%] my-2">
                                <Date type="rule_0_applies" dataTestId="rule_0_applies" {...register("rule.0.applies_at")} label={i18n("Words.applies")} errors={errors?.rule?.[0]?.applies_at} />
                            </div>
                        </div>
                    </div>
                    <div className=" md:w-[48%]  mt-6">
                        <div className="mb-4">
                            <h2 className="text-2xl font-semibold text-primary ">{i18n("Texts.discount_by_address")}</h2>
                            <p className="text-sm">{t("Screens.dashboard.tours.discount_by_address_description")}</p>
                        </div>
                        <Input type="hidden" dataTestId="rule_type" {...register('rule.1.type')} defaultValue={"RESIDENCY"} />
                        <Input type="hidden" dataTestId="rule_expression" {...register('rule.1.expression')} defaultValue={"IN"} />

                        <div className="flex flex-wrap justify-between">
                            <div className="w-full md:w-[48%] my-2">
                                <Select defaultValue={"Brasil"} dataTestId="countries" options={countriesRef.current.map(country => ({ value: country.name, text: country.name }))} {...register("rule.1.value.country")} label={i18n("Words.country")} errors={errors?.rule?.[1]?.value?.country} />
                            </div>
                            <When value={formMethods.getValues("rule.1.value.country") === "Brasil"}>
                                <div className="w-full md:w-[48%] my-2">
                                    <Select defaultValue={"Rio de Janeiro"} dataTestId="state" options={statesRef.current.map(state => ({ value: state.name, text: state.name }))} {...register("rule.1.value.state")} label={i18n("Words.state")} errors={errors?.rule?.[1]?.value?.state} />
                                </div>
                            </When>
                            <When value={formMethods.getValues("rule.1.value.country") !== "Brasil"}>
                                <div className="w-full md:w-[48%] my-2">
                                    <Input defaultValue={"Rio de Janeiro"} dataTestId="state" {...register("rule.1.value.state")} label={i18n("Words.state")} errors={errors?.rule?.[1]?.value?.state} />
                                </div>
                            </When>
                            <div className="w-full my-2">
                                <Input dataTestId="city" {...register("rule.1.value.city")} label={i18n("Words.city")} errors={errors?.rule?.[1]?.value?.city} />
                            </div>
                            <div className="w-full my-2">
                                <Select defaultValue={"FREE"} dataTestId="rule_1_action"
                                    options={[{
                                        text: i18n("Words.gratuity"),
                                        value: "FREE"
                                    }, {
                                        text: i18n("Words.discount"),
                                        value: "PRICE"
                                    }]}
                                    {...register("rule.1.action")} label={i18n("Words.action")}
                                    errors={errors?.rule?.[1]?.action} />
                            </div>
                            <When value={actionInAddress === "PRICE"}>
                                <div className="w-full md:w-[100%] my-2">
                                    <Input type="number" dataTestId="rule_1_price" {...register("rule.1.price")} label={i18n("Texts.end_price")} errors={errors?.rule?.[1]?.price} />
                                </div>
                            </When>
                            <div className="w-full md:w-[100%] my-2">
                                <Date type="rule_1_applies" dataTestId="rule_1_applies" {...register("rule.1.applies_at")} label={i18n("Words.applies")} errors={errors?.rule?.[1]?.applies_at} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full ml-auto my-10">
                        <Button className="bg-primary text-white font-semibold ml-auto w-full md:w-[30%]" isLoading={isLoading} text={i18n("Words.update")} />
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}