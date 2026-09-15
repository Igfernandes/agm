import { File } from "@components/shared/forms/File";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import Image from "next/image";
import { ProfileFormProps } from "./type";
import { Button } from "@components/shared/forms/Button";
import dayjs from "dayjs";
import { When } from "@components/utilities/When";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import { Link } from "@assets/Icons/black/Link";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";

type Props = ProfileFormProps & {
    isLoading: boolean;
};

export function Sidebar({ setValue, watch, register, agency, isLoading }: Props) {
    const { t } = useI18n()
    const logotype = watch("logotype")
    const { handleCopy } = useNavigator();
    const { baseUrl } = useWindow();
    const logotypeUrl = useMemo(() => logotype ? logotype : "/imgs/previews/preview-300x300.png", [logotype]);

    return (
        <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
                <div className="flex flex-wrap justify-between items-center w-full mb-4">
                    <div>
                        <ToggleSwitch
                            setValue={setValue}
                            label={t("Words.status")}
                            dataTestId="status"
                            name="status"
                            defaultValue={watch("status")}
                            options={{
                                left: {
                                    text: t("Words.active"),
                                    value: "ACTIVE",
                                },
                                right: {
                                    text: t("Words.inactive"),
                                    value: "INACTIVE",
                                },
                            }}
                        />
                    </div>
                    <When value={!!agency}>
                        <div
                            className="px-3 py-2 shadow-md hover:bg-primary rounded-md cursor-pointer ml-2"
                            onClick={() => handleCopy(`${baseUrl + publicRoutes.agencies}/${agency?.cnpj}`)}
                        >
                            <Link />
                        </div>
                    </When>
                </div>
                <div className="w-full mt-8">
                    <Image className="rounded-full mx-auto mb-2 border-2 h-28 w-[7rem] border-secondary" width={160} height={200} src={logotypeUrl} alt="Logotype" />
                    <File dataTestId="logotype" accept=".png,.jpg,.jpeg" {...register("logotype")} label={t("Words.logotype")} />
                </div>
                <hr className="my-6 border-secondary" />
                <When value={!!agency}>
                    <div>
                        <ul className="text-center">
                            <li className="mb-2"><strong className="bg-primary text-white mb-1 block rounded-sm">{t("Words.created_at")}:</strong> <span>{dayjs(agency?.created_at).format("DD/MM/YYYY HH:mm")}</span> </li>
                            <li><strong className="block bg-primary text-white mb-1 rounded-sm">{t("Words.updated_at")}:</strong> <span>{dayjs(agency?.updated_at).format("DD/MM/YYYY HH:mm")}</span> </li>
                        </ul>
                    </div>
                    <hr className="border-secondary" />
                </When>
            </div>
            <div className="w-full mt-auto">
                <div className="w-full ml-auto mt-3  mb-1">
                    <Button className="text-white" isLoading={isLoading} text={watch('id') ? t("Words.update") : t("Words.create")} />
                </div>
            </div>

        </div>
    )
}