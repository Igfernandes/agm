import { useClients } from "./hooks/useClients";
import { Notice } from "@components/shared/others/Notice";
import { ModalFormCategories } from "./Modals/Categories";
import { useModalContext } from "@contexts/Modal";
import { ModalClientsOperationType } from "../type";
import { ClientCreateModal } from "./Modals/Clients";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { ClientCategoriesModal } from "./Modals/ClientCategories";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/Navigation/User";
import { ImportModal } from "./Modals/Import";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";

export function Clients() {
  const { t } = useI18n()
  const {
    tHeadsClient,
    selectors,
    setSelectors,
    categories,
    getSelectedClients,
    handleDeleteClient,
    isLoadingClientDelete,
    updateClientForTable,
  } = useClients();
  const { handleToggleModal, modal } =
    useModalContext<ModalClientsOperationType>();
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
            key: "clients",
            url: API_ROUTES.clients,
            builder: updateClientForTable
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
                handle: () => handleToggleModal("CHANGE_CATEGORY"),
                text: t("Texts.selected_alter_category"),
                permissions: [PERMISSIONS.clients.update],
              },
              {
                handle: () =>
                  handleToggleModal(
                    "DELETE",
                    getSelectedClients(selectors)
                  ),
                text: t("Texts.selected_delete"),
                permissions: [PERMISSIONS.clients.delete],
              },
            ].filter((action) => hasPermission(action.permissions)),
            actions: [
              {
                handle: () => handleToggleModal("CHANGE_CATEGORY", "-1"),
                text: t("Texts.all_alter_category"),
                permissions: [PERMISSIONS.clients.update],
              },
              {
                handle: () =>
                  handleToggleModal(
                    "DELETE",
                    "-1"
                  ),
                text: t("Texts.all_delete"),
                permissions: [PERMISSIONS.clients.delete],
              },

            ].filter((action) => hasPermission(action.permissions)),
            buttons: (
              <Shared
                entity="CLIENTS"
                in_ids={inIds}
              />
            ),
            filters: filters["CLIENTS"] ?? {},
          }}
          title={t("Words.clients")}
          excludes={["created_at", "updated_at"]}
          tHeads={{
            data: tHeadsClient.current,
            widths: [70, 250, 70, 200, 100, 48],
          }}
        />
      </div>

      <div className="relative z-50">
        <ModalFormCategories
          title={t("Words.category")}
          isShowModal={modal.type === "CATEGORY"}
          onModal={handleToggleModal}
          categories={categories}
        />
        <Notice
          headerTitle={t("Words.attention")}
          title={t("Screens.dashboard.clients.title_already_exclude")}
          text={t("Screens.dashboard.clients.text_already_exclude")}
          onSubmit={handleDeleteClient}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingClientDelete}
        />
        <ClientCategoriesModal
          isShowModal={modal.type === "CHANGE_CATEGORY"}
          onModal={handleToggleModal}
          categories={categories}
          selectors={selectors}
        />
        <ClientCreateModal
          isShowModal={modal.type === "CLIENT"}
          onModal={handleToggleModal}
          title={t("Texts.new_client")}
          categories={categories ?? []}
        />
        <ImportModal
          isShowModal={modal.type === "IMPORT"}
          onModal={handleToggleModal}
        />
      </div>
    </>
  );
}
