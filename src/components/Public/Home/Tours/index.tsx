import { ToursRelations } from "@components/Public/Tours/ToursRelations";
import { MonthSlides } from "@components/shared/layouts/MonthSlides";
import { Section } from "@components/shared/layouts/Section";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

export function Tours() {
    const { t } = useI18n()
    const [targetMonth, setTargetMonth] = useState<number>(dayjs().month() + 1);
    return (
        <Section>
            <div className="my-20">
                <div className="text-center">
                    <h2 className="text-primary text-3xl font-bold mb-2">{t("Screens.home.tours.title")}</h2>
                    <p>{t("Screens.home.tours.description")}</p>
                </div>
                <div className="text-center mt-5">
                    <Link href={publicRoutes.tours} className="text-primary underline text-lg font-semibold">
                        {t("Screens.home.tours.view_all")}
                    </Link>
                </div>
                <MonthSlides handleChangeMonth={setTargetMonth} target={targetMonth} />
                <ToursRelations slidesPerView={4} query={{
                    available_at: `${dayjs().year()}-${String(targetMonth).padStart(2, "0")}-00`
                }} />
            </div>
        </Section>
    )
}