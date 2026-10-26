import { Input } from "@components/shared/forms/Input";
import { useModalForm } from "./hooks/useClientCreateModal";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Checkbox } from "@components/shared/layouts/Checkbox";
import { handleMaskCPF, handleMaskPhone } from "@helpers/string";
import { SelectSearch } from "@components/shared/forms/SelectSearch";
import { useI18n } from "@contexts/I18n";
import { Date } from "@components/shared/forms/Date";

export function ClientCreateModal({
  isShowModal,
  onModal,
  title,
  categories,
}: ModalFormProps) {
  const { t } = useI18n()
  const { formMethods, handleSubmit, submit, isLoading } = useModalForm();
  const {
    setValue,
    register,
    formState: { errors },
  } = formMethods;

  return (
    <Modal title={title} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className="md:w-[424px]">
          <div className="form-title mb-4">
            <h4 className="text-sm md:text-lg">
              <strong>
                {t("Screens.dashboard.clients.text_select_category")}
              </strong>
            </h4>
          </div>
          <div className="form-category">
            <SelectSearch
              {...register("category")}
              options={categories.map((category) => {
                return {
                  text: category.name,
                  value: category.id,
                };
              })}
              label={t("Words.category")}
              dataTestId="category"
              required={true}
              errors={errors.category}
            />
          </div>
          <div className="my-2 md:my-6">
            <div className="form-title mt-4 md:mt-6 mb-2 md:mb-4">
              <h4 className="text-sm md:text-lg">
                <strong>
                  {t(
                    "Screens.dashboard.clients.text_fill_information"
                  )}
                </strong>
              </h4>
            </div>
            <div
              className="overflow-y-auto scrollbar"
              style={{
                height: "21vh",
              }}
            >
              <div className="form-group my-4">
                <Input
                  {...register("name")}
                  label={t("Words.name")}
                  dataTestId="name"
                  required={true}
                  maxLength={150}
                  errors={errors.name}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("cpf")}
                  label={t("Words.cpf")}
                  dataTestId="cpf"
                  onChange={(ev) => {
                    handleMaskCPF(ev);
                    setValue("cpf", ev.currentTarget.value);
                  }}
                  required={true}
                  errors={errors.cpf}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("phone")}
                  label={t("Words.phone")}
                  dataTestId="phone"
                  required={true}
                  onChange={(ev) => {
                    handleMaskPhone(ev);
                    setValue("phone", ev.currentTarget.value);
                  }}
                  errors={errors.phone}
                />
              </div>
              <div className="form-group my-4">
                <Date
                  {...register("birthdate")}
                  label={t("Words.birthdate")}
                  dataTestId="birthdate"
                  placeholder={t(`Configs.format.date`)}
                  errors={errors.birthdate}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("email")}
                  label={t("Words.email")}
                  dataTestId="email"
                  maxLength={250}
                  errors={errors.email}
                />
              </div>
            </div>
          </div>
          <div className="form-btn flex flex-wrap md:flex-nowrap justify-between pt-4 border-t-2 border-secondary">
            <div className="w-full md:w-auto flex items-center">
              <Checkbox
                {...register("hasContinueRegister")}
                dataTestId="continue_register"
                id={"continue_register"}
                label={t(`Texts.continue_register`)}
              />
            </div>
            <div className="mt-4 md:my-auto w-full md:w-1/2">
              <div className="md:w-[60%] ml-auto">
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
