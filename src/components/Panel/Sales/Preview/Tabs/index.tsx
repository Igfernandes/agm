import { useTabs } from "./hooks/useTabs";
import { useRef } from "react";
import { SalePaymentTabProps } from "./type";
import { useI18n } from "@contexts/I18n";
import { When } from "@components/utilities/When";

export function SalesTabs({ tabs }: SalePaymentTabProps) {
    const { handleChangeTab, tab } = useTabs()
    const { t } = useI18n()
    const tabStyled = useRef<string>("text-md md:text-sm xl:text-md px-2 border-primary border border-b-0 rounded-sm cursor-pointer hover:bg-rose-600 hover:text-white px-2 py-1");

    return (
        <>
            <div>
                <ul className="flex flex-wrap">
                    <li className={`${tabStyled.current} ${tab === "INFORMATION" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("INFORMATION")}>
                        <a className="tab-link">{t("Words.information")}</a>
                    </li>
                    <When value={!!tabs["EXTRACT"]}>
                        <li className={`${tabStyled.current} ${tab === "EXTRACT" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("EXTRACT")}>
                            <a className="tab-link">{t("Words.extract")}</a>
                        </li>
                    </When>
                    <When value={!!tabs["DEPENDENTS"]}>
                        <li className={`${tabStyled.current} ${tab === "DEPENDENTS" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("DEPENDENTS")}>
                            <a className="tab-link">{t("Words.dependents")}</a>
                        </li>
                    </When>
                </ul>
            </div>
            <div>
                {tabs[tab]}
            </div>
        </>
    )
}