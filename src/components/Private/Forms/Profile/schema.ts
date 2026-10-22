import i18n from "@configs/i18n";
import { TFunction } from "@contexts/I18n";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

export const formsSchema = (t: TFunction) =>
  z
    .object({
      id: optionalNumber(t("Validations.number")),

      name: z
        .string({ required_error: t("Validations.required") })
        .min(3, {
          message: t("Validations.min_length", {
            field: t("Words.name"),
            length: "3",
          }),
        })
        .max(200, {
          message: t("Validations.max_length", {
            field: t("Words.name"),
            length: "200",
          }),
        }),

      slug: z.string().max(250).optional(),

      status: z.enum(["PUBLISHED", "DRAFT"], {
        required_error: i18n("Validations.required"),
        message: t("Validations.enum", {
          list: "PUBLISHED, DRAFT",
        }),
      }),

      stock: optionalNumber(t("Validations.number")).default(0),
      template: optionalNumber(),
      category: optionalNumber(),
      color_mark: z
        .string()
        .max(10, {
          message: i18n("Validations.max_length", {
            field: i18n("Words.color"),
            length: "10",
          }),
        })
        .nullable()
        .optional(),

      thanks_message: z.string().nullable().optional(),

      description: z.string().nullable().optional(),

      started_at: z.string(),
      expired_at: z.string(),
    })
    .refine((data) => new Date(data.expired_at) > new Date(data.started_at), {
      message: i18n("Validations.invalid_date_range"),
      path: ["expired_at"],
    });

export type FormsPayload = z.infer<ReturnType<typeof formsSchema>>;
