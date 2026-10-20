import { SaleShape } from "@type/Sales";

export type PostCreateSalePayload = Omit<
  SaleShape,
  "id"  |"amount" | "agency" | "client" | "tour" | "bank" | "created_at" | "updated_at"
> & {
  agency_id?: number;
  tour_id: number;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  contacts: {
    name: string;
    relation: string;
    phone: string;
  };
  country: string;
  state: string;
  city: string;
  dependents: Array<DependentData>;
  created_at?: string;
};

type DependentData = {
  name: string;
  cpf: string;
  birthdate: string;
};
