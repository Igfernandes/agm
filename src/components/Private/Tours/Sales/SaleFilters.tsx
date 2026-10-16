import { Date } from "@components/shared/forms/Date";
import { Input } from "@components/shared/forms/Input";
import { Select } from "@components/shared/forms/Select";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";
import { FieldError } from "react-hook-form";

export function SaleFilters() {
    const { t } = useI18n()
    const { register, methods } = useFiltersContext()
    const { errors } = methods.formState;

    return (
        <Filters id="SALES" >
            <div className="mb-1">
                <p><i>{t("Screens.dashboard.sales.sales_filters")}</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full md:w-[48%] my-2">
                    <Input {...register("name_contains")} dataTestId="filter-name" label={t("Words.name")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.sales.name_filter_hint")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Date {...register("created_at")} dataTestId="filter-sold_at" label={t("Words.sold_at")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.sales.sold_at_filter_hint")}</span>
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
                                text: t("Words.paid"),
                                value: "PAID",
                            },
                            {
                                text: t("Words.pending"),
                                value: "PENDING",
                            },
                            {
                                text: t("Words.canceled"),
                                value: "CANCELED",
                            }
                        ]}
                        errors={errors.status as FieldError}
                    />
                </div>
            </div>
        </Filters>
    )
}