import { getDatetime } from "@helpers/date";
import dayjs from "dayjs";
import { useCallback, useState } from "react";

export function useDatetime() {
  const [datetime, setDatetime] = useState<string>("");

  const handleUpdateDatetimePreview = useCallback((value: string) => {
    const normalized = value.replace("T", " ");
    
    const date = dayjs(normalized, "YYYY-MM-DD HH:mm", true);

    if (!date.isValid()) {
      return setDatetime(getDatetime(normalized));
    }
    setDatetime(date.format("DD/MM/YYYY HH:mm"));
  }, []);

  return {
    handleUpdateDatetimePreview,
    setDatetime,
    datetime,
  };
}
