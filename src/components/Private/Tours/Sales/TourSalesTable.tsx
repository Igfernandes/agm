import { useSales } from "./hooks/useSales";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { ModalSaleOperationType } from "./type";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { Shared } from "@components/shared/others/Shared";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";
import { TourShape } from "@type/Tours";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/Navigation/User";
import usePostExports from "@services/Exports/Post/usePost";
import { useMemo } from "react";
import useGetSales from "@services/Sales/Get/useGet";

type Props = {
  tour: TourShape
}

export function TourSalesTable({ tour }: Props) {
  const { t } = useI18n()
  const {
    handleDelete, setSelectors, isLoadingDelete, tHeads, selectors, updateForTable
  } = useSales();
  const { rows: sales } = useGetSales({
    tour_id: tour.id
  })
  const { handleToggleModal, modal } =
    useModalContext<ModalSaleOperationType>();
  const { filters } = useFiltersContext();
  const { hasPermission } = useUserNavigationContext();
  const { mutateAsync: postExport } = usePostExports();
  const targetSelectors = useMemo(() => selectors.filter((selector) => !!selector.isChecked)
    .map((selector) => +selector.value), [selectors])
  const salesIdsAll = useMemo(() => sales.map((sale) => sale.id), [sales])

  return (
    <>
      <div>
        <SmartTable
          ajax={{
            key: "sales",
            url: API_ROUTES.sales,
            builder: updateForTable
          }}
          options={{
            selector: {
              setSelectorRef: setSelectors,
            },
            pagination: {
              max: 6,
            },
            actions: [
              {
                handle: () =>
                  postExport({
                    entity: "SALES",
                    in_ids: salesIdsAll,
                    type: "PDF"
                  }),
                text: "Exportar todos PDF",
                permissions: [PERMISSIONS.sales.view],
              },
              {
                handle: () =>
                  postExport({
                    entity: "SALES",
                    in_ids: salesIdsAll,
                    type: "EXCEL"
                  }),
                text: "Exportar todos EXCEL",
                permissions: [PERMISSIONS.sales.view],
              },
            ].filter((action) => hasPermission(action.permissions)),
            buttons: (
              <Shared
                entity="SALES"
                in_ids={targetSelectors}
              />
            ),
            filters: { ...filters["SALES"] ?? {}, tour_id: tour.id },
          }}
          title={t("Words.sales")}
          excludes={["updated_at"]}
          tHeads={{
            data: tHeads,
            widths: [70, 250, 80, 100, 100, 80, 120, 80],
          }}
        />
      </div>
      <div className="relative z-10">
        <Notice
          headerTitle={t("Words.attention")}
          title={t("Screens.dashboard.sales.title_already_exclude")}
          text={t("Screens.dashboard.sales.text_already_exclude")}
          onSubmit={handleDelete}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingDelete}
        />
      </div>
    </>
  );
}
