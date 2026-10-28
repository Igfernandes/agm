import i18n from "@configs/i18n";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

export const TourFiltersSchema = z.object({
  title_contains: z
    .string({ required_error: i18n("Validations.required") })
    .max(150, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.title"),
        length: "150",
      }),
    })
    .optional(),
  tour_at: z.string({ message: i18n("Validations.string") }).optional(),
  price: optionalNumber().optional(),
  country: z
    .string({ required_error: i18n("Validations.required") })
    .optional(),
  state: z.string({ required_error: i18n("Validations.required") }).optional(),
  city: z.string({ required_error: i18n("Validations.required") }).optional(),
});

export type TourFiltersPayload = z.infer<typeof TourFiltersSchema>;
