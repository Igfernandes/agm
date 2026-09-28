import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";
import { FormBoardHeader } from "./FormBoard/header";
import { TSpan } from "@components/shared/forms/InfoBoard/fields/Span";
import dayjs from "dayjs";
import { InfoBoard } from "@components/shared/forms/InfoBoard/viewer";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useForms } from "./hooks/useForms";
import { FormProvider } from "react-hook-form";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { Button } from "@components/shared/forms/Button";
import { useI18n } from "@contexts/I18n";
import { API_ROUTES } from "@configs/routes/Api/api";
import { ClientsMessagesDispatcherShape } from "@type/MessagesDispatcherShape/ClientsMessagesDispatcher";

type Props = {
  dispatcher: MessagesDispatcherShape;
};

dayjs.extend(customParseFormat);
export function DispatcherPreview({ dispatcher }: Props) {
  const { t } = useI18n()
  const {
    formMethods,
    isLoading,
    handleSubmit,
    submit,
  } = useForms({
    dispatcher,
  });

  return (
    <>
      <div className="Logs mb-4">
        <SmartTable
          ajax={{
            key: "clients_dispatcher",
            url: `${API_ROUTES.clientsDispatchers}`,
            builder: (client: unknown) => {
              const clientMessageEntity = client as ClientsMessagesDispatcherShape

              return {
                name: clientMessageEntity.client_name,
                message: clientMessageEntity.message_title,
                status: t(`Words.${clientMessageEntity.status.toLocaleLowerCase()}`),
                platform: clientMessageEntity.platform,
                send_at: clientMessageEntity?.send_at
                  ? dayjs(clientMessageEntity?.send_at).format("DD/MM/YYYY HH:MM")
                  : "--",
              }
            }
          }}
          options={{
            pagination: {
              max: 10
            },
            filters: {
              message_id: dispatcher.id
            }
          }}
          tHeads={{
            data: [
              t("Words.name"),
              t("Words.message"),
              t("Words.status"),
              t("Words.platform"),
              t("Texts.send_at"),
            ],
          }}
          title={t("Texts.dispatchers_historic")}
        />
      </div>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="bg-white py-7 px-4 rounded-lg">
            <div className="mb-6">
              <FormBoardHeader dispatcher={dispatcher} />
            </div>
            <InfoBoard>
              <TSpan
                text={t("Words.title")}
                value={dispatcher.title}
                dataTestId="title"
              />
              <TSpan
                text={t("Words.platforms")}
                value={dispatcher.platforms}
              />
              <TSpan
                text={t("Words.period")}
                value={
                  dispatcher.period
                    ? t(`Words.${dispatcher.period?.toLocaleLowerCase()}`)
                    : "--"
                }
              />
              <TSpan
                text={t("Words.started_at")}
                value={dayjs(dispatcher.started_at).format("DD/MM/YYYY HH:mm")}
              />
              <TSpan
                text={t("Texts.scheduled_at")}
                value={dispatcher.scheduled_at ?? "--"}
              />
              <TSpan text={t("Words.author")} value={dispatcher.author} />
            </InfoBoard>
          </div>
          <div className="bg-white p-4  mt-4">
            <div className="max-w-[200px] ml-auto">
              <Button
                type="submit"
                text={t("Words.update")}
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
