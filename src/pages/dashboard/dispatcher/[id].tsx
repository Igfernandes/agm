import { DispatcherPreview } from "@components/Private/Dispatchers/Update";
import { MessagesDispatcherSinglePageProps } from "@components/Private/Dispatchers/Update/type";
import { DashboardContainer } from "@components/Private/Container";
import { getMessagesDispatcherRequest } from "@services/Dispatchers/Get/SSR";
import { GetServerSideProps } from "next";

export default function MessagesDispatcher({
  targetMessagesDispatcher,
}: MessagesDispatcherSinglePageProps) {
  return (
    <DashboardContainer>
      <DispatcherPreview dispatcher={targetMessagesDispatcher} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<
  MessagesDispatcherSinglePageProps
> = async ({ params, req }) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { id } = params as { id: string };
  
  const { rows: dispatchers } = await getMessagesDispatcherRequest(tokenNavigation, {
    id: parseInt(id),
  });

  if (!Array.isArray(dispatchers) || dispatchers.length === 0) {
    return {
      redirect: {
        destination: `/404`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      targetMessagesDispatcher: dispatchers[0]
    },
  };
};
