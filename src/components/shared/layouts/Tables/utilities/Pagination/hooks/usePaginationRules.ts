import { useCallback, useMemo, useRef, useState } from "react";
import { PaginationOptionShape, PaginationShape } from "../type";
import { getOnlyNumberRange } from "@helpers/numbers";

type Props = {
  paginationInstance?: PaginationOptionShape;
  tRows: Array<unknown[]>;
  setOffset?: (newOffset: number) => void;
  offset?: number;
};

export function usePaginationRules({
  paginationInstance,
  tRows,
  setOffset,
  offset,
}: Props) {
  const INITIAL_PAGE = useRef(1);
  const MAX_PAGINATION = useRef(paginationInstance?.max ?? 10);

  const pageAmount = useMemo(() => {
    return Math.ceil(tRows.length / MAX_PAGINATION.current);
  }, [tRows]);

  const [pagination, setPagination] = useState<PaginationShape>({
    max: MAX_PAGINATION.current,
    current: INITIAL_PAGE.current,
  });

  const handleChangePagination = useCallback(
    (pageNumber: number) => {
      const pageAmountRef = pageAmount - pageNumber;

      if (pageAmountRef < 0) return;

      if (pageNumber >= pageAmountRef && setOffset) {
        const offsetNew = (pageNumber - 1) * MAX_PAGINATION.current;
        setOffset(offsetNew > 0 ? offsetNew : (paginationInstance?.max ?? 3));
      }
      setPagination((prev) => ({
        ...prev,
        current:
          offset === 0 ? 1 : getOnlyNumberRange(pageNumber, 1, pageAmount),
      }));
    },
    [pageAmount, setOffset, offset, paginationInstance],
  );

  return {
    pagination: {
      ...pagination,
      amount: pageAmount,
    },
    handleChangePagination,
  };
}
