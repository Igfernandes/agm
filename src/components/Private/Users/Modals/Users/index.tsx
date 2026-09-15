import { Input } from "@components/shared/forms/Input";
import { useModalForm } from "./hooks/useModalForm";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Select } from "@components/shared/forms/Select";
import { useI18n } from "@contexts/I18n";
import { Phone } from "@components/shared/forms/Phone";

export function ModalFormUsers({
  isShowModal,
  onModal,
  title,
  groups,
}: ModalFormProps) {
  const { t } = useI18n()
  const { formMethods, register, errors, submit, handleSubmit, isLoading, user } =
    useModalForm({
      onModal,
    });

  return (
    <Modal title={title} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className="w-full md:w-[424px]">
          <div className="form-title mb-2 lg:mb-4">
            <h4 className="text-sm md:text-lg">
              <strong>
                {t("Screens.dashboard.users.user.text_select_group")}
              </strong>
            </h4>
          </div>
          <div className="form-group">
            <Select
              {...register("group")}
              options={(groups ?? []).map((group) => {
                return {
                  text: group.name,
                  value: group.id,
                  selected: !!((user?.groups ?? []).find((groupItem) => groupItem.id === group.id))
                };
              })}
              label={t("Screens.dashboard.users.user_group")}
              dataTestId="group"
              required={true}
              multiple={true}
            />
          </div>
          <div className="my-4 lg:my-6">
            <div className="form-title mt-4 xl:mt-6 pb-2">
              <h4 className="text-sm md:text-lg">
                <strong>
                  {t("Screens.dashboard.users.user.text_fill_information")}
                </strong>
              </h4>
            </div>
            <div className="overflow-y-auto h-[20vh] pr-2">
              <div className="form-group my-3 ">
                <Input
                  {...register("name")}
                  label={t("Words.name")}
                  dataTestId="name"
                  required={true}
                  maxLength={100}
                  errors={errors.name}
                />
              </div>
              <div className="form-group my-3">
                <Input
                  {...register("email")}
                  label={t("Words.email")}
                  dataTestId="email"
                  required={true}
                  maxLength={250}
                  errors={errors.email}
                />
              </div>
              <div className="form-group my-3">
                <Phone
                  {...register("phone")}
                  label={t("Words.phone")}
                  dataTestId="phone"
                  required={true}
                  errors={errors.phone}
                />
              </div>
            </div>
          </div>
          <div className="form-btn flex justify-end pt-2 lg:pt-4 border-t-2 border-secondary">
            <div>
              <Button
                className="border-secondary border-2 px-4 w-1/2"
                text={t("Words.cancel")}
                onClick={() => onModal(false)}
              />
            </div>
            <div className="w-1/2 md:w-[35%] ml-5">
              <Button
                type="submit"
                className="bg-primary text-white "
                text={t("Words.save")}
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
