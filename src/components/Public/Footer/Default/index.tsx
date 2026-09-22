import { WhatsAppBI } from "@assets/Icons/black/WhatsAppBI";
import { useI18n } from "@contexts/I18n";
import Link from "next/link";

export function FooterDefault() {
  const { t } = useI18n()
  return (
    <div>
      <div className="text-center pb-4">
        <p className="leading-5 text-sm">
          {t("Screens.footer.developed_by")} &nbsp;
          <Link
            href="https://companymarket.com.br"
            target="_blank"
            rel="noopener"
            className="text-red"
          >
            Company Market
          </Link>
          &nbsp; © <strong>AGM.</strong> <br />
          {t("Screens.footer.all_rights_reserved")}. &nbsp; · &nbsp;
          <Link href="/politics-privacy" className="underline">{t("Screens.footer.privacy_policy")}</Link>
        </p>
      </div>
      <div className="whatsApp fixed z-[99999999] bottom-28 md:bottom-10 left-2 md:left-auto  md:right-10 p-3 shadow shadow-black rounded-full bg-rose-600 ">
        <span className="hidden md:block absolute w-[10rem] p-2 rounded-xl rounded-br shadow shadow-cross-black-secondary right-10 bg-white bottom-12">{t("Screens.needs_help")}</span>
        <Link target="_blank" href={"https://api.whatsapp.com/send/?phone=5521971292030&text=Olá+AGM.+Eu+vim+do+site+e+preciso+de+ajuda.+tenho+dúvidas&type=phone_number&app_absent=0"}>
          <WhatsAppBI fill="white" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
}
