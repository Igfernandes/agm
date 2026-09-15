import { GalleryProps } from "./type";
import { useGallery } from "./hooks/useGallery";
import { LoadingModal } from "./modals/loading";
import { When } from "@components/utilities/When";
import Image from "next/image";
import { Trash } from "@assets/Icons/black/Trash";
import { textColors } from "@assets/colors/colors";

export function Gallery({ api, id }: GalleryProps) {
    const { handleUploadFiles, fileRef, images, handleDeleteImage } = useGallery({ url: api, key: id });

    return (
        <>
        <div className="w-full relative bg-white h-[20vh] hover:bg-primary cursor-pointer hover:text-white overflow-hidden p-1 border-2 border-zinc-300 mt-1">
             <input ref={fileRef} onChange={handleUploadFiles} accept=".png,.jpg,.jpge" className="opacity-0 absolute top-0 left-0 z-20 w-full h-full flex-1" type="file" multiple />
                <div className="flex items-center justify-center py-7 ml-[1px] w-full text-center">
                <span>Arraste e solte <br /> imagens aqui</span>
            </div>

        </div>
            <div className="w-full bg-secondary h-[60vh] overflow-y-auto p-1 border-2 border-zinc-300">
                 <div className="relative flex flex-wrap justify-start items-start w-full h-full">

                    <When value={images.length > 0}>
                        {images.map((image, key) => (
                            <div key={`gallery_${key}_${id}`} className="relative z-10 text-center mx-[1px] h-60 md:h-40 w-full md:w-[24.7%] xl:w-[19.7%] border-primary border mb-1">
                                <div className="absolute top-0 right-0 bg-white shadow p-1 cursor-pointer" onClick={() => handleDeleteImage(image.id)}>
                                    <Trash width={20} height={20} fill={textColors.red} />
                                </div>
                                <Image className="w-full h-full object-cover" src={image.src} alt="gallery image" width={500} height={500} />
                            </div>
                        ))}
                    </When>
                 
                </div>
            </div>
            <div className="relative z-10">
                <LoadingModal />
            </div>
        </>

    )
}