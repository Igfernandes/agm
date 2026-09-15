import { useFormRules } from "@hooks/Forms/useFormRules";
import { UsersModalSchema, UsersPayload } from "../schemas";
import usePostInviteUser from "../../../../../../services/Invites/Post/Users/usePost";
import usePutUsers from "@services/Users/Put/usePutUsers";
import useGetUsers from "@services/Users/Get/useGetUsers";
import { useModalContext } from "@contexts/Modal";
import { useEffect, useMemo } from "react";
import { UserShape } from "@type/Users";
import { useI18n } from "@contexts/I18n";

type Props = {
  onModal: (isModal: boolean) => void;
};

export function useModalForm({ onModal }: Props) {
  const { t } = useI18n();
  const { modal } = useModalContext();
  const { rows } = useGetUsers({
    id: parseInt((modal.id ?? "0") as string),
  });
  const user = useMemo(() => {
    if (!modal.id) return {} as UserShape;

    return rows.length > 0 ? rows[0] : ({} as UserShape);
  }, [rows, modal]);

  const schema = useMemo(() => UsersModalSchema(t), []);
  const formProps = useFormRules<UsersPayload>({
    schema,
    defaultValues: {
      ...user,
      group: user?.groups?.map((group) => group.id.toString()) || [],
    },
  });
  const {
    formMethods: { reset, watch },
  } = formProps;
  const id = watch("id");
  const { mutateAsync: postInviteUser, isPending: isLoadingPost } =
    usePostInviteUser();
  const { mutateAsync: putUsers, isPending: isLoadingPut } = usePutUsers();

  const submit = ({ group, id, ...rest }: UsersPayload) => {
    const payload = {
      ...rest,
      groups: group.map((groupId) => parseInt(groupId)),
    };
    if (id) {
      putUsers({
        ...payload,
        id,
      }).then(() => onModal(false));
    } else
      postInviteUser(payload).then(() => {
        reset();
        onModal(false);
      });
  };

  useEffect(() => {
    if (!user || user.id === id) return;

    reset(user);
  }, [user, reset, id]);

  return {
    ...formProps,
    isLoading: isLoadingPost || isLoadingPut,
    submit,
    user,
  };
}
