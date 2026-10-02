import { DotsOptions } from "@components/shared/others/DotsOptions";
import { ModalTourOperationType } from "../type";
import { useRouter } from "next/navigation";
import { privateRoutes, publicRoutes } from "@configs/routes/Web/navigation";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/Navigation/User";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import { useI18n } from "@contexts/I18n";

type Props = {
  handleToggleModal: (
    type: ModalTourOperationType,
    id?: string | number
  ) => void;
  id: number;
  slug: string;
};

export function TourActions({ handleToggleModal, id, slug }: Props) {
  const { t } = useI18n()
  const router = useRouter();
  const { tours } = privateRoutes;
  const { hasPermission } = useUserNavigationContext();
  const { handleCopy } = useNavigator();
  const { baseUrl } = useWindow();

  return (
    <div className="flex">
      <DotsOptions
        actions={[
          {
            text: t("Words.edit") as string,
            handle: () => {
              router.push(`${tours}/${id}`);
            },
            permissions: [PERMISSIONS.tours.update],
          },
          {
            text: t("Words.exclude") as string,
            handle: () => handleToggleModal("DELETE", id),
            permissions: [PERMISSIONS.tours.delete],
          },
          {
            text: t("Texts.link_copy") as string,
            handle: () => handleCopy(`${baseUrl + publicRoutes.tours}/${slug}`),
          }
        ].filter((action) => hasPermission(action.permissions))}
      />
    </div>
  );
}
