export type TourTabType =
  | "INFORMATION"
  | "BOARDING"
  | "LANDING"
  | "PERIODS"
  | "RULES"
  | "SALES"
  | "GALLERY"
  | "AGENCIES";
export type TourTabProps = {
  tabs: Record<TourTabType, React.ReactNode>;
};
