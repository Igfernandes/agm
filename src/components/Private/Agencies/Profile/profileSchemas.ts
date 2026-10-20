import { REGEXES } from "@constants/regexes";
import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const AgencyProfileSchema = (t: TFunction) =>
  z.object({
    id: z.number({ required_error: t("Validations.required") }).optional(),
    name: z
      .string({ required_error: t("Validations.required") })
      .min(3, {
        message: t("Validations.min_length", {
          field: t("Words.name"),
          length: "3",
        }),
      })
      .max(150, {
        message: t("Validations.max_length", {
          field: t("Words.name"),
          length: "150",
        }),
      }),
    status: z
      .enum(["ACTIVE", "INACTIVE"], {
        required_error: t("Validations.required"),
      })
      .default("ACTIVE"),
    email: z
      .string({ required_error: t("Validations.required") })
      .optional() // Permite que o campo seja omitido ou vazio
      .or(z.literal("")) // Permite string vazia ("")
      .refine((email) => email === "" || REGEXES.EMAIL.test(`${email}`), {
        message: t("Validations.email"),
      }),
    phone: z.string({ required_error: t("Validations.required") }),
    cnpj: z
      .string({ required_error: t("Validations.required") })
      .nonempty(t("Validations.required")),
    describe: z
      .string({ required_error: t("Validations.required") })
      .max(7000, {
        message: t("Validations.max_length", {
          field: t("Words.description"),
          length: "1000",
        }),
      })
      .optional(),
    website: z
      .string({ required_error: t("Validations.required") })
      .max(250, {
        message: t("Validations.max_length", {
          field: t("Words.website"),
          length: "250",
        }),
      })
      .optional(),
    logotype: z
      .string({ required_error: t("Validations.required") })
      .optional(),
    address: z.object({
      country: z.string({ required_error: t("Validations.required") }),
      state: z.string({ required_error: t("Validations.required") }),
      city: z.string({ required_error: t("Validations.required") }),
      zip_code: z.string({ required_error: t("Validations.required") }),
      number: z.string({ required_error: t("Validations.required") }),
      complement: z.string({ required_error: t("Validations.required") }),
    }),
    social_media: z
      .array(
        z.object({
          platform: z.enum(
            ["FACEBOOK", "INSTAGRAM", "TWITTER", "LINKEDIN", "WHATSAPP", "SITE"],
            {
              required_error: t("Validations.required"),
              message: t("Validations.enum", {
                list: "FACEBOOK, INSTAGRAM, TWITTER, LINKEDIN, WHATSAPP, SITE",
              }),
            }
          ),
          link: z.string({ required_error: t("Validations.required") }),
        })
      )
      .optional(),
  });

export type AgencyProfilePayload = z.infer<
  ReturnType<typeof AgencyProfileSchema>
>;
