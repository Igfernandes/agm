import { useTours } from "./hooks/useTours";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { ModalTourOperationType } from "../type";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/Navigation/User";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";

export function ToursTable() {
  const { t } = useI18n()
  const {
    handleDelete, isLoadingDelete, tHeads, selectors, setSelectors, updateForTable, getSelected
  } = useTours();
  const { handleToggleModal, modal } =
    useModalContext<ModalTourOperationType>();
  const { hasPermission } = useUserNavigationContext();
  const { filters } = useFiltersContext();

  return (
    <>
      <div>
        <SmartTable
          ajax={{
            key: "tours",
            url: API_ROUTES.tours,
            builder: updateForTable
          }}
          options={{
            selector: {
              setSelectorRef: setSelectors,
            },
            pagination: {
              max: 6,
            },
            actionsBar: [
              {
                handle: () =>
                  handleToggleModal(
                    "DELETE",
                    getSelected(selectors)
                  ),
                text: t("Texts.selected_delete"),
                permissions: [PERMISSIONS.tours.delete],
              },
            ].filter((action) => hasPermission(action.permissions)),
            actions: [
              {
                handle: () =>
                  handleToggleModal(
                    "DELETE",
                    "-1"
                  ),
                text: t("Texts.all_delete"),
                permissions: [PERMISSIONS.tours.delete],
              },

            ].filter((action) => hasPermission(action.permissions)),
            filters: filters["TOURS"] ?? {},
          }}
          title={t("Words.tours")}
          tHeads={{
            data: tHeads,
            widths: [60, 250, 90, 150, 150, 48],
          }}
        />
      </div>

      <div className="relative z-10">
        <Notice
          headerTitle={t("Words.attention")}
          title={t("Screens.dashboard.tours.title_already_exclude")}
          text={t("Screens.dashboard.tours.text_already_exclude")}
          onSubmit={handleDelete}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingDelete}
        />
      </div>
    </>
  );
}
