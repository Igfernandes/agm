import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const StoreFieldsSchema = (t: TFunction) =>
  z.object({
    group: z.string({ required_error: t("Validations.required") }),
    name: z.string({ required_error: t("Validations.required") }).min(3, {
      message: t("Validations.min_length", {
        field: t("Words.name"),
        length: "3",
      }) as string,
    }),
    component: z.enum(["INPUT", "SELECT", "TEXTAREA"]).default("INPUT"),
    is_required: z.enum(["YES", "NOT"]).default("NOT"),
    is_sensitive: z.enum(["YES", "NOT"]).default("NOT"),
    type: z
      .enum(["TEXT", "COLOR", "NUMBER", "DATE", "DATETIME-LOCAL", "FILE"])
      .default("TEXT"),
    hasContinueRegister: z.boolean(),
    value: z.string({ required_error: t("Validations.required") }).optional(),
  });

export type StoreFieldsPayload = z.infer<ReturnType<typeof StoreFieldsSchema>>;
