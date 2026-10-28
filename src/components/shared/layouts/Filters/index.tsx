import { Filter } from "@assets/Icons/black/Filter";
import { othersColors } from "@assets/colors/colors";
import { Modal } from "../Modal";
import { useModalContext } from "@contexts/Modal";
import { useRef } from "react";
import { Button } from "@components/shared/forms/Button";
import { useFiltersContext } from "./contexts";
import { FormProvider } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { Manager } from "./presets/Manager";

type Props = {
    id: string;
    children: React.ReactNode;
}

export function Filters({ children, id }: Props) {
    const KEY_FILTER = useRef<string>(`FILTER_MODAL_${id}`);
    const { handleToggleModal, modal } = useModalContext()
    const { handleAlterFilters, handleSubmit, methods, filters } = useFiltersContext();
    const hasFilter = Object.values(filters[id] ?? {}).length > 0;

    return (
        <div className="z-10 relative">
            <div className="flex items-center">
                <div onClick={() => handleToggleModal(KEY_FILTER.current)} className=" bg-white hover:bg-zinc-200 shadow-md border-primary border-2 p-2 cursor-pointer rounded-md ml-2">
                    <Filter width={25} height={25} fill={othersColors.primary} />
                </div>
                <div onClick={() => handleAlterFilters({})} style={{
                    backgroundColor: hasFilter ? othersColors.primary : othersColors.white,
                    color: hasFilter ? othersColors.white : othersColors.primary,
                    cursor: hasFilter ? "pointer" : "not-allowed",

                }
                } className="p-2 border-2 border-primary rounded-md ml-2 font-semibold text-primary cursor-pointer hover:bg-zinc-200">
                    <span>Limpar Filtros</span>
                </div>
            </div>
            <div className="mb-9 mt-3">
                <div className="absolute w-[80vw]">
                    <Swiper
                        slidesPerView={"auto"}
                        modules={[Navigation]}
                        spaceBetween={5}
                        navigation={{
                            nextEl: ".gallery-button-next",
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                // telas pequenas (celulares)
                                slidesPerView: 2,
                            },
                            640: {
                                // tablets em pé
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {Object.entries(filters[id] ?? {}).map(([key, value]) => {
                            if (!value) return null;
                            return (
                                <SwiperSlide key={`filter_tag_${key}`} className="text-sm mr-2 mt-2">
                                    <div className="inline bg-primary text-white px-2 py-1 rounded-md" >
                                        <Manager index={key} value={String(value)} />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
            <Modal title="Filtros de Busca" isShowModal={modal.type === KEY_FILTER.current} handleModal={handleToggleModal}>
                <FormProvider {...methods} >
                    <form onSubmit={handleSubmit(handleAlterFilters)} className="w-full md:min-w-[500px] ">
                        {children}
                        <div className="w-[8rem] ml-auto">
                            <Button text="Filtrar" className="text-white font-semibold w-" />
                        </div>
                    </form>
                </FormProvider>
            </Modal>
        </div>
    )
}