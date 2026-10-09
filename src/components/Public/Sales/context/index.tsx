import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Sale } from "../modal";
import { TourPreviewShape } from "@type/Tours";
import { SaleContextProps, SaleSteps } from "./types";
import useGetToursPreview from "@services/Tours/GetPreview/useGet";
import { When } from "@components/utilities/When";

type SalesContextType = {
  tour?: TourPreviewShape;
  handleTargetTour: (tour: number | undefined) => void;
  step: SaleSteps;
  handleStep: (step: SaleSteps) => void;
  agency_id?: number;
};

const SalesContext = createContext<SalesContextType>({} as SalesContextType);
export function SalesProvider({ children, agency_id }: SaleContextProps) {
  const [targetTourId, setTargetTourId] = useState<number | undefined>();
  const { rows } = useGetToursPreview({
    id: targetTourId
  })
  const tour = useMemo(() => rows.find((tour) => tour.id === targetTourId), [rows, targetTourId])
  const [step, setStep] = useState<SaleSteps>("PERSONAL");
  const handleTargetTour = useCallback((tour: number | undefined) => {
  
    setTargetTourId(tour);
  }, [])

  const handleStep = useCallback((step: SaleSteps) => {
    setStep(step);
  }, [])

  return (
    <SalesContext.Provider value={{
      tour,
      handleTargetTour,
      step,
      handleStep,
      agency_id
    }}>
      {children}
      <When value={!!targetTourId}>
        <div className="relative z-50">
          <Sale />
        </div>
      </When>
    </SalesContext.Provider>
  );
}

export function useSalesContext() {
  return useContext(SalesContext);
}
