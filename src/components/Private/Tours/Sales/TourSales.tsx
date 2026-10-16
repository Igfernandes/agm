
import FiltersProvider from "@components/shared/layouts/Filters/contexts";
import { TourSalesOptionsBar } from "./TourSalesOptionsBar";
import { TourShape } from "@type/Tours";
import { TourSalesTable } from "./TourSalesTable";

type Props = {
    tour: TourShape
}

export default function TourSales({ tour }: Props) {

    return (
        <div className="pt-6">
            <FiltersProvider id="SALES">
                <TourSalesOptionsBar />
                <TourSalesTable tour={tour} />
            </FiltersProvider>
        </div>
    );
}

