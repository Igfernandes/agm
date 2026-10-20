import { Input } from "@components/shared/forms/Input";
import { ProfileFormProps } from "./type";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import { File } from "@components/shared/forms/File";
import Image from "next/image";
import { When } from "@components/utilities/When";
import { useI18n } from "@contexts/I18n";

type Props = ProfileFormProps;

export function Information({ register, errors, setValue, watch }: Props) {
    const { t } = useI18n()
    const cover = watch("cover") ?? ""
    const status = watch("status")

    return (
        <div>
            <div className="mb-4">
                <div className="flex flex-wrap">
                    <div className="w-1/2">
                        <h2 className="text-2xl font-semibold text-primary">
                            {t("Words.information")}
                        </h2>
                        <p className="text-sm">
                            {t("Screens.dashboard.galleries.text_about_information")}
                        </p>
                    </div>
                    <div className="ml-auto">
                        <ToggleSwitch
                            setValue={setValue}
                            label={t("Words.status")}
                            dataTestId="status"
                            name="status"
                            defaultValue={status}
                            options={{
                                left: {
                                    text: t("Words.active"),
                                    value: "PUBLISHED",
                                },
                                right: {
                                    text: t("Words.inactive"),
                                    value: "DRAFT",
                                },
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-between">
                <div className="w-full flex">
                    <When value={!!cover}>
                        <div className="bg-white text-center w-[15rem] mb-2 p-2 pb-0 shadow">
                            <Image className="h-[20vh] object-contain w-full" src={cover} alt={watch("title")} width={400} height={400} />
                            <span className="text-xs">Formato: 400x400</span>
                        </div>
                    </When>
                    <div className="w-full">
                        <div className="mt-1">
                            <File dataTestId="cover" {...register("cover")} accept=".png,.jpg,.jpeg" label={t("Words.cover")} errors={errors?.cover} />
                        </div>
                        <div className="mt-2">
                            <Input
                                required
                                dataTestId="title"
                                {...register("title")}
                                label={t("Words.title")}
                                errors={errors?.title}
                                maxLength={200}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
