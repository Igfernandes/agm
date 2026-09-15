import { InfoBoard } from "@components/shared/forms/InfoBoard/viewer";
import { TViewer } from "@components/shared/forms/InfoBoard/fields/Viewer";
import { Sidebar } from "./sidebar";
import { FormProvider } from "react-hook-form";
import { useProfile } from "./hooks/useProfile";
import { ProfileManagerProps } from "./type";
import { useI18n } from "@contexts/I18n";
import { When } from "@components/utilities/When";
import { useMemo } from "react";
import { getCPFFormatted } from "@helpers/string";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { COLORS } from "@constants/colors";
import { textColors } from "@assets/colors/colors";
import { Shared } from "@components/shared/others/Shared";

type Props = Pick<ProfileManagerProps, "sale">;

export function Information({ sale }: Props) {
    const { formMethods, handleSubmit, onSubmit, errors, isLoading } = useProfile({ sale })
    const { t } = useI18n()
    const status = formMethods.watch("status")
    const metadata = useMemo(() => {
        return sale.metadata
    }, [sale.metadata])
    const agency = useMemo(() => ({
        name: sale?.agency?.name ?? "--",
        url: sale?.agency?.id ? `${privateRoutes.agencies}/${sale.agency.id}` : undefined
    }), [sale.agency])
    const statusColors = {
        PAID: COLORS.success,
        PENDING: textColors.orange,
        CANCELED: textColors.red,
    };

    return (
        <FormProvider {...formMethods}>
            <form className=" w-full  shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap">
                    <div className="bg-white p-4 pt-10 md:pt-4 w-full md:w-[60%] lg:w-[70%] md:pr-4 mb-4 md:mb-0">
                        <div className="flex flex-wrap justify-between">
                            <div className="mb-4">
                                <h2 className="text-2xl font-semibold text-primary ">{t("Words.information")}</h2>
                                <p className="text-sm">{t("Screens.dashboard.sales.text_describe_information")}</p>
                            </div>
                            <div>
                                <Shared entity="SALES" in_ids={[sale.id]} />
                            </div>
                        </div>
                        <div className="p-1 rounded-md text-center text-white mb-2" style={{
                            backgroundColor: statusColors[status],
                        }}>
                            <h3>{t(`Screens.dashboard.sales.status.${status.toLocaleLowerCase()}`)}</h3>
                        </div>
                        <InfoBoard>
                            <TViewer name="reference" label={t("Words.reference_id")} defaultValue={sale.reference} />
                            <TViewer name="payment_id" label={t("Words.payment_id")} defaultValue={sale.payment_id ?? "--"} />
                            <TViewer element="reference" name="agency" url={agency?.url} label={t("Words.agency")}
                                value={agency?.name} />
                            <TViewer name="tour" label={t("Words.tour")} defaultValue={sale.tour.name ?? "--"} />
                            <TViewer name="bank" label={t("Words.bank")} defaultValue={sale?.bank?.name ?? "Mercado Pago"} />
                            <When value={!!metadata?.boarding}>
                                <TViewer name="landing" label={t("Texts.landing_at")} defaultValue={String(metadata?.boarding) ?? "--"} />
                            </When>
                            <When value={!!metadata?.landing}>
                                <TViewer name="landing" label={t("Texts.landing_at")} defaultValue={String(metadata?.landing) ?? "--"} />
                            </When>
                        </InfoBoard>
                        <hr className="border-secondary my-4" />
                        <When value={!!metadata}>
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold text-primary ">{t("Texts.client_information")}</h2>
                                <p className="text-sm">{t("Screens.dashboard.sales.text_describe_client_information")}</p>
                            </div>
                            <InfoBoard>
                                <When value={!!sale.client}>
                                    <TViewer element="reference" name="client" url={`${privateRoutes.clients}/${sale.client?.id}`} label={t("Words.client")} value={sale?.client?.name ?? "--"} />
                                </When>
                                <When value={!sale.client}>
                                    <TViewer element="reference" name="client" url={`#`} label={t("Words.client")} value={"Excluído"} />
                                </When>

                                <TViewer name="document" label={t("Words.document")} defaultValue={getCPFFormatted(String(metadata?.cpf)) ?? "--"} />
                                <TViewer name="email" label={t("Words.email")} defaultValue={String(metadata?.email) ?? "--"} />
                                <TViewer name="phone" label={t("Words.phone")} defaultValue={String(metadata?.phone) ?? "--"} />
                                <TViewer name="bank" label={t("Words.bank")} defaultValue={sale?.bank?.name ?? "Mercado Pago"} />

                            </InfoBoard>
                            <hr className="border-secondary my-4" />
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold text-primary ">{t("Texts.client_address")}</h2>
                                <p className="text-sm">{t("Screens.dashboard.sales.text_describe_client_address")}</p>
                            </div>
                            <InfoBoard>
                                <TViewer name="country" label={t("Words.country")} defaultValue={String(metadata?.country) ?? "--"} />
                                <TViewer name="state" label={t("Words.state")} defaultValue={String(metadata?.state) ?? "--"} />
                                <TViewer name="city" label={t("Words.city")} defaultValue={String(metadata?.city) ?? "--"} />
                                <When value={!!metadata?.residency_file}>
                                    <TViewer name="residency_file" isFile={true} label={t("Screens.sales.residency_file")} defaultValue={String(metadata?.residency_file) ?? "--"} />
                                </When>
                            </InfoBoard>
                            <hr className="border-secondary my-4" />

                        </When>
                    </div>
                    <div className="bg-white p-4 w-full sticky md:h-[85vh] top-2 md:w-[38%] lg:w-[28%] ml-auto">
                        <Sidebar {...formMethods} sale={sale} errors={errors} isLoading={isLoading} />
                    </div>
                </div>
            </form>
        </FormProvider>



    )
}