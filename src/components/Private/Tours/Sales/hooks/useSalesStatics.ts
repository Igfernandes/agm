import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import useGetSalesStatics from "@services/Sales/GetStatics/useGet";
import { useMemo } from "react";

export function useSalesStatics() {
  const { filters } = useFiltersContext();
  const { data: dataSaleStatics } = useGetSalesStatics(filters["SALES"] ?? {});
  const saleStatics = useMemo(() => dataSaleStatics, [dataSaleStatics]);

  return {
    saleStatics,
  };
}
