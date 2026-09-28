import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useMemo, useState } from "react";
import { DispatcherUpdatePayload, DispatcherUpdateSchema } from "../schemas";
import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";
import usePutMessagesDispatcher from "@services/Dispatchers/Put/usePut";

dayjs.extend(customParseFormat);

type Props = {
  dispatcher: MessagesDispatcherShape;
};

export function useForms({ dispatcher }: Props) {
  const { formMethods, handleSubmit, errors } =
    useFormRules<DispatcherUpdatePayload>({
      schema: DispatcherUpdateSchema,
      defaultValues: dispatcher,
    });


  const clientsDispatchers = useMemo(() =>  [], []);

  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { mutateAsync: putDispatcher, isPending: isLoading } =
    usePutMessagesDispatcher();

  const submit = (payload: DispatcherUpdatePayload) => {
    putDispatcher({
      ...payload,
      id: dispatcher.id
    });
  };

  const handleToggleModel = (isShowModal: boolean) => {
    setIsShowModal(isShowModal);
  };

  return {
    formMethods,
    handleSubmit,
    errors,
    submit,
    isShowModal,
    handleToggleModel,
    isLoading,
    clientsDispatchers,
  };
}
