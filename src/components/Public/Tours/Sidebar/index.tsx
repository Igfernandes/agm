import { SelectSearch } from "@components/shared/forms/SelectSearch"
import { useI18n } from "@contexts/I18n"
import { TourPreviewShape } from "@type/Tours"
import { FormProvider } from "react-hook-form"
import { useToursSidebar } from "./hooks/useToursSidebar"
import { Date } from "@components/shared/forms/Date"
import { Input } from "@components/shared/forms/Input"
import { Button } from "@components/shared/forms/Button"
import { TourFiltersPayload } from "./filtersSchemas"

type Props = {
    tours: Array<TourPreviewShape>;
    onFilters: (newFilters: TourFiltersPayload) => void
}

export function TourSidebar({ tours, onFilters }: Props) {
    const { formMethods, register, handleSubmit, addresses } = useToursSidebar({ tours })
    const { t } = useI18n()

    return (
        <FormProvider  {...formMethods}>
            <form onSubmit={handleSubmit(onFilters)}>
                <div className="border-secondary border h-full p-2 shadow-sm">
                    <div className="mt-7">
                        <div className="mt-2">
                            <Input type="text" {...register("title_contains")} label={t("Texts.search_by_title")} dataTestId="search_by_title" />
                        </div>
                    </div>
                    <div>
                        <div className="text-center mt-7">
                            <span className="text-primary font-semibold"><u>{t("Screens.tours.filters_by_date")}</u></span>
                        </div>
                        <div className="mt-2">
                            <Date  {...register("tour_at")} label={t("Texts.available_at")} dataTestId="available_at" />
                        </div>
                    </div>
                    <div>
                        <div className="text-center mt-7">
                            <span className="text-primary font-semibold"><u>{t("Screens.tours.filters_by_price")}</u></span>
                        </div>
                        <div className="mt-2">
                            <Input step={0.01} type="number" prefix="R$: " {...register("price", { valueAsNumber: true })} label={t("Texts.price_until")} dataTestId="price" />
                        </div>
                    </div>
                    <div className="mt-7">
                        <div className="text-center ">
                            <span className="text-primary font-semibold"><u>{t("Screens.tours.filters_by_region")}</u></span>
                        </div>
                        <div className="my-2">
                            <SelectSearch {...register("country")} options={addresses.countries.map(
                                country => ({ text: country, value: country }))} label={t("Words.country")} dataTestId="country" />
                        </div>
                        <div className="my-2">
                            <SelectSearch {...register("state")} options={addresses.states.map(
                                state => ({ text: state, value: state }))} label={t("Words.state")} dataTestId="state" />
                        </div>
                        <div>
                            <SelectSearch {...register("city")} options={addresses.cities.map(
                                city => ({ text: city, value: city }))} label={t("Words.city")} dataTestId="city" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <Button className="text-white" text={t("Texts.apply_filters")} />
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}