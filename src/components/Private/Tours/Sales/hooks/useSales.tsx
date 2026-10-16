import { useCallback, useMemo, useState } from "react";
import {
  ModalSaleOperationType,
} from "../type";
import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { useModalContext } from "@contexts/Modal";
import { AgencyActions } from "../SaleActions";
import dayjs from "dayjs";
import { Status } from "@components/utilities/Status";
import { SaleShape } from "@type/Sales";
import { formatMoney } from "@helpers/currencies";
import useDeleteSales from "@services/Sales/Delete/useDeleteSales";
import { useI18n } from "@contexts/I18n";

export function useSales() {
  const { t } = useI18n()
  const { handleToggleModal, modal } =
    useModalContext<ModalSaleOperationType>();
  /** Esse sim precisa ser state */
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);

  const { mutateAsync: deleteSale, isPending: isLoadingDelete } =
    useDeleteSales();

  /** tHeads NÃO depende de estado → useRef é perfeito aqui */
  const tHeads = useMemo<Array<string>>(() => [
    "ID",
    t("Words.name"),
    t("Words.status"),
    t("Words.total"),
    t("Words.price"),
    "Uni.",
    t("Words.sold_at"),
    t("Words.actions"),
  ], [t]);

  /** 🔥 useCallback para estável */
  const updateForTable = useCallback(
    (data: unknown) => {
      const { id, client, status, price, amount, discount, currency, created_at } = data as SaleShape;
      const debit = (price * amount) - discount;

      return {
        id: String(id),
        name: client?.name ?? t("Texts.client_removed"),
        status: <Status is={status} />,
        debit: debit ? formatMoney(debit, currency) : t("Words.free"),
        price: price ? formatMoney(price, currency) : t("Words.free"),
        amount,
        created_at: created_at ? dayjs(created_at).format("DD/MM/YYYY HH:mm") : '--',
        actions: <AgencyActions handleToggleModal={handleToggleModal} id={id} />,
      };
    },
    [handleToggleModal, t]
  );

  /** DELETE otimizado */
  const handleDelete = useCallback(() => {
    deleteSale({
      sale_id: Number(modal.id),
    }).then(() => handleToggleModal(false));
  }, [deleteSale, modal.id, handleToggleModal])


  return {
    tHeads,
    selectors, setSelectors,
    handleDelete,
    isLoadingDelete,
    updateForTable
  };
}
