import { SaleShape } from "@type/Sales";
import { GetRequestShape } from "@type/service";

export type GetSalesRequest = GetRequestShape & {
  id?: number;
  tour_id?: number;
};

export type GetSalesResponse = {
  rows: Array<SaleShape>;
  count: number;
};
