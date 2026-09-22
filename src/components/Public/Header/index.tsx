import { PersonLockBI } from "@assets/Icons/black/PersonLockBI";
import { Flags } from "@components/shared/layouts/Flags";
import { useI18n } from "@contexts/I18n";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  const { t } = useI18n();

  return (
    <header className="absolute w-full left-0 top-3 md:top-5 z-50">
      <div className="w-full md:w-[85%] max-w-[1250px] px-1 md:mx-auto">
        <div className="information md:flex justify-between text-white mb-2">
          <div className="flex items-center">
            <div className="address ml-2 pr-2 ">
              <span className="text-xs font-semibold">
                {t("Screens.home.contact.address_title")}
              </span>
              <br />
              <p className="text-xs md:text-sm">
                {t("Screens.home.contact.address")}
              </p>
            </div>
            <div className="phone lg:hidden border-l-2 border-white pl-2">
              <span className="text-xs font-semibold">
                {t("Screens.home.contact.phone_title")}
              </span>
              <br />
              <Link
                className="text-xs md:text-sm hover:text-rose-300"
                href="tel:+55 21 98897-4586"
              >
                {t("Screens.home.contact.phone")}
              </Link>
            </div>
          </div>
          <div className="contact hidden  md:flex flex-wrap">
            <div className="phone hidden lg:block border-r-2 border-white pr-4">
              <span className="text-xs font-semibold">
                {t("Screens.home.contact.phone_title")}
              </span>
              <br />
              <Link
              target="_blank"
                className="text-sm hover:text-rose-300"
                href="https://wa.me/5521995071974?text=Ol%C3%A1%20AGM.Eu%20vim%20ddo%20dsite%20de%20preciso%20de%20ajuda%20e%20tenho%20d%C3%BAvidas"
              >
                {t("Screens.home.contact.phone")}
              </Link>
            </div>
            <div className="email pl-2">
              <span className="text-xs font-semibold">
                {t("Screens.home.contact.email_title")}
              </span>
              <br />
              <Link
                className="text-sm hover:text-rose-300"
                href="mailto:contato@agmturismomarica.com.br"
              >
                {t("Screens.home.contact.email")}
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar flex items-center justify-between bg-white py-2 px-4 rounded-full">
          <div className="flex items-center">
            <div className="logo p-2 ml-5">
              <Image
                src={"/imgs/logotype.png"}
                width={90}
                height={80}
                className="h-16 object-contain"
                alt="logotype matrilhas"
              />
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center mx-4">
                <li className="mx-2">
                  <Link className="font-semibold text-zinc-600 hover:text-primary" href={"#about_us"}>
                    {t("Screens.home.menu.about_us")}
                  </Link>
                </li>
                <li className="mx-2">
                  <Link className="font-semibold text-zinc-600 hover:text-primary" href={"#agencies"}>
                    {t("Words.agencies")}
                  </Link>
                </li>
                <li className="mx-2">
                  <Link className="font-semibold text-zinc-600 hover:text-primary" href={"/galleries"}>
                    {t("Words.galleries")}
                  </Link>
                </li>
                <li className="mx-2">
                  <Link className="font-semibold text-zinc-600 hover:text-primary" href={"/tours"}>
                    {t("Words.tours")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex items-center">
            <div>
              <Link href={"/access"} className="flex items-center bg-primary p-3 rounded-full text-white hover:text-primary hover:bg-white border-2 border-primary">
                <PersonLockBI width={20} height={20} />
              </Link>
            </div>
            <div className="languages">
              <Flags />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
