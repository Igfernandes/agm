import { useSales } from "./hooks/useSales";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { ModalSaleOperationType } from "../type";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { Shared } from "@components/shared/others/Shared";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { SaleHeader } from "./SaleHeader";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";

export function SalesTable() {
  const { t } = useI18n()
  const {
    handleDelete, setSelectors, isLoadingDelete, tHeads, selectors, updateForTable
  } = useSales();
  const { handleToggleModal, modal } =
    useModalContext<ModalSaleOperationType>();
  const { filters } = useFiltersContext();
  const inIds = useMemo(() => {
    const idList = selectors
      .filter((selector) => !!selector.isChecked)
      .map((selector) => +selector.value)
    return idList.length > 0 ? idList : [-1]
  }, [selectors])

  return (
    <>
      <div>
        <SaleHeader />
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
            buttons: (
              <Shared
                entity="SALES"
                in_ids={inIds}
              />
            ),
            filters: filters["SALES"] ?? {},
          }}
          title={t("Words.sales")}
          excludes={["updated_at"]}
          tHeads={{
            data: tHeads,
            widths: [230, 150, 100, 80, 70, 50, 150, 48],
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
