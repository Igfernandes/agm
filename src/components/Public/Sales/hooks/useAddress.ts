import { useSalesContext } from "../context";
import { useCallback, useMemo } from "react";
import { OptionsShape } from "@components/shared/forms/SelectSearch/type";
import { TourAddressShape } from "@type/Tours/Address";

export function useAddress() {
  const { tour } = useSalesContext();

  const destinyAddresses = useMemo(
    () =>
      tour?.addresses
        ? Array.from(tour?.addresses).filter(
            (address) => address.type === "DESTINY",
          )
        : [],
    [tour],
  );
  const originAddresses = useMemo(
    () =>
      tour?.addresses
        ? Array.from(tour?.addresses).filter(
            (address) => address.type === "ORIGIN",
          )
        : [],
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
