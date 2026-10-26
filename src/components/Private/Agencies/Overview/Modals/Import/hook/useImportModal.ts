import { useFormRules } from "@hooks/Forms/useFormRules";
import { ImportPayload, ImportSchema } from "../schemas";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ImportModalsProps } from "../type";
import { useI18n } from "@contexts/I18n";
import usePostImportAgency from "@services/Agencies/Import/usePost";

export function useImportModal({ onModal }: ImportModalsProps) {
  const { t } = useI18n();
  const schema = useMemo(() => ImportSchema(t), [t]);
  const { register, formMethods, handleSubmit } = useFormRules<ImportPayload>({
    schema,
  });
  const { watch } = formMethods;
  const { mutateAsync: postImport, isPending: isLoading } =
    usePostImportAgency();

  const [fileName, setFileName] = useState<string>(""); // estado para armazenar o nome
  const fileList = watch("excel"); // retorna o File | undefined

  // Atualiza o nome sempre que o arquivo mudar
  useEffect(() => {
    if (fileList && fileList.length > 0) {
      setFileName(fileList[0].name); // pega o primeiro arquivo
    } else {
      setFileName(t("Texts.text_upload"));
    }
  }, [fileList, t]);

  const onSubmit = async (payload: ImportPayload) => {
    await postImport(payload);
    setFileName(t("Texts.text_upload"));
    onModal(false);
  };

  const handleCleanFile = useCallback(() => {
    formMethods.resetField("excel");
  }, [formMethods]);

  return {
    register,
    handleSubmit,
    onSubmit,
    fileName,
    isLoading,
    handleCleanFile,
    excel: fileList,
  };
}
