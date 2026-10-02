import { TFunction } from "@contexts/I18n";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

export const ChargeSchema = (t: TFunction) =>
  z.object({
    title: z.string({ required_error: t("Validations.required") }),
    type: z.enum(["APPELLANT", "PUNCTUAL"], {
      required_error: t("Validations.required"),
      message: t("Validations.enum", {
        field: t("Words.type"),
        list: "FACEBOOK, INSTAGRAM, TWITTER, LINKEDIN, WHATSAPP",
      }),
    }),
    privacy: z.enum(["PUBLIC", "PRIVATE"], {
      required_error: t("Validations.required"),
      message: t("Validations.enum", {
        list: "FACEBOOK, INSTAGRAM, TWITTER, LINKEDIN, WHATSAPP",
        field: t("Words.privacy"),
      }),
    }),
    client_ids: z
      .preprocess((value) => {
        if (!Array.isArray(value)) return [];

        return value.map((v) => Number(v)).filter((v) => Number.isInteger(v));
      }, z.array(z.number().int()))
      .optional(),
    agency_ids: z
      .preprocess((value) => {
        if (!Array.isArray(value)) return [];

        return value.map((v) => Number(v)).filter((v) => Number.isInteger(v));
      }, z.array(z.number().int()))
      .optional(),
    period: optionalNumber(t("Validations.required")),
    amount: optionalNumber(t("Validations.required")),
    price: z.number({ required_error: t("Validations.required") }),
    started_at: z
      .string({ required_error: t("Validations.required") })
      .optional(),
    expired_days:  optionalNumber(t("Validations.required")),
    promotional_price: optionalNumber(t("Validations.required")),
  });

export type ChargesPayload = z.infer<ReturnType<typeof ChargeSchema>>;
