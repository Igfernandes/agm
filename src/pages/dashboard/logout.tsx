import { Header } from "@components/Public/External/Header";
import { Footer } from "@components/Public/Footer";
import i18n from "@configs/i18n";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { handleLogout } from "@helpers/handlers";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();
  handleLogout();

  useEffect(() => {
    router.push(publicRoutes.login);
  }, []);

  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header />
      <div className="container max-w-[1100px] mx-auto my-12">
        <div className="not-found-dog mb-8">
          <Image
            src={"/imgs/logotype.png"}
            width={250}
            height={200}
            alt="Logotype da AGM"
            className="mx-auto"
          />
        </div>
        <div className="text text-center max-w-[428px] mx-auto mb-6">
          <p className="text-xl font-bold">
            {i18n("Screens.logout.text")}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );;
}
