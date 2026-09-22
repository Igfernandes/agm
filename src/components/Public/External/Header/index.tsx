import { othersColors } from "@assets/colors/colors";
import { LockSquareRoundedFilled } from "@assets/Icons/black/LockSquareRoundedFilled";
import { MenuBI } from "@assets/Icons/black/MenuBI";
import { Flags } from "@components/shared/layouts/Flags";
import { useI18n } from "@contexts/I18n";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const { t } = useI18n();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="relative z-[10]">
        <div className="bg-white px-6 py-4 border-b-2 border-zinc-200">
          <div className="content flex justify-between items-center max-w-[1100px] mx-auto">
            <div className="flex items-center">
              <div className="mr-4">
                <Link href={"/"}>
                  <Image
                    src={"/imgs/logotype.png"}
                    width={53}
                    height={56}
                    alt="logotipo AGM"
                  />
                </Link>
              </div>
              <div className="relative z-[999]">
                <MenuBI fill={othersColors.primary} width={50} height={50} className="md:hidden" onClick={() => setOpenMenu(!openMenu)} />
                <ul className={`md:flex ${openMenu ? "block" : "hidden"} absolute md:relative mt-0 w-[8rem] md:w-auto md:h-auto h-[8rem] rounded-md bg-white  shadow-sm shadow-black  p-2 md:p-0 md:shadow-none`}>
                  <li className="mx-2 my-2">
                    <Link className="font-bold text-primary hover:text-rose-500" href={"/#about_us"}>
                      <span>{t("Texts.about_us")}</span>
                    </Link>
                  </li>
                  <li className="mx-2 my-2">
                    <Link className="font-bold text-primary hover:text-rose-500" href={"/#agencies"}>
                      <span>{t("Words.agencies")}</span>
                    </Link>
                  </li>
                  <li className="mx-2 my-2">
                    <Link className="font-bold text-primary hover:text-rose-500" href={"/tours"}>
                      <span>{t("Words.tours")}</span>
                    </Link>
                  </li>
                  <li className="mx-2 my-2">
                    <Link className="font-bold text-primary hover:text-rose-500" href={"/galleries"}>
                      <span>{t("Words.galleries")}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="hidden md:flex items-center bg-secondary p-2 rounded-lg">
                <LockSquareRoundedFilled className="mr-2" />
                <span className="text-xs">
                  <strong>{t("Texts.site_protected")}</strong>
                </span>
              </div>
              <Flags />

            </div>
          </div>
        </div>
      </header>
    </>
  );
}
