import { DashboardContainer } from "@components/Private/Container";
import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import i18n from "@configs/i18n";
import { TourPageProps } from "@components/Private/Tours/type";
import { TourProfile } from "@components/Private/Tours/Profile";
import { getTours } from "@services/Tours/Get/SSR";
import { ToursTabs } from "@components/Private/Tours/Tabs";
import { TourPeriods } from "@components/Private/Tours/Periods";
import { TourRules } from "@components/Private/Tours/Rules";
import { TourAgencies } from "@components/Private/Tours/Agencies";
import { TourGallery } from "@components/Private/Tours/Gallery";
import { TourLanding } from "@components/Private/Tours/Landing";
import { TourBoarding } from "@components/Private/Tours/Boarding";
import TourSales from "@components/Private/Tours/Sales/TourSales";

export default function TourUpdate({ targetTour }: TourPageProps) {
  return (
    <DashboardContainer>
      <ToursTabs tabs={{
        INFORMATION: <TourProfile tour={targetTour} />,
        LANDING: <TourLanding tour={targetTour} />,
        BOARDING: <TourBoarding tour={targetTour} />,
        PERIODS: <TourPeriods tour={targetTour} />,
        RULES: <TourRules tour={targetTour} />,
        GALLERY: <TourGallery tour={targetTour} />,
        AGENCIES: <TourAgencies tour={targetTour} />,
        SALES: <TourSales tour={targetTour} />
      }} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<TourPageProps> = async ({
  req,
  params,
}) => {
  try {
    const tokenNavigation = req.cookies["token_navigation"] ?? "";
    const { id } = params as { id: string }; // Tipando o params
    const { rows } = await getTours(tokenNavigation, { id: +id });

    if (!Array.isArray(rows) || rows.length == 0) {
      return {
        redirect: {
          destination: `${privateRoutes.tours}?alert=${i18n(
            "errors.system.not_found_user"
          )}`, // Redireciona para a página principal
          permanent: true, // Define como redirecionamento temporário (status 307)
        },
      };
    }

    return {
      props: {
        targetTour: rows[0], // Passa o ID para o componente
      },
    };
  } catch (error) {
    console.log(error)
    return {
      redirect: {
        destination: `${privateRoutes.tours}?alert=${i18n("errors.system.not_found_user")}`, // Redireciona para a página principal
        permanent: true, // Define como redirecionamento temporário (status 307)
      },
    };
  }
}
