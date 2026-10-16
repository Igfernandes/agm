import { Button } from "@components/shared/layouts/Button";
import { AccessControl } from "@components/shared/settings/AccessControl";
import { PERMISSIONS } from "@constants/permissions";
import { SaleFilters } from "./SaleFilters";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";

export function OptionsBar() {
  const { t } = useI18n()
  const router = useRouter();
  const { sales } = privateRoutes;

  return (
    <>
      <div className="relative flex justify-between flex-wrap md:flex-nowrap mb-4">
        <div className="w-full md:w-[45%] xl:w-[25%]">
          <SaleFilters />
        </div>
        <div className="mt-5 md:mt-0 w-full flex-wrap lg:flex-none md:w-[75%] flex justify-around md:justify-end">
          <div className="w-full md:w-auto mx-0 md:mx-2 mb-3 lg:my-0">
            <AccessControl targetPermissions={[PERMISSIONS.sales.create]}>
              <Button
                className="border border-zinc-300 px-3 font-bold rounded-xl bg-white text-primary"
                text={t("Words.register")}
                type="button"
                onClick={() => router.push(`${sales}/create`)}
              />
            </AccessControl>
          </div>
        </div>
      </div>
    </>
  );
}
