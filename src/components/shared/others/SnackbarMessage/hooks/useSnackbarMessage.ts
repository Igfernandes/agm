import { useCallback, useEffect, useState } from "react";
import { SnackbarProps } from "@contexts/Snackbar/types";

type SnackbarHookProps = {
  deleteSnackbar?: () => void;
  snackbar: SnackbarProps;
};
export default function useSnackbarMessage({
  deleteSnackbar,
  snackbar,
}: SnackbarHookProps) {
  const TIME_TO_LIVE_NOTIFICATION_IN_SECONDS = 6;
  const TIME_TO_LIVE_NOTIFICATION_IN_MS =
    TIME_TO_LIVE_NOTIFICATION_IN_SECONDS * 1000;
  const [typeSnackbar, setTypeSnackbar] = useState<
    "error" | "success" | "notice" | undefined
  >(snackbar.type);
  const [show, setShow] = useState(true);

  const handleDeleteSnackbar = useCallback(() => {
    setShow(false);
    if (deleteSnackbar) deleteSnackbar();
  }, [deleteSnackbar]);

  useEffect(() => {
    if (!snackbar.message) return;
    setShow(true);

    const interval = setInterval(() => {
      const threshold = Date.now() - TIME_TO_LIVE_NOTIFICATION_IN_MS;
      const snackbarUpdate = (snackbar: SnackbarProps) => {
        const isOldSnackbar = snackbar.timestamp.getTime() < threshold;
        if (isOldSnackbar) handleDeleteSnackbar();
      };

      snackbarUpdate(snackbar);
    }, 2000);

    setTypeSnackbar(snackbar.type);
    return () => clearInterval(interval);
  }, [TIME_TO_LIVE_NOTIFICATION_IN_MS, handleDeleteSnackbar, snackbar]);

  return { show, handleDeleteSnackbar, typeSnackbar };
}
