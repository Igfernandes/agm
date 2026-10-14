import useGetGalleriesPreview from "@services/Galleries/GetPreview/useGet"
import { ImageShape } from "@type/data"
import { GalleryPhotoShape } from "@type/Galleries/photo"
import { useMemo, useState } from "react"

export function useGalleries() {
    const { rows, isPending } = useGetGalleriesPreview()

    const galleries = useMemo(() => rows.sort((a, b) =>  (a?.title ?? "").localeCompare(b.title)), [rows])
    const [targetPhotos, setTargetPhotos] = useState<Array<ImageShape>>([])

    const handleChangeTargetPhotos = (photos: Array<GalleryPhotoShape> = [], galleryTitle?: string) => {
        setTargetPhotos(photos.map(photo => ({ src: photo.src, alt: `Photo da Galeria ${galleryTitle}` })))
    }

    return {
        galleries,
        handleChangeTargetPhotos,
        targetPhotos,
        isLoading: isPending
    }
}