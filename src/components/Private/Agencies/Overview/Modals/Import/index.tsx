import { Modal } from "@components/shared/layouts/Modal";
import { Button } from "@components/shared/layouts/Button";
import { CloudUpload } from "@assets/Icons/black/CloudUpload";
import { ImportModalsProps } from "./type";
import { useImportModal } from "./hook/useImportModal";
import { useI18n } from "@contexts/I18n";
import { When } from "@components/utilities/When";
import { Close } from "@assets/Icons/black/CloseClean";

export function ImportModal({ onModal, isShowModal }: ImportModalsProps) {
  const { t } = useI18n()
  const { register, handleSubmit, onSubmit, fileName, isLoading, excel, handleCleanFile } =
    useImportModal({
      onModal,
      isShowModal,
    });

  return (
    <Modal title={t("Screens.dashboard.agencies.agencies_importer")} isShowModal={isShowModal} handleModal={onModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-[400px]">
          <div>
            <When value={!!excel}>
              <div>
                <Close onClick={handleCleanFile} className="w-5 z-50 absolute right-6 top-1 cursor-pointer" />
              </div>
            </When>
            <label
              htmlFor={"#import"}
              className="max-h-[104px] md:w-[376px] relative mx-auto block border rounded-lg border-dashed border-secondary px-0 pb-5 pt-4 text-center cursor-pointer"
            >
              <input
                {...register("excel")}
                id={"import"}
                type="file"
                className="absolute left-0 top-0 w-full h-full opacity-0"
                accept={".xls,.xlsx"}
              />
              <CloudUpload className="mx-auto mb-2" />
              <span className="text-sm">
                {fileName ?? t("Texts.text_upload")}
              </span>
            </label>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-[.63rem]">
                {t(`Texts.allowed_formats_excel`)}
              </p>
            </div>
            <div>
              <p className="text-[.63rem]">
                {t(`Texts.allowed_size_image`)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t-2 border-secondary mt-6 pt-4">
          <div className="w-[47%]">
            <Button
              type="button"
              className="border-secondary border-2 font-semibold"
              text={t(`Words.cancel`)}
              onClick={() => onModal(false)}
            />
          </div>
          <div className="w-[47%]">
            <Button
              type="submit"
              isLoading={isLoading}
              text={t(`Words.save`)}
              className="bg-primary  text-white font-semibold disabled:bg-disable"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
}
