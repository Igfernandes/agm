import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Dispatch, SetStateAction, useRef } from "react";
import { Month, MONTHS } from "@constants/months";
import { ArrowLeft } from "@assets/Icons/black/ArrowLeft";
import { ArrowRight } from "@assets/Icons/black/ArrowRight";
import { othersColors } from "@assets/colors/colors";

type Props = {
    handleChangeMonth: Dispatch<SetStateAction<number>>
    target: number
}

export function MonthSlides({ handleChangeMonth, target }: Props) {
    const months = useRef<Month[]>(MONTHS)

    return (
        <div className="flex items-center max-w-[730px] mx-auto my-5">
            <div className="mr-2">
                <ArrowLeft className="cursor-pointer filter-button-prev" width={20} height={20} fill={othersColors.primary} />
            </div>
            <div className="bg-primary w-[90%] px-2 py-2 rounded-md">
                <Swiper
                    slidesPerView={6}
                    modules={[Autoplay, Navigation]}
                    spaceBetween={5}
                    navigation={{
                        nextEl: ".filter-button-next",
                        prevEl: ".filter-button-prev",
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            // telas pequenas (celulares)
                            slidesPerView: 3,
                        },
                        640: {
                            // tablets em pé
                            slidesPerView: 6,
                        },
                    }}
                >
                    {months.current.map((month, key) => (
                        <SwiperSlide key={`month_${key}`}>
                            <span className={`inline-block hover:bg-white font-semibold hover:text-primary cursor-pointer pointer ${target == month.value ? "text-primary bg-white" : "text-white"}px-4 py-1 rounded-md`} onClick={() => handleChangeMonth(month.value)} >{month.title}</span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="ml-2">
                <ArrowRight className="cursor-pointer filter-button-next" width={20} height={20} fill={othersColors.primary} />
            </div>
        </div>
    )
}