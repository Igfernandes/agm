import { REGEXES } from "@constants/regexes";
import { TFunction } from "@contexts/I18n";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

export const SaleProfileSchema = (t: TFunction) =>
  z.object({
    id: z.number({ required_error: t("Validations.required") }).optional(),
    reference: z
      .string({ required_error: t("Validations.required") })
      .min(3, {
        message: t("Validations.min_length", {
          field: t("Words.reference"),
          length: "3",
        }),
      })
      .max(150, {
        message: t("Validations.max_length", {
          field: t("Words.reference"),
          length: "150",
        }),
      }),
    boarding: z.string({ required_error: t("Validations.required") }).nonempty({
      message: t("Validations.required")
    }),
    landing: z.string({ required_error: t("Validations.required") }).nonempty({
      message: t("Validations.required")
    }),
    payment_id: z
      .string({ required_error: t("Validations.required") })
      .max(150, {
        message: t("Validations.max_length", {
          field: t("Words.reference"),
          length: "150",
        }),
      }),
    price: optionalNumber(),
    currency: z
      .enum(["REAL", "USD", "EURO"], {
        required_error: t("Validations.required"),
        message: t("Validations.enum", { list: "REAL, USD, EURO" }),
      })
      .default("REAL"),
    discount: optionalNumber(),
    status: z
      .enum(["PENDING", "PAID", "CANCELED"], {
        required_error: t("Validations.required"),
        message: t("Validations.enum", { list: "PENDING, PAID, CANCELED" }),
      })
      .default("PENDING"),
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
    email: z
      .string({ required_error: t("Validations.required") })
      .refine((email) => email === "" || REGEXES.EMAIL.test(`${email}`), {
        message: t("Validations.email"),
      }),
    phone: z.string({ required_error: t("Validations.required") }),
    cpf: z
      .string({ required_error: t("Validations.required") })
      .nonempty(t("Validations.required")),
    birthdate: z
      .string({ required_error: t("Validations.required") })
      .nonempty(t("Validations.required")),
    dependents: z.array(
      z.object({
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
        cpf: z
          .string({ required_error: t("Validations.required") })
          .min(3, {
            message: t("Validations.min_length", {
              field: t("Words.cpf"),
              length: "3",
            }),
          })
          .max(22, {
            message: t("Validations.max_length", {
              field: t("Words.cpf"),
              length: "22",
            }),
          }),
        birthdate: z
          .string({ required_error: t("Validations.required") })
          .min(3, {
            message: t("Validations.min_length", {
              field: t("Words.birthdate"),
              length: "3",
            }),
          })
          .max(22, {
            message: t("Validations.max_length", {
              field: t("Words.birthdate"),
              length: "22",
            }),
          }) ,
      })
    ).default([]),
    contact: z.object({
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
      phone: z
        .string({ required_error: t("Validations.required") })
        .min(3, {
          message: t("Validations.min_length", {
            field: t("Words.package"),
            length: "3",
          }),
        })
        .max(22, {
          message: t("Validations.max_length", {
            field: t("Words.cpf"),
            length: "22",
          }),
        }),
      relation: z
        .string({ required_error: t("Validations.required") })
        .min(3, {
          message: t("Validations.min_length", {
            field: t("Words.relation"),
            length: "3",
          }),
        })
        .max(22, {
          message: t("Validations.max_length", {
            field: t("Words.birthdate"),
            length: "22",
          }),
        }),
    }),
    country: z.string({ required_error: t("Validations.required") }),
    state: z.string({ required_error: t("Validations.required") }),
    city: z.string({ required_error: t("Validations.required") }),
    agency_id: z
      .number({ required_error: t("Validations.required") })
      .optional(),
    tour_id: z.number({ required_error: t("Validations.required") }),
    created_at: z.string().optional(),
  });

export type SaleProfilePayload = z.infer<ReturnType<typeof SaleProfileSchema>>;
