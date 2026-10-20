import { useModalContext } from "@contexts/Modal";
import { ModalClientsOperationType } from "../type";
import { Button } from "@components/shared/layouts/Button";
import { AccessControl } from "@components/shared/settings/AccessControl";
import { PERMISSIONS } from "@constants/permissions";
import { ClientFilters } from "./ClientFilters";
import { useI18n } from "@contexts/I18n";


export function OptionsBar() {
  const { t } = useI18n()
  const { handleToggleModal } = useModalContext<ModalClientsOperationType>();

  return (
    <>
      <div className="relative z-[30]  flex justify-between flex-wrap md:flex-nowrap mb-6">
        <div className="w-full md:w-[45%] xl:w-[25%]">
          <ClientFilters />
        </div>
        <div className="mt-5 md:mt-0 w-full flex-wrap lg:flex-none md:w-[75%] flex justify-around md:justify-end">
          <div className="w-full md:w-auto mx-0 md:mx-2 mb-3 lg:my-0">
            <AccessControl targetPermissions={[PERMISSIONS.clients.create]}>
              <Button
                className="border border-zinc-300 px-3 font-bold rounded-xl bg-white text-primary"
                text={t("Words.register")}
                type="button"
                onClick={() => handleToggleModal("CLIENT")}
              />
            </AccessControl>
          </div>
          <div className="w-full md:w-auto mx-0 lg:mx-2">
            <AccessControl targetPermissions={[PERMISSIONS.categories.create]}>
              <Button
                className="border bg-white border-zinc-300 px-3 font-bold rounded-xl text-primary"
                text={t("Texts.category_manager")}
                type="button"
                onClick={() => handleToggleModal("CATEGORY")}
              />
            </AccessControl>
          </div>
          <div className="w-full md:w-auto mx-0 lg:mx-2 mt-3 lg:mt-0">
            <AccessControl targetPermissions={[PERMISSIONS.clients.create]}>
              <Button
                className="bg-white border border-zinc-300 px-3 font-bold rounded-xl text-primary"
                text={t("Texts.import_clients")}
                type="button"
                onClick={() => handleToggleModal("IMPORT")}
              ></Button>
            </AccessControl>
          </div>
        </div>
      </div>
    </>
  );
}
