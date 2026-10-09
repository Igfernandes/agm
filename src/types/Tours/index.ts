import { BaseShape, CurrenciesType } from "@type/data";
import { TourGalleryShape } from "./Gallery";
import { TourAddressShape } from "./Address";

export type TourShape = BaseShape & {
  id: number;

  title: string;
  slug: string;

  banner?: string;
  description?: string;
  short_description?: string;

  price: number;
  promotional_price?: number;

  currency: CurrenciesType;

  available_at?: string; // ISO datetime
  unavailable_at?: string; // ISO datetime

  video?: string;
  rating?: unknown;

  slots?: number;
  featured: "0" | "1";

  status: "PUBLISHED" | "DRAFT" | "ARCHIVED";

  owner_id?: number;
  addresses: Omit<TourAddressShape, "updated_at" | "created_at" | "tour_id">[];

  created_at: string;
  updated_at: string;
};

export type TourPreviewShape = Omit<
  TourShape,
  "owner_id" | "unavailable_at" | "status" | "updated_at"
> & {
  activity_period: {
    value: number;
    unit: "hours" | "days" | "weeks" | "months";
    label: string;
    start: string;
    end: string;
  };
  sales: number;
  agencies?: Array<{
    name: string;
    phone: string;
  }>;
  sale_at?: string;
  is_available_for_sale: boolean;
  addresses: Omit<TourAddressShape, "updated_at" | "created_at" | "tour_id">[];
  galleries: Omit<TourGalleryShape, "created_at" | "tour_id">[];
};
