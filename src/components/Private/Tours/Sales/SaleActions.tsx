import { DotsOptions } from "@components/shared/others/DotsOptions";
import { ModalSaleOperationType } from "./type";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/Navigation/User";
import usePostExports from "@services/Exports/Post/usePost";
import { useI18n } from "@contexts/I18n";

type Props = {
  handleToggleModal: (
    type: ModalSaleOperationType,
    id?: string | number
  ) => void;
  id: number;
};

export function AgencyActions({ handleToggleModal, id }: Props) {
  const { t } = useI18n()
  const router = useRouter();
  const { mutateAsync: postExport } = usePostExports()
  const { sales } = privateRoutes;
  const { hasPermission } = useUserNavigationContext();

  return (
    <div className="flex">
      <Shared entity="SALES" in_ids={[id]} />
      <DotsOptions
        actions={[
          {
            text: t("Words.edit") as string,
            handle: () => {
              router.push(`${sales}/${id}`);
            },
            permissions: [PERMISSIONS.sales.update],
          },
          {
            text: t("Words.exclude") as string,
            handle: () => handleToggleModal("DELETE", id),
            permissions: [PERMISSIONS.sales.delete],
          },
          {
            text: t("Words.voucher") as string,
            handle: () => {
              postExport({
                entity: "VOUCHERS",
                in_ids: [id],
                type: "PDF",
              })
            },
            permissions: [PERMISSIONS.sales.view],
          },
        ].filter((action) => hasPermission(action.permissions))}
      />
    </div>
  );
}
