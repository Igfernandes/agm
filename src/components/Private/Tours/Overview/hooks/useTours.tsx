import { useCallback, useMemo } from "react";
import {
  ModalTourOperationType,
} from "../../type";
import { useModalContext } from "@contexts/Modal";
import { TourActions } from "../ToursActions";
import dayjs from "dayjs";
import { Status } from "@components/utilities/Status";
import useDeleteTours from "@services/Tours/Delete/useDeleteTours";
import { TourShape } from "@type/Tours";
import { DeleteTourPayload } from "@services/Tours/Delete/type";
import { useI18n } from "@contexts/I18n";

export function useTours() {
  const { t } = useI18n()
  const { handleToggleModal, modal } =
    useModalContext<ModalTourOperationType>();

  const { mutateAsync: deleteTour, isPending: isLoadingDelete } =
    useDeleteTours();

  /** tHeads NÃO depende de estado → useRef é perfeito aqui */
  const tHeads = useMemo<Array<string>>(() => [
      "ID",
      t("Words.title"),
      t("Words.status"),
      t("Texts.available_at"),
      t("Words.created_at"),
      t("Words.actions"),
    ], [t]);

  /** 🔥 useCallback para estável */
  const updateForTable = useCallback(
    (data: unknown) => {
      const { id, title, status, available_at, slug, created_at } = data as TourShape;
      const clientId = String(id);

      return {
        id: clientId,
        title,
        status: <Status is={status} />,
        available_at: dayjs(available_at).format("DD/MM/YYYY HH:mm"),
        created_at: dayjs(created_at).format("DD/MM/YYYY HH:mm"),
        actions: <TourActions handleToggleModal={handleToggleModal} id={id} slug={slug} />,
      };
    },
    [handleToggleModal]
  );


  /** DELETE otimizado */
  const handleDelete = useCallback(() => {
    const payload = {} as DeleteTourPayload;
    const idString = String(modal.id);

    if (idString.includes(",")) {
      payload.in_tours = idString.split(",").map(Number);
    } else if (idString === "-1") {
      payload.all = true;
    } else {
      payload.tour_id = Number(modal.id);
    }

    deleteTour(payload).then(() => handleToggleModal(false));
  }, [deleteTour, modal.id, handleToggleModal])


  return {
    tHeads,
    handleDelete,
    isLoadingDelete,
    updateForTable,
  };
}
