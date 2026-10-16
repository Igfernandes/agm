import { JSX } from "react";
import { SaleShape } from "@type/Sales";

export type HookSalesProps<SaleType> = {
  filter: string;
  handleFilter: (data: SaleType) => boolean;
};

export type TDataSales = {
  id: React.ReactNode;
  paid_amount: string;
  name: string;
  status: "PAID" | "PENDING" | "CANCELED";
  created_at: string;
  updated_at: string;
  actions: JSX.Element;
};

export type AgenciesStructProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalSaleOperationType = "SALE" | "DELETE" | boolean;

export type SalesPageProps = {
  targetSale: SaleShape;
};
