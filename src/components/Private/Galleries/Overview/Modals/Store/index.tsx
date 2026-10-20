import { Input } from "@components/shared/forms/Input";
import { useGalleryCreateModal } from "./hooks/useGalleryCreateModal";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FieldError, FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { useModalContext } from "@contexts/Modal";
import { Select } from "@components/shared/forms/Select";
import { useI18n } from "@contexts/I18n";

export function GalleryCreateModal() {
  const { handleToggleModal, modal } = useModalContext()
  const { formMethods, handleSubmit, submit, isLoading } = useGalleryCreateModal();
  const {
    register,
    formState: { errors },
  } = formMethods;
  const { t } = useI18n()

  return (
    <Modal title={t("Screens.dashboard.galleries.title_create")} isShowModal={modal.type === "CREATE"} handleModal={() => handleToggleModal(false)}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className="md:w-[300px]">
          <div className="my-2 md:my-6">
            <div
            >
              <div className="form-group my-4">
                <Input
                  {...register("title")}
                  label={t("Words.title")}
                  dataTestId="title"
                  required={true}
                  min={3}
                  errors={errors.title}
                />
              </div>
              <div className="form-group">
                <Select
                  {...register("status")}
                  label={t("Words.status")}
                  id="status"
                  dataTestId="status"
                  options={[
                    {
                      text: t("Words.active"),
                      value: "PUBLISHED",
                    },
                    {
                      text: t("Words.inactive"),
                      value: "DRAFT",
                    },
                  ]}
                  errors={errors.status as FieldError}
                />
              </div>
            </div>
          </div>
          <div className="form-btn flex flex-wrap md:flex-nowrap justify-between pt-4 border-t-2 border-secondary">
            <div className="mt-4 md:my-auto w-full">
              <div className=" ml-auto">
                <Button
                  type="submit"
                  className="bg-primary font-semibold text-white"
                  text={t("Words.save")}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
