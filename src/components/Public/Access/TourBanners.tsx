import { Slides } from "@components/shared/layouts/Slides";
import { useTourBanners } from "./hooks/useTourBanners";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@contexts/I18n";
import { When } from "@components/utilities/When";

export function TourBanners() {
    const { t } = useI18n()
    const { tours } = useTourBanners();
    return (
        <div className="h-full">
            <When value={tours.length > 0}>
                <Slides effect="fade" className="h-full" slides={tours.map((tour) => (
                    <div className="h-[55vh] rounded-md overflow-hidden" key={`tour_${tour.id}`}>
                        <Image width={800} height={700} className="h-[45vh] object-cover w-full" src={tour.banner ?? ""} alt={`Banner for tour ${tour.title}`} />
                        <div className="relative bg-slate-50 flex justify-between items-center w-full py-3 px-4">
                            <div>
                                <h1 className="text-xl font-bold mb-1 line-clamp-1 text-primary leading-4">{tour.title}</h1>
                                <p className="text-cross-black-secondary text-sm line-clamp-2">{tour.short_description}</p>
                            </div>
                            <div className="mr-2">
                                <Link href={`/tours/${tour.slug}`}
                                    className="bg-rose-600 text-white px-4 py-1 rounded-md font-semibold hover:bg-rose-700 transition-colors">
                                    {t("Texts.see_more")}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))} />
            </When>
            <When value={tours.length == 0}>
                <Image width={800} height={700} className="h-full object-cover w-full" src={"/imgs/banners/banner-1.jpg"} alt={`Banner for tour`} />
            </When>
        </div>
    )
}