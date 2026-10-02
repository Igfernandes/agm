import { agenciesTranslations } from "./screens/dashboard/agencies";
import { ChargesDashboardTranslations } from "./screens/dashboard/charges";
import { clientsTranslations } from "./screens/dashboard/clients";
import { dispatchersTranslations } from "./screens/dashboard/dispatchers";
import { dashboardFormsTranslations } from "./screens/dashboard/forms";
import { galleriesTranslations } from "./screens/dashboard/galleries";
import { salesTranslations } from "./screens/dashboard/sales";
import { staticsTranslations } from "./screens/dashboard/statics";
import { subscribersTranslations } from "./screens/dashboard/subscribers";
import { ToursTranslations } from "./screens/dashboard/tours";
import { AccessTranslations } from "./screens/public/access";
import { PublicAgenciesTranslations } from "./screens/public/agencies";
import { alterPasswordTranslations } from "./screens/public/alterPassword";
import { CookiesTranslations } from "./screens/public/cookies";
import { PublicFooterTranslations } from "./screens/public/footer";
import { forgotPasswordTranslations } from "./screens/public/forgotPassword";
import { formsTranslations } from "./screens/public/forms";
import { PublicGalleriesTranslations } from "./screens/public/galleries";
import { HomeAboutUsTranslations } from "./screens/public/home/aboutUs";
import { homeAgenciesTranslations } from "./screens/public/home/agencies";
import { HomeFaqTranslations } from "./screens/public/home/faq";
import { HomeGalleryTranslations } from "./screens/public/home/gallery";
import { HomeNewsletterTranslations } from "./screens/public/home/newsletter";
import { HomeToursTranslations } from "./screens/public/home/tours";
import { loginTranslations } from "./screens/public/login";
import { NewsletterTranslations } from "./screens/public/newsletter";
import { PoliticsTranslations } from "./screens/public/politics";
import { SalesTranslations } from "./screens/public/sales";
import { PublicToursTranslations } from "./screens/public/tours";

