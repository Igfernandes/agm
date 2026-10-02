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
  access: AccessTranslations,
  confirmations: {
    title: "Consulta tu inscripción",
    text: "Ingresa tu CPF para saber si ya estás registrado en algún evento.",
  },

  successful: {
    need_go_back_login:
      "Ahora, ve al inicio de sesión para acceder a la plataforma.",
  },
  create_user: {
    title: "Primer acceso",
    text: "Para acceder a la plataforma, indica cómo te gustaría ser llamado y crea una contraseña.",
  },
  services: {
    modal: {
      title_already_exclude: "¿Estás seguro de que deseas eliminar?",
      text_already_exclude:
        "Al confirmar, el servicio será eliminado y los demás registros relacionados.",
    },
    switch_event: "Elige un evento",
    selected_form: "Selecciona un formulario",
  },

  needs_help: "¿Necesitas ayuda?",
  logout: {
    text: "Has cerrado sesión de forma segura. AGM te espera la próxima! 🐾",
  },
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
        "Si no se asigna un nombre al cobro, heredará el nombre del servicio",
      about_period:
        "Define arriba la cantidad de meses referente al intervalo de cada cobro. Ej: 1 (Mensual), 3 (Trimestral), etc.",
      about_privacy_and_services:
        "Al elegir un servicio, la privacidad será definida por él*",
      text_already_exclude:
        "Al continuar, todos los datos del cobro serán eliminados y no podrá accederse nuevamente hasta que sea registrado otra vez.",
      title_already_exclude: "¿Deseas eliminar este cobro?",
    },
    dispatchers: dispatchersTranslations,
    services: {
      settings_privacy: "Configura la privacidad del servicio:",
      has_limit_vacancies: "¿Habrá un límite de cupos?",
      inform_limit_vacancies: "Indica el límite máximo de cupos",
      has_limit_reservation: "¿Será posible adherirse a cupos de reserva?",
      inform_limit_reservation: "Indica el límite máximo de reservas",
      service_image: "Agrega una imagen al servicio:",
      text_alert_about_alerts_inscribes:
        "Escribe detalles y avisos para los inscritos",
      inscribes_alert: "Avisos para los inscritos",
      awaiting_inscribe:
        "Espera mientras el cliente es inscrito y se envía la confirmación",
    },
    events: {
      has_limit_vacancies: "¿Habrá un límite de cupos?",
      inform_limit_vacancies: "Indica el límite máximo de cupos",
      event_image: "Agrega una imagen al evento:",
      text_alert_about_alerts_inscribes:
        "Escribe detalles y avisos para los inscritos",
      inscribes_alert: "Avisos para los inscritos",
      awaiting_inscribe:
        "Espera mientras el cliente es inscrito y se envía la confirmación",
    },
    schedules: {
      required_users: "Es obligatorio seleccionar un usuario",
    },
    users: {
      create_user_groups: "Crear grupos de usuarios",
      invite_users: "Invitar usuarios",
      users_groups: "Grupos de usuarios",
      user_group: "Grupo de usuario",
      group_desative: "Desactivar grupo",

      group: {
        text_insert_name: "Ingresa un nombre para el grupo de usuarios:",
        text_select_permissions:
          "Selecciona los permisos que estarán activos para este grupo:",
        title_already_active: "¿Deseas activar este grupo de usuarios?",
        text_already_active:
          "Al continuar, todos los usuarios de este grupo recuperarán el acceso y sus permisos.",
        title_already_desative: "¿Deseas desactivar este grupo de usuarios?",
        text_already_desative:
          "Al continuar, todos los usuarios de este grupo perderán el acceso, ya que sus permisos serán bloqueados.",
        text_already_exclude:
          "Al continuar, todos los usuarios de este grupo perderán el acceso, ya que sus permisos serán bloqueados.",
        title_already_exclude: "¿Deseas eliminar este grupo de usuarios?",
      },
      user: {
        text_select_group:
          "Selecciona los grupos a los que pertenecerá el usuario:",
        text_fill_information:
          "Completa la información a continuación para invitar a un nuevo usuario:",
        text_awaiting_after_delete_desative:
          "Al continuar, todos los usuarios perderán el acceso, ya que sus permisos serán bloqueados.",
        title_already_active: "¿Deseas activar este usuario?",
        text_already_active:
          "Al continuar, el usuario recuperará el acceso y sus permisos.",
        text_already_desative:
          "Al continuar, todos los datos del usuario seleccionado serán eliminados y no podrá acceder hasta que sea restaurado.",
        title_already_desative: "¿Deseas desactivar este cliente?",
        text_already_exclude:
          "Al continuar, todos los datos del usuario seleccionado serán deshabilitados y no podrá acceder hasta que sea activado nuevamente.",
        title_already_exclude: "¿Deseas eliminar este cliente?",
      },
      invites: {
        text_already_resend:
          "Al continuar, el convite enviado anteriormente con el token y demás informaciones será invalidado.",
        title_already_resend: "¿Deseas reenviar la invitación al usuario?",
        text_already_exclude:
          "Al continuar, la invitación será invalidada y los datos del usuario vinculados desaparecerán del sistema.",
        title_already_exclude: "¿Deseas eliminar esta invitación?",
        success_title_resend: "Invitación reenviada",
        success_text_resend: "¡Tu invitación fue reenviada con éxito!",
        success_title_delete: "Invitación eliminada",
        success_text_delete: "¡Tu invitación fue eliminada con éxito!",
      },
    },
    apis: {
      text_fill_information: "Completa la información de la integración:",
    },
  },
  newsletter: NewsletterTranslations,
  footer: PublicFooterTranslations,
  agencies: PublicAgenciesTranslations,
  galleries: PublicGalleriesTranslations,
  politics: PoliticsTranslations,
  cookies: CookiesTranslations,
  home: {
    tours: HomeToursTranslations,
    search_label: "Busca tu nuevo destino",
    agencies: homeAgenciesTranslations,
    contact: {
      address_title: "Nuestra dirección",
      address: "São José do Imbassai, Maricá - RJ",
      phone_title: "Contáctanos",
      phone: "+55 (21) 9 9507-1974",
      email_title: "Envíanos un correo",
      email: "contato@agmturismomarica.com.br",
    },
    menu: {
      logo: "logotipo AGM",
      about_us: "Sobre nosotros",
      partners: "Nuestros socios",
    },
    status: {
      tours: "+100 Excursiones",
      guides: "+40 Guías",
      modalities: "+6 Modalidades",
      travelers: "+1000 Viajeros",
    },
    about: HomeAboutUsTranslations,
    events: {
      title: "Cronograma y servicios",
      subtitle: "Nuestras atracciones y actividades",
      not_available: {
        title: "No hay eventos disponibles",
        text: "Por el momento no hay eventos disponibles, pero pronto tendremos novedades. ¡Mantente atento!",
      },
    },
    gallery: HomeGalleryTranslations,
    support_network: {
      title: "Red de apoyo",
      subtitle: "Instituciones que fortalecen nuestro trabajo",
    },
    faq: HomeFaqTranslations,
    newsletter: HomeNewsletterTranslations,
    testimonials: [
      {
        title: "Comentario del viajero",
        text: "¡Me encantó participar del paseo por Maricá con la AGM en jeeps! Fue una experiencia maravillosa, llena de paisajes increíbles y momentos inolvidables.",
        author: "Igor Fernandes",
        info: "Residente de Maricá - RJ",
      },
      {
        title: "Comentario del viajero",
        text: "¡Fue increíble vivir esta experiencia con la AGM! Las actividades estuvieron muy bien organizadas, con momentos divertidos y especiales de principio a fin. ¡Quiero repetir!",
        author: "Joyce Pedro",
        info: "Residente de Ouro Preto - MG",
      },
      {
        title: "Comentario del viajero",
        text: "AGM está de felicitaciones! Participar en las actividades fue maravilloso, todo muy bien planificado y lleno de momentos únicos. ¡Lo recomiendo a todos!",
        author: "Jofre Martins",
        info: "Residente de São Gonçalo - RJ",
      },
      {
        title: "Comentario del viajero",
        text: "¡Una experiencia inolvidable con la AGM! Cada detalle de las actividades fue pensado con cariño, brindando diversión, aprendizaje y mucha energía positiva.",
        author: "Henrique José",
        info: "Residente de Maricá - RJ",
      },
    ],
  },
};
