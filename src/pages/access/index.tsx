import { GetServerSideProps } from "next";
import { getCSRF } from "@services/Authentications/CSRF/SSR";
import { LoginPageProps } from "@components/Public/Login/types";
import { Header } from "@components/Public/External/Header";
import { Footer } from "@components/Public/External/Footer";
import { AccessContent } from "@components/Public/Access/Index";
import { TourBanners } from "@components/Public/Access/TourBanners";
import Image from "next/image";
import { handleRememberMe } from "../../server/handleRememberMe";

export default function Access({ csrf }: LoginPageProps) {
  return (
    <>
      <Header />
      <div className="">
        <div className="absolute top-0 left-0 w-full h-full rounded-md z-[0]">
          <Image src={"/imgs/backgrounds/marica-background.jpg"} alt="background" fill
            className="h-full w-full object-cover rounded-md" />
        </div>
        <div className="container h-[63vh]  flex items-center mx-auto my-6">
          <div className="row flex items-center shadow  relative  justify-between w-[80%] mx-auto py-8 px-6 rounded-md">
            <div className="bg-rose-800 opacity-70 absolute top-0 left-0 w-full h-full rounded-md z-[0]"></div>

            <div className="relative z-10 w-full h-full md:w-[45%] px-2 mx-auto">
              <AccessContent csrf={csrf} />
            </div>
            <div className="hidden md:block h-full md:w-[55%] px-2 mx-auto">
              <TourBanners />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export const getServerSideProps: GetServerSideProps<LoginPageProps> = async ({
  req,
  res,
}) => {
  const csrf = await getCSRF();



  const referenceToken = req.cookies["remember_referenceToken"] ?? "";

  if (referenceToken)
    return handleRememberMe({ referenceToken, csrf, req, res });

  return {
    props: {
      csrf: csrf,
    },
  };
};
