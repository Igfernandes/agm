import { useRoutes } from "@hooks/useRoutes";
import { useAxios, useQueryGuard } from "@hooks/useAxios";
import { GetRequestShape } from "@type/service";
import { useMemo } from "react";

export default function useGetTable(
  request: GetRequestShape = {},
  url: string = "",
  key: string = ""
) {
  const { axios } = useAxios();
  const { setQueries } = useRoutes();

  async function handle() {
    if (url === "") return null;
    const { data } = await axios.get<Record<string, unknown>>(
      setQueries({
        url,
        query: request,
      })
    );
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: [key, request],
    queryFn: handle,
    enabled: true,
  });


  return useMemo(
    () => ({
      rows: (data?.rows ?? []) as Array<Record<string, unknown>>,
      count: (data?.count ?? 0) as number,
      ...rest,
    }),
    [data, rest]
  );
}
