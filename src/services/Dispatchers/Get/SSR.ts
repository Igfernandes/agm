import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import {
  GetMessagesDispatcherRequest,
  GetMessagesDispatcherResponse,
} from "./types";

export async function getMessagesDispatcherRequest(
  tokenNavigation: string,
  request?: GetMessagesDispatcherRequest
): Promise<GetMessagesDispatcherResponse> {
  const { id, ...query } = request ?? {};

  const { messagesDispatcherId } = API_ROUTES;
  const { data } = await axios.get<GetMessagesDispatcherResponse>(
    setQueries({
      url: setParams({
        url: messagesDispatcherId,
        data: {
          id: id ?? "",
        },
      }),
      query,
    }),
    {
      headers: {
        Authorization: `Bearer ${tokenNavigation}`,
      },
    }
  );

  return {
    rows: data.rows ?? [],
    count: data.count ?? 0,
  };
}
