import { useMemo, useCallback, useState, useEffect, useRef } from "react";
import { HookTableDataProps } from "../type";
import { TDataOptions } from "../presets/SmartTable/Tbody/TData/type";
import { useColumnMetrics } from "./useColumnMetrics";
import { useTableMetrics } from "./useTableMetrics";
import useGetTable from "./useGet";
import { PaginationOptionShape } from "../utilities/Pagination/type";
import { isEquals } from "@helpers/json";

type Props<TableData> = HookTableDataProps<TableData> & {
  pagination: PaginationOptionShape | undefined;
};

export function useTableData<TableData extends Array<Record<string, unknown>>>({
  data,
  excludes,
  tHeads: tHeadProps,
  filters,
  pagination,
  ajax,
}: Props<TableData>) {
  const resetDataRef = useMemo(() => {
    const map = new Map<unknown, unknown>();
    return Array.from(map.values()) as TableData;
  }, []);
  const refRows = useRef<TableData>(resetDataRef);
  const paginationMax = useMemo(() => pagination?.max ?? 3, [pagination]);
  const filtersRef = useRef<Record<string, unknown>>(null);
  const [offset, setOffset] = useState<number>(0);
  const { rows, count, isPending } = useGetTable(
    {
      ...filters,
      limit: 100,
      start: offset,
    },
    ajax?.url,
    ajax?.key
  );
  const updateOffset = useCallback(
    (rowsReads: number) => {
      const newOffset = rowsReads / paginationMax;
      const offsetTotal = refRows.current.length / paginationMax;

      if (newOffset >= offsetTotal  && newOffset !== offset) {
        setOffset(rowsReads);
      }
    },
    [offset, paginationMax]
  );

  const appendRows = useCallback(
    (prev: TableData, newRows: TableData) => {
      const map = new Map<unknown, unknown>();

      prev.forEach((item, key) => map.set(item?.id ?? rows[key]?.id, item));
      newRows.forEach((item: TableData[number], key) =>
        map.set(item?.id ?? rows[key]?.id, item)
      ); // sobrescreve

      return Array.from(map.values()) as TableData;
    },
    [rows]
  );

  const tRows = useMemo(() => {
    let rowData = data as TableData;
    if (ajax?.url) {
      rowData = rows.map((row) => ajax.builder(row)) as TableData;
    }

    const refRowsCurrent = isEquals(filtersRef.current, filters)
      ? refRows.current
      : resetDataRef;
    const rowNew = appendRows(refRowsCurrent, rowData) as TableData;
    refRows.current = rowNew;
    return rowNew;
  }, [ajax, data, rows, appendRows, filters, resetDataRef]);
  
  const { data: tHeadsData = [], widths = [] } = tHeadProps ?? {};

  const { getCurrentWidthColumn, adjustCellContent } = useColumnMetrics({
    widths,
  });

  const { getColumnContent, getTableElement } = useTableMetrics();

  /**
   * Cabeçalhos da tabela, derivados e memoizados
   */
  const tHeads = useMemo(() => {
    if (tHeadsData.length > 0) return tHeadsData;

    if (data && data.length > 0) {
      return Object.keys(data[0]).filter((k) => !excludes.includes(k));
    }

    return [];
  }, [tHeadsData, data, excludes]);

  /**
   * Gerenciador de conteúdo das células
   * Memoizado para não recriar em toda renderização
   */
  const handleManagerColumn = useCallback(
    (el: HTMLTableCellElement, { value, index }: TDataOptions) => {
      if (!el || widths.length === 0 || !value) return;

      const table = getTableElement(el);
      if (!table) return;

      const columnContent = getColumnContent(value);
      if (!columnContent) return;

      const width = getCurrentWidthColumn(table, index);
      el.setAttribute("width", width.toString());

      adjustCellContent(el, columnContent, width);
    },
    [
      widths,
      getTableElement,
      getColumnContent,
      getCurrentWidthColumn,
      adjustCellContent,
    ]
  );

  useEffect(() => {
    if (!filters) return;
    if (filtersRef.current === filters) return;

    filtersRef.current = filters;
    refRows.current = resetDataRef;
    setOffset(0);
  }, [filters, resetDataRef]);

  return {
    tHeads,
    tRows,
    setOffset: updateOffset,
    count: data?.length ??  count ,
    offset,
    isLoading: isPending,
    handleManagerColumn,
    filtersRef,
  };
}
