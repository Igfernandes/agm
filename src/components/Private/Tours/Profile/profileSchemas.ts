import { TFunction } from "@contexts/I18n";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

export const TourProfileSchema = (t: TFunction) =>
  z.object({
    id: z.number().optional(),
    title: z
      .string({ required_error: t("Validations.string") })
      .min(1, {
        message: t("Validations.min_length", {
          field: t("Words.title"),
          length: "1",
        }),
      })
      .max(200, {
        message: t("Validations.max_length", {
          field: t("Words.title"),
          length: "200",
        }),
      }),

    slug: z
      .string({ required_error: t("Validations.tours.invalid.slug") })
      .min(1, {
        message: t("Validations.min_length", {
          field: "slug",
          length: "1",
        }),
      })
      .max(30, {
        message: t("Validations.max_length", {
          field: "slug",
          length: "30",
        }),
      }),

    banner: z.string().optional().or(z.literal("")),

    description: z
      .string()
      .max(6000, {
        message: t("Validations.max_length", {
          field: t("Words.description"),
          length: "6000",
        }),
      })
      .optional()
      .or(z.literal("")),

    short_description: z
      .string({ required_error: t("Validations.string") })
      .max(200, {
        message: t("Validations.max_length", {
          field: t("Words.short_description"),
          length: "200",
        }),
      })
      .optional()
      .or(z.literal("")),

    price: z.number({
      required_error: t("Validations.number"),
      invalid_type_error: t("Validations.number"),
    }),

    promotional_price: optionalNumber(t("Validations.number")),

    currency: z
      .enum(["REAL", "USD", "EURO"], {
        required_error: t("Validations.list", {
          field: t("Words.currency"),
          list: "REAL, USD, EURO",
        }),
      })
      .default("REAL"),

    available_at: z
      .string({ message: t("Validations.string") }),

    unavailable_at: z
      .string({ message: t("Validations.string") }),

    video: z.string().optional().or(z.literal("")),

    rating: z.any().optional(),

    slots: optionalNumber(t("Validations.number")),
    featured: z
      .enum(["1", "0"], {
        required_error: t("Validations.list", {
          field: t("Words.featured"),
          list: "Sim, Não",
        }),
      })
      .default("0"),

    status: z
      .enum(["PUBLISHED", "DRAFT", "ARCHIVED"], {
        invalid_type_error: t("Api.tours.invalid.status"),
      })
      .default("DRAFT"),
  });

export type TourProfilePayload = z.infer<ReturnType<typeof TourProfileSchema>>;
