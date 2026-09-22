import { BrandInstagram } from "@assets/Icons/black/BrandInstagram";
import { BrandTikTok } from "@assets/Icons/black/BrandTiktok";
import { BrandYoutube } from "@assets/Icons/black/BrandYoutube";
import { PrivacyAndCookies } from "@components/shared/layouts/PrivacyAndCookies";
import { When } from "@components/utilities/When";
import { useI18n } from "@contexts/I18n";
import Link from "next/link";

type Props = {
  hasPoliticsCookies?: boolean;
};

export function Footer({ hasPoliticsCookies = true }: Props) {
  const { t } = useI18n()
  return (
    <footer className="relative z-10 bg-white pb-2">
      <div className="text-center border-t-2 border-secondary">
        <div className="content max-w-[1100px] mx-auto">
          <div>
            <ul className="flex justify-center mt-4 mb-2">
              <li className="mx-2">
                <Link href="">
                  <BrandTikTok />
                </Link>
              </li>
              <li className="mx-2">
                <Link href="https://www.instagram.com/guiasdemarica/" target="_blank">
                  <BrandInstagram />
                </Link>
              </li>
              <li className="mx-2">
                <Link href="">
                  <BrandYoutube />
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-2">
            <p>© 2024 AGM | {t("Screens.footer.all_rights_reserved")}.</p>
          </div>
        </div>
      </div>

      <When value={hasPoliticsCookies}>
        <PrivacyAndCookies />
      </When>
    </footer>
  );
}
