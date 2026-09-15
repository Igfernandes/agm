import { Section } from "@components/shared/layouts/Section";
import { AgencyPreviewPageProps } from "./type";
import Image from "next/image";
import { Icons } from "@constants/icons";
import { AgencySocialMediaPlatforms } from "@type/Agencies/SocialMedia";
import Link from "next/link";
import { When } from "@components/utilities/When";
import { EmailBI } from "@assets/Icons/black/EmailBI";
import { PhoneBI } from "@assets/Icons/black/PhoneBI";
import { othersColors } from "@assets/colors/colors";
import { getCNPJFormatted } from "@helpers/string";
import { useMemo } from "react";
import { ToursRelations } from "../Tours/ToursRelations";
import { useI18n } from "@contexts/I18n";

export function AgenciesPreviewPage({ targetAgency }: AgencyPreviewPageProps) {
    const address = useMemo(() => targetAgency.address, [targetAgency])
    const { t } = useI18n()
    return (
        <Section>
            <div className="mx-2 md:mx-10">
                <div className="mb-5">
                    <h1 className="text-primary font-bold text-2xl">{targetAgency.name}</h1>
                </div>
                <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row justify-between">
                    <div className="w-full md:w-[70%] my-4">
                        <div>
                            <p className="text-justify" dangerouslySetInnerHTML={{ __html: String(targetAgency.describe) }} />
                        </div>
                        <div className="mt-10">
                            <div>
                                <h2 className="text-xl text-primary font-semibold">{t("Screens.agencies.related_tours")}</h2>
                                <span><small>{t("Screens.agencies.related_tours_description")}</small></span>
                            </div>
                            <div>
                                <ToursRelations query={{
                                    agency_id: targetAgency.id
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[30%] text-center ">
                        <div className="shadow-md border-2 border-zinc-200 rounded-lg p-4 bg-white mx-0 md:mx-8">
                            <Image src={targetAgency.logotype || "/images/default-agency-logotype.png"}
                                alt={targetAgency.name} width={200} height={200}
                                className="mx-auto" />
                            <div className="mt-4">
                                <div>
                                    <span className="text-primary">{t("Screens.agencies.follow_us_on_social_media")}</span>
                                </div>
                                <ul className="flex justify-around py-2 w-full mx-auto">
                                    {targetAgency.social_media?.map((social, key) => (
                                        <li key={`social_${key}`}>
                                            <Link href={social.link} target="_blank" rel="noopener noreferrer"
                                                className=" bg-primary p-[.6rem] rounded-full inline-block underline">
                                                {Icons[social.platform as AgencySocialMediaPlatforms] as React.ReactNode}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-1 mb-2">
                                <p><strong className="text-primary">{t("Screens.agencies.cnpj")}: </strong>{getCNPJFormatted(targetAgency.cnpj)}</p>
                            </div>
                            <When value={Object.values(address ?? {}).filter((value) => !!value).length > 0}>
                                <div className="mt-2">
                                    <span className="bg-primary block text-white mb-1"><strong>{t("Screens.agencies.located_at")}</strong></span>
                                    <p className="text-sm text-justify bg-secondary p-1 shadow-md">{address?.complement}, {address?.number}, {address?.city}. {address?.state} - {address?.country}, {address?.zip_code}.</p>
                                </div>
                            </When>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed hidden md:block right-5 bottom-10 z-50 ">
                <ul className="flex flex-col">
                    <When value={!!targetAgency.email}>
                        <li className="relative bg-primary inline-block p-3 text-white my-2 shadow-sm shadow-white rounded-full">
                            <Link href={`mailto:${targetAgency.email}`}>
                                <EmailBI width={24} height={24} fill={othersColors.white} />
                            </Link>
                        </li>
                    </When>
                    <When value={!!targetAgency.phone}>
                        <li className="relative bg-primary inline-block p-3 text-white shadow-sm shadow-white rounded-full mt-1">
                            <Link href={`tel:${targetAgency.phone}`}>
                                <PhoneBI width={24} height={24} fill={othersColors.white} />
                            </Link>
                        </li>
                    </When>
                </ul>
            </div>
        </Section>
    );
}