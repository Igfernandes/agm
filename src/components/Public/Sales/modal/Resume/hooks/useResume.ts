import { useSalesContext } from "@components/Public/Sales/context";
import { SalesPayload } from "@components/Public/Sales/salesSchemas";
import usePostSaleResume from "@services/Sales/PostResume/usePost";
import dayjs from "dayjs";
import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ResumeShape } from "../type";

dayjs.extend(customParseFormat);

export function useResume() {
  const { tour } = useSalesContext();
  const {
    mutateAsync: postResume,
    data,
    isPending: isLoadingResume,
  } = usePostSaleResume();
  const { getValues } = useFormContext();

  const resume = useMemo(() => {
    return data?.resume;
  }, [data]);

  const price = useMemo(() => {
    if (!tour) return 0;

    const pricePromotional = tour?.promotional_price ?? 0;

    return pricePromotional > 0 ? pricePromotional : (tour?.price ?? 0);
  }, [tour]);

  const amountPaid = useMemo(() => {
    if (!resume) return price;

    const result = resume.reduce((acc: number, curr: ResumeShape) => {
      if (curr.gratuities) return acc;

      return acc + (curr.discount ? price - curr.discount : price);
    }, 0);

    return result ?? price;
  }, [resume, price]);

  const hasResidency = useMemo(() => {
    if (!resume) return false;

    return resume.some((item: ResumeShape) => !!item.residency);
  }, [resume]);

  useEffect(() => {
    if (!tour) return;

    const payload = (getValues() ?? {}) as SalesPayload;

    if (!payload.name || !payload.cpf || !payload.birthdate) return;

    postResume({
      ...payload,
      dependents: payload.dependents?.map((dependent) => ({
        name: dependent.name,
        cpf: dependent.cpf,
        birthdate: dayjs(
          String(dependent.birthdate).trim(),
          ["DD/MM/YYYY", "YYYY-MM-DD"],
          true,
        ).format("YYYY-MM-DD"),
      })),
      tour_id: tour?.id,
    });
  }, [postResume, getValues, tour]);

  return {
    resume,
    amountPaid,
    hasResidency,
    price,
    isLoadingResume,
  };
}
