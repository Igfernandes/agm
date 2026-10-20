import { Input } from "@components/shared/forms/Input";
import { Select } from "@components/shared/forms/Select";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";
import { handleMaskCPF, handleMaskPhone } from "@helpers/string";
import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import { useMemo } from "react";
import { FieldError } from "react-hook-form";

export function ClientFilters() {
    const { t } = useI18n()
    const { register, methods } = useFiltersContext()
    const { errors } = methods.formState;
    const { data: categoryData } = useGetCategories();
    const categories = useMemo(() => categoryData ?? [], [categoryData]);

    return (
        <Filters id="CLIENTS" >
            <div className="mb-1">
                <p><i>{t("Screens.dashboard.clients.text_filters_below_to_refine_client_search")}</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full my-2">
                    <Input maxLength={150} {...register("name_contains")} dataTestId="filter-name" label={t("Words.name")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.clients.partial_name_search")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input maxLength={15} {...register("cpf")} onChangeCapture={handleMaskCPF} onKeyUp={handleMaskCPF} dataTestId="filter-cpf" label={t("Words.cpf")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.clients.complete_cpf_value")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input maxLength={25} {...register("phone")} onChangeCapture={handleMaskPhone} dataTestId="filter-phone" label={t("Words.phone")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.clients.complete_phone_value")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Select
                        {...register("category")}
                        label={t("Words.category")}
                        id="category"
                        dataTestId="category"
                        options={[
                            {
                                text: t("Texts.select_category"),
                                value: "",
                            },
                            ...categories.map((category) => ({
                                text: category.name,
                                value: category.id,
                            }))
                        ]}
                        errors={errors.category as FieldError}
                    />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Select
                        {...register("status")}
                        label={t("Words.status")}
                        id="status"
                        dataTestId="status"
                        options={[
                            {
                                text: t("Texts.select_status"),
                                value: "",
                            },
                            {
                                text: t("Words.active"),
                                value: "ACTIVE",
                            },
                            {
                                text: t("Words.inactive"),
                                value: "INACTIVE",
                            },
                        ]}
                        errors={errors.status as FieldError}
                    />
                </div>
            </div>
        </Filters>
    )
}