import { useTabs } from "./hooks/useTabs";
import { useRef } from "react";
import { TourTabProps } from "./type";
import { useI18n } from "@contexts/I18n";

export function ToursTabs({ tabs }: TourTabProps) {
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
                    <li className={`${tabStyled.current} ${tab === "BOARDING" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("BOARDING")}>
                        <a className="tab-link">{t("Words.boarding")}</a>
                    </li>
                    <li className={`${tabStyled.current} ${tab === "LANDING" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("LANDING")}>
                        <a className="tab-link">{t("Words.landing")}</a>
                    </li>
                    <li className={`${tabStyled.current} ${tab === "PERIODS" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("PERIODS")}>
                        <a className="tab-link">{t("Words.periods")}</a>
                    </li>
                    <li className={`${tabStyled.current} ${tab === "RULES" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("RULES")}>
                        <a className="tab-link">{t("Words.rules")}</a>
                    </li>
                    <li className={`${tabStyled.current} ${tab === "GALLERY" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("GALLERY")}>
                        <a className="tab-link">{t("Words.gallery")}</a>
                    </li>
                    <li className={`${tabStyled.current} ${tab === "AGENCIES" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("AGENCIES")}>
                        <a className="tab-link">{t("Words.agencies")}</a>
                    </li>
                </ul>
            </div>
            <div>
                {tabs[tab]}
            </div>
        </>
    )
}