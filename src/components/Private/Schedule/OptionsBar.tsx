import { Button } from "@components/shared/layouts/Button";
import { useModalContext } from "@contexts/Modal";
import { useI18n } from "@contexts/I18n";

export function OptionsBar() {
  const { t } = useI18n()
  const { handleToggleModal } = useModalContext();

  return (
    <div className="flex flex-wrap md:flex-none justify-end mb-6">
      <div className="w-full lg:w-[75%] flex justify-end">
        <div className="w-full md:w-auto mx-2 mt-2 md:mt-auto">
          <Button
            className="border border-zinc-300 px-3 font-bold rounded-xl bg-secondary text-primary"
            text={t("Texts.schedule_event")}
            type="button"
            onClick={() => handleToggleModal("SCHEDULE", '')}
          />
        </div>
      </div>
    </div>
  );
}
