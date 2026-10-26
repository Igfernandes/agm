import { REGEXES } from "@constants/regexes";
import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const ClientCreateSchema = (t: TFunction) => z.object({
  category: z.string({ required_error: t("Validations.required") }),
  name: z.string({ required_error: t("Validations.required") }).min(3, {
    message: (t("Validations.min_length") as string)
      .replace("${field}", t("Words.name"))
      .replace("${length}", "3"),
  }),
  birthdate: z
    .string({ required_error: t("Validations.required") })
    .optional() // Permite que o campo seja omitido ou vazio
    .or(z.literal("")), // Permite string vazia ("")
  email: z
    .string({ required_error: t("Validations.required") })
    .optional() // Permite que o campo seja omitido ou vazio
    .or(z.literal("")) // Permite string vazia ("")
    .refine((email) => email === "" || REGEXES.EMAIL.test(`${email}`), {
      message: t("Validations.email"),
    }),
  hasContinueRegister: z.boolean(),
  phone: z.string({ required_error: t("Validations.required") }),
  cpf: z
    .string({ required_error: t("Validations.required") })
    .nonempty(t("Validations.required")),
});

export type ClientCreatePayload = z.infer<ReturnType<typeof ClientCreateSchema>>;