export const Screens = {
  forgot_password: forgotPasswordTranslations,
  login: loginTranslations,
  alter_password: alterPasswordTranslations,
  forms: {
    ...formsTranslations,
  },
  tours: PublicToursTranslations,
  sales: SalesTranslations,
  confirmations: {
    title: "Confira sua inscrição",
    text: "Insira seu CPF para saber se você já está cadastrado em algum evento.",
  },

  successful: {
    need_go_back_login: "Agora, vá para o login para acessar a plataforma.",
  },
  create_user: {
    title: "Primeiro acesso",
    text: "Para acessar a plataforma, informe como gostaria de ser chamado e crie uma senha.",
  },
  services: {
    modal: {
      title_already_exclude: "Você tem certeza que deseja excluir?",
      text_already_exclude:
        "Ao confirmar, o serviço será excluído e os demais registros relacionados.",
    },
    switch_event: "Escolha um evento",
    selected_form: "Selecione um formulário",
  },

  logout: {
    text: "Você saiu com segurança. A AGM te espera na próxima! 🐾",
  },
  needs_help: "Precisa de ajuda?",
  dashboard: {
    clients: clientsTranslations,
    agencies: agenciesTranslations,
    galleries: galleriesTranslations,
    tours: ToursTranslations,
    sales: salesTranslations,
    statics: staticsTranslations,
    charges: ChargesDashboardTranslations,
    forms: dashboardFormsTranslations,
    subscribers: subscribersTranslations,
    finances: {
      about_name_and_service:
        "Caso não seja dado o nome a cobrança, ela irá herdar o nome do serviço",
      about_period:
        "Defina acima a quantidade de meses referente ao intervalo de cada cobrança. Ex: 1 (Mensal), 3 (Trimestral) e etc.",
      about_privacy_and_services:
        "Ao escolher um serviço, a privacidade será definida por ele*",
      text_already_exclude:
        "Ao continuar, todos os dados da cobrança serão excluídos, e ela não poderá mais ser acessado até que seja recadastrado.",
      title_already_exclude: "Você deseja excluir esta cobrança?",
    },
    dispatchers: dispatchersTranslations,
    services: {
      settings_privacy: "Configure a privacidade do serviço:",
      has_limit_vacancies: "Haverá um limite de vagas?",
      inform_limit_vacancies: "Informe o limite máximo de vagas",
      has_limit_reservation: "Será possível aderir a vagas de reserva?",
      inform_limit_reservation: "Informe o limite máximo de reserva",
      service_image: "Adicione uma imagem ao serviço:",
      text_alert_about_alerts_inscribes:
        "Escreva detalhes avisos para os inscritos",
      inscribes_alert: "Avisos para os inscritos",
      awaiting_inscribe:
        "Aguarde enquanto o cliente estará sendo inscrito e enviado a confirmação",
    },
    events: {
      has_limit_vacancies: "Haverá um limite de vagas?",
      inform_limit_vacancies: "Informe o limite máximo de vagas",
      event_image: "Adicione uma imagem ao evento:",
      text_alert_about_alerts_inscribes:
        "Escreva detalhes avisos para os inscritos",
      inscribes_alert: "Avisos para os inscritos",
      awaiting_inscribe:
        "Aguarde enquanto o cliente estará sendo inscrito e enviado a confirmação",
    },
    schedules: {
      required_users: "É obrigatório escolher um usuário",
    },
    users: {
      create_user_groups: "Criar grupos de usuários",
      invite_users: "Convidar usuários",
      users_groups: "Grupos de Usuários",
      user_group: "Grupo de Usuário",
      group_desative: "Desativar grupo",

      group: {
        text_insert_name: "Insira um nome para o grupo de usuários:",
        text_select_permissions:
          "Selecione as permissões que estarão ativas para este grupo:",
        title_already_active: "Você deseja ativar este grupo de usuários?",
        text_already_active:
          "Ao continuar, todos os usuários deste grupo reativarão o acesso e as suas permissões.",
        title_already_desative: "Você deseja desativar este grupo de usuários?",
        text_already_desative:
          "Ao continuar, todos os usuários deste grupo perderão o acesso, pois suas permissões serão bloqueadas.",
        text_already_exclude:
          "Ao continuar, todos os usuários deste grupo perderão o acesso, pois suas permissões serão bloqueadas.",
        title_already_exclude: "Você deseja excluir este grupo de usuários?",
      },
      user: {
        text_select_group: "Selecione os grupos ao qual o usuário pertencerá:",
        text_fill_information:
          "Preencha as informações abaixo para convidar um novo usuário:",
        text_awaiting_after_delete_desative:
          "Ao continuar, todos os usuários perderão o acesso, pois suas permissões serão bloqueadas.",
        title_already_active: "Você deseja ativar este usuários?",
        text_already_active:
          "Ao continuar, o usuário reativará o acesso e as suas permissões.",
        text_already_desative:
          "Ao continuar, todos os dados dos usuário selecionado será excluído, e eles não poderá mais acessar até que sejam restaurados.",
        title_already_desative: "Você deseja desativar este cliente?",
        text_already_exclude:
          "Ao continuar, todos os dados dos usuário selecionado serão desabilitados, e eles não poderá mais acessar até que seja ativo novamente.",
        title_already_exclude: "Você deseja excluir este cliente?",
      },
      invites: {
        text_already_resend:
          "Ao continuar, o convite enviado anteriormente com o token e as demais informações serão invalidadas.",
        title_already_resend: "Você deseja reenviar o convite ao usuário?",
        text_already_exclude:
          "Ao continuar, o convite será invalidado e os dados do usuário anexados sumiram do sistema.",
        title_already_exclude: "Você deseja excluir este convite?",
        success_title_resend: "Convite reenviado",
        success_text_resend: "Seu convite foi reenviado com sucesso!",
        success_title_delete: "Convite excluído",
        success_text_delete: "Seu convite foi excluído com sucesso!",
      },
    },
    apis: {
      text_fill_information: "Preencha as informações da integração:",
    },
  },
  newsletter: NewsletterTranslations,
  footer: PublicFooterTranslations,
  agencies: PublicAgenciesTranslations,
  galleries: PublicGalleriesTranslations,
  politics: PoliticsTranslations,
  cookies: CookiesTranslations,
  access: AccessTranslations,
  home: {
    tours: HomeToursTranslations,
    search_label: "Busque seu novo destino",
    agencies: homeAgenciesTranslations,
    contact: {
      address_title: "Nosso Endereço",
      address: "São José do Imbassai, Maricá - RJ",
      phone_title: "Fale conosco",
      phone: "+55  (21) 97129-2030",
      email_title: "Nos envie um e-mail",
      email: "contato@agmturismomarica.com.br",
    },
    menu: {
      logo: "logotype AGM",
      about_us: "Sobre Nós",
      partners: "Nossos Parceiros",
    },
    status: {
      tours: "+100 Passeios",
      guides: "+40 Guias",
      modalities: "+6 Modalidades",
      travelers: "+1000 Viajantes",
    },
    about: HomeAboutUsTranslations,
    events: {
      title: "Cronograma e serviços",
      subtitle: "Nossas atrações e atividades",
      not_available: {
        title: "Não há eventos disponíveis",
        text: "No momento não há eventos disponíveis, mas em breve teremos novidades. Fique ligado!",
      },
    },
    gallery: HomeGalleryTranslations,
    support_network: {
      title: "Rede de apoio",
      subtitle: "Instituições que fortalecem nosso trabalho",
    },
    faq: HomeFaqTranslations,
    newsletter: HomeNewsletterTranslations,
    testimonials: [
      {
        title: "Comentário do viajante",
        text: "Adorei participar do passeio por Maricá com a AGM nos jeeps! Foi uma experiência maravilhosa, cheia de belas paisagens e momentos inesquecíveis.",
        author: "Igor Fernandes",
        info: "Morador de Maricá - RJ",
      },
      {
        title: "Comentário do viajante",
        text: "Foi incrível viver essa experiência com a AGM! As atividades foram muito bem organizadas, com momentos divertidos e especiais do início ao fim. Já quero participar novamente!",
        author: "Joyce Pedro",
        info: "Morador de Ouro Preto - MG",
      },
      {
        title: "Comentário do viajante",
        text: "A AGM está de parabéns! Participar das atividades foi maravilhoso, tudo muito bem planejado e cheio de momentos únicos. Recomendo a todos!",
        author: "Jofre Martins",
        info: "Morador de São Gonçalo - RJ",
      },
      {
        title: "Comentário do viajante",
        text: "Uma experiência inesquecível com a AGM! Cada detalhe das atividades foi pensado com carinho, proporcionando diversão, aprendizado e muita energia positiva.",
        author: "Henrique José",
        info: "Morador de Maricá - RJ",
      },
    ],
  },
};
