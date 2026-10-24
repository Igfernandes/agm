import { useAgencies } from "./hooks/useAgencies";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { ModalAgencyOperationType } from "../type";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/Navigation/User";
import { ImportModal } from "./Modals/Import";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";

export function AgenciesTable() {
  const { t } = useI18n()
  const {
    handleDelete, isLoadingDelete, tHeads, selectors, updateForTable, getSelected, setSelectors
  } = useAgencies();
  const { handleToggleModal, modal } =
    useModalContext<ModalAgencyOperationType>();
  const { hasPermission } = useUserNavigationContext();
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
        <SmartTable
          ajax={{
            key: "agencies",
            url: API_ROUTES.agencies,
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
                permissions: [PERMISSIONS.agencies.delete],
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
                permissions: [PERMISSIONS.agencies.delete],
              },

            ].filter((action) => hasPermission(action.permissions)),
            buttons: (
              <Shared
                entity="AGENCIES"
                in_ids={inIds}
              />
            ),
            filters: filters["AGENCIES"] ?? {},
          }}
          title={t("Words.agencies")}
          excludes={["updated_at"]}
          tHeads={{
            data: tHeads,
            widths: [60, 250, 70, 150, 150, 48],
          }}
        />
      </div>

      <div className="relative z-10">
        <Notice
          headerTitle={t("Words.attention")}
          title={t("Screens.dashboard.agencies.title_already_exclude")}
          text={t("Screens.dashboard.agencies.text_already_exclude")}
          onSubmit={handleDelete}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingDelete}
        />
        <ImportModal
          isShowModal={modal.type === "IMPORT"}
          onModal={handleToggleModal}
        />
      </div>
    </>
  );
}
