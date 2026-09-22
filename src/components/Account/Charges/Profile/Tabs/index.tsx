import { useTabs } from "./hooks/useTabs";
import { useRef } from "react";
import { TourTabProps } from "./type";
import { useI18n } from "@contexts/I18n";

export function ChargesTabs({ tabs }: TourTabProps) {
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
                    <li className={`${tabStyled.current} ${tab === "PAYMENTS" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("PAYMENTS")}>
                        <a className="tab-link">{t("Words.payments")}</a>
                    </li>
                </ul>
            </div>
            <div>
                {tabs[tab]}
            </div>
        </>
    )
}