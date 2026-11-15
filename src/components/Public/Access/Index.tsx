import { AccessForm } from "./Form";
import { CSRFShape } from "@services/Authentications/CSRF/types";
import { useI18n } from "@contexts/I18n";

type Props = {
  csrf: CSRFShape;
};

export function AccessContent({ csrf }: Props) {
  const { t } = useI18n()

  return (
    <div className="md:max-w-[400px] mx-auto">
      <div className="mb-1">
        <h2 className="text-2xl text-white">
          <strong>{t("Screens.access.title")}</strong>
        </h2>
      </div>
      <div className="mb-6">
        <p className="text-sm text-white">{t("Screens.access.text")}</p>
      </div>
      <AccessForm csrf={csrf} />
    </div>
  );
}
