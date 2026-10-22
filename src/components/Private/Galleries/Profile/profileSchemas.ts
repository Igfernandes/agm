import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const GalleryProfileSchema = (t: TFunction) =>
  z.object({
    id: z.number().optional(),
    title: z
      .string({ required_error: t("Validations.string") })
      .min(3, {
        message: t("Validations.min_length", {
          field: t("Words.title"),
          length: "3",
        }),
      })
      .max(200, {
        message: t("Validations.max_length", {
          field: t("Words.title"),
          length: "200",
        }),
      }),
    cover: z.string().optional(),
    status: z
      .enum(["PUBLISHED", "DRAFT"], {
        invalid_type_error: t("Api.tours.invalid.status"),
      })
      .default("DRAFT"),
  });

export type GalleryProfilePayload = z.infer<
  ReturnType<typeof GalleryProfileSchema>
>;
