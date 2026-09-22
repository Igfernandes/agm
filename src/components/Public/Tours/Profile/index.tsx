import { TourPreviewShape } from "@type/Tours"
import 'swiper/css';

import { TourGallery } from "./Gallery";
import { Information } from "./Information";
import Image from "next/image";
import { When } from "@components/utilities/When";
import { ClockBI } from "@assets/Icons/black/ClockBI";
import { othersColors } from "@assets/colors/colors";
import { formatMoney } from "@helpers/currencies";
import { TravelBag } from "@assets/Icons/black/TravelBag";
import { useSalesContext } from "@components/Public/Sales/context";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";
import Link from "next/link";

type Props = {
    tour: TourPreviewShape
}

export function Profile({ tour }: Props) {
    const { t } = useI18n()
    const { handleTargetTour } = useSalesContext()
    const agency = useMemo(() => tour?.agencies?.[0], [tour]);

    return (
        <div className="px-2 lg:px-12 mt-5 mb-[5rem]">
            <div className="relative">
                <Image className="w-full h-[110vh] md:h-[80vh] brightness-50 object-cover" src={tour.banner ?? "/imgs/illustration.png"} alt={tour.title} width={800} height={400} />

                <When value={!!tour.featured}>
                    <div className="absolute top-0 left-0 bg-rose-400 text-white px-4 py-2 m-5 rounded-md text-lg font-bold">
                        <span>{t("Screens.tours.featured_tour")}</span>
                    </div>
                </When>

                <div className="absolute bottom-10 w-[90%] md:w-auto left-4">
                    <div className="w-full md:w-1/2 mb-2">
                        <h1 className="text-2xl font-bold text-white">{tour.title}</h1>
                        <p className="text-white mt-2">{tour?.short_description}</p>
                    </div>
                    <div className="md:inline-block">
                        <div className="flex  items-center flex-wrap md:flex-nowrap border-secondary border pb-1 pt-2 px-4">
                            <div className={`${tour.price ? "w-[40%] md:w-1/2" : "flex w-full"} items-center text-white `}>
                                <p><strong>{t("Screens.tours.duration")}: </strong></p>
                                <span className="flex">
                                    <ClockBI fill={othersColors.white} className="w-[1rem] my-1 ml-2 mr-1" /> &nbsp;{tour?.activity_period?.label}</span>
                            </div>
                            <When value={!!tour.price}>
                                <div className="w-[6%] mx-5">
                                    <span className="text-white">|</span>
                                </div>
                                <div className="items-center flex-wrap md:flex-nowrap w-[40%]">
                                    <p className="text-white"><strong>{t("Words.price")}: </strong></p>
                                    <div className="flex items-center">
                                        <TravelBag className="w-[1.5rem] inline-block mr-2" fill={othersColors.white} />
                                        <span style={{
                                            textDecoration: tour.promotional_price ? "line-through" : "none"
                                        }} className="text-white">{formatMoney(tour.price, tour.currency)}</span>
                                        <span className="text-rose-400 inline-block ml-2">{tour.promotional_price ? t("Screens.tours.for") + " " + formatMoney(tour.promotional_price, tour.currency) : ""}</span>
                                    </div>
                                </div>
                            </When>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-[-3rem] mt-10">
                        <When value={tour.price === 0 && !!agency}>
                            <Link target="_blank"
                                href={`https://wa.me/55${agency?.phone}?text=Eu%20acabei%20de%20vir%20do%20site%20do%20AGM%20e%20tenho%20interesse%20em%20reservar%20${tour.title}`}
                                className={`${tour.is_available_for_sale ? "hover:bg-white border-rose-400 border hover:text-rose-400 bg-rose-400" : "bg-zinc-500 cursor-not-allowed"} py-4 px-10 inline-block rounded-md text-white font-semibold cursor-pointer`}>
                                {t("Screens.tours.book_now")}
                            </Link>
                        </When>
                        <When value={tour.price > 0}>
                            <span onClick={() => tour.is_available_for_sale && handleTargetTour(tour.id)}
                                className={`${tour.is_available_for_sale ? "hover:bg-white border-rose-400 border hover:text-rose-400 bg-rose-400" : "bg-zinc-500 cursor-not-allowed"} py-4 px-10 inline-block rounded-md text-white font-semibold cursor-pointer`}>
                                {tour.is_available_for_sale ? t("Screens.tours.book_now") : t("Screens.tours.unavailable_for_booking")}
                            </span>
                        </When>
                        <When value={!!tour.video}>
                            <div className="md:w-auto mt-6 md:mt-0 ml-2 ">
                                <Link href={tour.video ?? ""} target="_blank" className="cursor-pointer py-4 px-10 border-2 bg-white border-rose-400 text-center text-rose-400 rounded-md font-semibold">{t("Texts.watch_now")}</Link>
                            </div>
                        </When>
                    </div>

                </div>

            </div>
            <div className="bg-white shadow-md shadow-slate-400  px-6 pt-10">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-3/5">
                        <div className=" border-b-2 border-slate-200 mb-5">
                            <h2 className="text-2xl font-sans text-dark font-bold mb-5">{t("Screens.tours.overview")}</h2>
                        </div>
                        <div className="px-2 mt-5 text-justify md:text-left" dangerouslySetInnerHTML={{ __html: tour.description as string }}>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/5 mt-10 md:mt-0">
                        <Information tour={tour} />
                    </div>
                </div>

                <div className="w-full p-4 pb-[4rem] ">
                    <TourGallery tour={tour} />
                </div>
            </div>
        </div >
    )
}