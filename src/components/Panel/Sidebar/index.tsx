import { Bars } from "@assets/Icons/black/Bars";
import { Navbar } from "./Navbar";
import i18n from "@configs/i18n";
import useWindow from "@hooks/useWindow";
import { useEffect, useMemo, useState } from "react";
import { SIDEBAR_MENU } from "./Navbar/menu";
import Image from "next/image";
import Link from "next/link";
import { Gear } from "@assets/Icons/black/Gear";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { useAgencyNavigationContext } from "@contexts/Navigation/Agency";
import { MenuShape } from "./Navbar/menu/type";

type Props = {
  showSidebar: boolean;
  handleToggleSidebar: () => void;
};

export function Sidebar({ handleToggleSidebar, showSidebar }: Props) {
  const { screenType } = useWindow();
  const { agencyAuth } = useAgencyNavigationContext()
  const [indentValue, setIndentValue] = useState<string>();
  const menu = useMemo(() => {
    const system = SIDEBAR_MENU['system']
    return {
      ...SIDEBAR_MENU,
      system: [
          {
          title: i18n("Texts.my_profile"),
          Icon: Gear,
          link: `${publicRoutes.agencies}/${agencyAuth.cnpj}`,
        },
        ...system,
      ] as Array<MenuShape>
    }
  }, [agencyAuth.cnpj]);

  useEffect(() => {
    setIndentValue(
      ["TABLET", "MOBILE"].includes(screenType ?? "") ? "-100vw" : "-15rem"
    );
  }, [screenType]);

  return (
    <aside
      className={`fixed lg:relative z-40 lg:z-0 w-full h-[100vh] lg:h-full lg:w-[320px] bg-white transition-all duration-300`}
      style={{
        marginLeft: !showSidebar ? indentValue : "0",
      }}
    >
      <div className=" pt-4 h-[90vh]">
        <div className="flex justify-between border-b-2 border-secondary pb-4 mb-3 px-4">
          <div className="w-full text-center">
            <Link href="/">
              <Image src={"/imgs/logo-horizontal.png"} alt="Logo" className="w-[8rem] mx-auto" width={300} height={300} />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Bars onClick={handleToggleSidebar} />
          </div>
        </div>
        <div className="h-[82vh] lg:h-full flex flex-col pt-5 px-6 pb-10  overflow-x-hidden overflow-y-auto hidden-scroll transition-all duration-500">
          {Object.entries(menu).map(([key, MENU]) => (
            <Navbar
              key={key}
              sidebarState={showSidebar}
              menu={MENU}
              title={i18n(`Words.${key.toLowerCase()}`)}
              className="mb-6 lg:mb-0 xl:mb-6"
            />))}
        </div>
      </div>
    </aside>
  );
}
