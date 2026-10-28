import { Input } from "@components/shared/forms/Input";
import { TextArea } from "@components/shared/forms/TextArea";
import { ProfileFormProps } from "./type";
import { TextEdit } from "@components/shared/forms/TextEdit";
import { Datetime } from "@components/shared/forms/DateTime";
import { useI18n } from "@contexts/I18n";
import dayjs from "dayjs";

type Props = ProfileFormProps;

export function Information({ register, errors }: Props) {
    const { t } = useI18n()
    return (
        <div>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-primary">
                    {t("Words.information")}
                </h2>
                <p className="text-sm">
                    {t("Screens.dashboard.tours.information.description")}
                </p>
            </div>

            <div className="flex flex-wrap justify-between">
                {/* Title */}
                <div className="w-full my-2">
                    <Input
                        required
                        dataTestId="title"
                        {...register("title")}
                        label={t("Words.title")}
                        maxLength={200}
                        errors={errors?.title}
                    />
                </div>
                {/* Available At */}
                <div className="w-full md:w-[48%] my-2">
                    <Datetime
                        dataTestId="available_at"
                        {...register("available_at")}
                        label={t("Texts.viewed_at")} required={true}
                        errors={errors?.available_at}
                    />
                </div>

                {/* Unavailable At */}
                <div className="w-full md:w-[48%] my-2">
                    <Datetime
                        dataTestId="unavailable_at"
                        {...register("unavailable_at")}
                        label={t("Texts.unavailable_at")} required={true}
                        errors={errors?.unavailable_at}
                    />
                </div>

                {/* Slug */}
                <div className="w-full md:w-[48%] my-2">
                    <Input
                        required
                        dataTestId="slug"
                        {...register("slug")}
                        label={t("Words.slug")}
                        defaultValue={t("Words.tour") + dayjs().format("-MM-DD-YYYY-HH-mm-ss")}
                        maxLength={30}
                        placeholder="..."
                        className="bg-gray-200"
                        errors={errors?.slug}
                    />
                </div>

                {/* Price */}
                <div className="w-full md:w-[48%] my-2">
                    <Input
                        required
                        type="number"
                        step="0.01"
                        dataTestId="price"
                        {...register("price", { valueAsNumber: true })}
                        label={t("Words.price")}
                        errors={errors?.price}
                    />
                </div>

                {/* Promotional Price */}
                <div className="w-full md:w-[48%] my-2">
                    <Input
                        type="number"
                        step="0.01"
                        dataTestId="promotional_price"
                        {...register("promotional_price", { valueAsNumber: true })}
                        label={t("Words.promotional_price")}
                        errors={errors?.promotional_price}
                    />
                </div>

                {/* Slots */}
                <div className="w-full md:w-[48%] my-2">
                    <Input
                        type="number"
                        dataTestId="slots"
                        {...register("slots", { valueAsNumber: true })}
                        label={t("Words.slots")}
                        errors={errors?.slots}
                    />
                </div>

                {/* Video */}
                <div className="w-full my-2">
                    <Input
                        type="url"
                        dataTestId="video"
                        {...register("video")}
                        label={t("Words.video")}
                        maxLength={600}
                        errors={errors?.video}
                    />
                </div>

                {/* Short description */}
                <div className="w-full my-2">
                    <TextArea
                        dataTestId="short_description"
                        {...register("short_description")}
                        label={t("Words.short_description")}
                        className="h-24"
                        maxLength={200}
                        errors={errors?.short_description}
                    />
                </div>

                {/* Description */}
                <div className="w-full my-2">
                    <TextEdit
                        {...register("description")}
                        dataTestId="description"
                        label={t("Words.description")}
                        placeholder={t("Texts.about_description")}
                        errors={errors?.description}
                        maxLength={6000}
                    />
                </div>
            </div>
        </div>
    );
}
