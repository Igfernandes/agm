import { useCallback, useMemo } from "react";
import { OptionsShape } from "@components/shared/forms/SelectSearch/type";
import { TourAddressShape } from "@type/Tours/Address";
import { TourShape } from "@type/Tours";
import { useFormContext } from "react-hook-form";

type Props = {
  tours: Array<TourShape>;
};

export function useAddress({ tours }: Props) {
  const { watch } = useFormContext();
  const tourId = watch("tour_id");
  const tour = useMemo(() => {
    return tours.find((tour) => tour.id == tourId);
  }, [tourId, tours]);

  const destinyAddresses = useMemo(
    () =>
      tour?.addresses
        ? tour?.addresses.filter((address) => address.type === "DESTINY") || []
        : [],
    [tour],
  );
  const originAddresses = useMemo(
    () => tour?.addresses ? tour?.addresses.filter((address) => address.type === "ORIGIN") || [] : [],
    [tour],
  );

  const builderOption = useCallback(
    (
      addresses: Omit<
        TourAddressShape,
        "tour_id" | "updated_at" | "created_at"
      >[],
    ) => {
      return addresses.map((address) => {
        const addressFormatted = `${address?.complement} - ${address?.city}/${address?.state} - ${address?.country}`;

        return {
          value: addressFormatted,
          text: addressFormatted,
        };
      }) as Array<OptionsShape>;
    },
    [],
  );

  return {
    destinyAddresses,
    originAddresses,
    builderOption,
  };
}
