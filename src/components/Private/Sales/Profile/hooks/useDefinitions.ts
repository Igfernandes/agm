import useGetAgencies from "@services/Agencies/Get/useGet";
import useGetTours from "@services/Tours/Get/useGet";
import { useMemo } from "react";

export function useDefinitions() {
  const { rows: dataTours } = useGetTours({
    status: "PUBLISHED",
    limit: 500,
  });
  const { rows: dataAgencies } = useGetAgencies({
    status: "ACTIVE",
  });

  const tours = useMemo(
    () =>
      dataTours.map((tour) => ({
        text: tour.title,
        value: tour.id,
      })),
    [dataTours],
  );
  const agencies = useMemo(
    () =>
      dataAgencies.map((agency) => ({
        text: agency.name,
        value: agency.id,
      })),
    [dataAgencies],
  );

  return {
    tours,
    agencies,
    dataTours,
  };
}
