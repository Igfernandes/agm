import { FormProvider } from "react-hook-form";
import { Information } from "./Information";

import { useProfile } from "./hooks/useProfile";
import { ProfileManagerProps } from "../type";
import { Button } from "@components/shared/forms/Button";
import { Gallery } from "@components/shared/layouts/Gallery";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";
import { useI18n } from "@contexts/I18n";

type Props = Pick<ProfileManagerProps, "gallery">

export function GalleryProfile({ gallery }: Props) {
    const { t } = useI18n()
    const { formMethods, handleSubmit, onSubmit, errors, isLoading } = useProfile({ gallery })
    const { galleriesByPhoto } = API_ROUTES
    const { setParams } = useRoutes()

    return (
        <FormProvider {...formMethods}>
            <form className=" w-full  shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                <Information {...formMethods} gallery={gallery} errors={errors} />
                <div className="relative z-0">
                    <Gallery
                        id="gallery"
                        api={setParams({
                            url: galleriesByPhoto,
                            data: {
                                id: gallery.id ?? "",
                            }
                        })} />
                </div>

                <div className="w-full md:w-[25%] ml-auto mt-10">
                    <Button className="text-white" text={gallery ? t("Words.update") : t("Words.create")} isLoading={isLoading} />
                </div>
            </form>
        </FormProvider>
    )
}