import { loginFormSchema } from "../schemas";
import { PostAuthPayload } from "../../../../services/Authentications/Auth/type";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { CSRFShape } from "@services/Authentications/CSRF/types";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";
import usePostAccess from "@services/Authentications/Access/Post/usePostAccess";
type Payload = PostAuthPayload;

type Props = {
  csrf: CSRFShape;
  recaptchaInstance: {
    execute: (callback: (token: string) => void) => void;
    reset: () => void | undefined;
  };
};

export function useForm({ csrf, recaptchaInstance }: Props) {
  const {
    mutateAsync: postAuth,
    isPending: isLoading,
    isSuccess,
  } = usePostAccess();
  const { t } = useI18n();
  const schema = useMemo(() => loginFormSchema(t), [t]);
  const { formMethods, isAllFilled } = useFormRules<Payload>({
    schema,
    exclude: ["rememberMe"],
  });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = formMethods;

  const onSubmit = async ({ login, password }: PostAuthPayload) => {
    recaptchaInstance.execute(async (token) => {
      await postAuth({
        login,
        password,
        recaptcha: token,
        csrf,
      });
      
      await recaptchaInstance.reset();
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    formMethods,
    isAllFilled,
    isLoading: isSubmitting || isLoading,
    isSuccess,
  };
}
