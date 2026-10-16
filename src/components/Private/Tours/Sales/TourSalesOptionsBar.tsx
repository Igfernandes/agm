import { SaleFilters } from "./SaleFilters";

export function TourSalesOptionsBar() {

  return (
    <>
      <div className="relative flex justify-between flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[45%] xl:w-[25%]">
          <SaleFilters />
        </div>
      </div>
    </>
  );
}
