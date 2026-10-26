import { loginFormSchema } from "../schemas";
import { PostAuthPayload } from "../../../../services/Authentications/Auth/type";
import usePostAuth from "../../../../services/Authentications/Auth/usePostAuth";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { CSRFShape } from "@services/Authentications/CSRF/types";
import { useI18n } from "@contexts/I18n";
import { Dispatch, SetStateAction, useMemo } from "react";
type Payload = PostAuthPayload;

type Props = {
  csrf: CSRFShape;
  recaptchaInstance: {
    execute: (callback: (token: string) => void) => void;
    reset: () => void | undefined;
  };
  setIsRecaptchaLoaded: Dispatch<SetStateAction<boolean>>;
};

export function useForm({
  csrf,
  recaptchaInstance,
  setIsRecaptchaLoaded,
}: Props) {
  const {
    mutateAsync: postAuth,
    isPending: isLoading,
    isSuccess,
  } = usePostAuth();
  const { t } = useI18n();
  const schema = useMemo(() => loginFormSchema(t), [t]);
  const { formMethods, isAllFilled } = useFormRules<Payload>({
    schema,
    exclude: ["rememberMe"],
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = formMethods;

  const onSubmit = async ({ login, password, rememberMe }: PostAuthPayload) => {
    recaptchaInstance.execute(async (token) => {
      await postAuth(
        {
          login,
          password,
          rememberMe,
          recaptcha: token,
          csrf,
        },
        {
          onError: () => setIsRecaptchaLoaded(false),
        },
      );
      await recaptchaInstance.reset();
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    formMethods,
    isAllFilled,
    isLoading: isLoading,
    isSuccess,
  };
}
