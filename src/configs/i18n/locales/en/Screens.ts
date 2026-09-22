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
    title: "Check your registration",
    text: "Enter your CPF to check whether you are already registered for any event.",
  },
  access: AccessTranslations,
  successful: {
    need_go_back_login: "Now, go to the login page to access the platform.",
  },
  create_user: {
    title: "First access",
    text: "To access the platform, tell us how you would like to be called and create a password.",
  },
  services: {
    modal: {
      title_already_exclude: "Are you sure you want to delete?",
      text_already_exclude:
        "Once confirmed, the service and all related records will be deleted.",
    },
    switch_event: "Choose an event",
    selected_form: "Select a form",
  },

  needs_help: "Need help?",
  logout: {
    text: "You have logged out safely. Matrilhas awaits you next time! 🐾",
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
        "If no name is given to the charge, it will inherit the service name",
      about_period:
        "Define above the number of months related to the interval of each charge. E.g.: 1 (Monthly), 3 (Quarterly), etc.",
      about_privacy_and_services:
        "When choosing a service, privacy will be defined by it*",
      text_already_exclude:
        "By continuing, all charge data will be deleted, and it will no longer be accessible until it is re-registered.",
      title_already_exclude: "Do you want to delete this charge?",
    },
    dispatchers: dispatchersTranslations,
    services: {
      settings_privacy: "Configure the service privacy:",
      has_limit_vacancies: "Will there be a vacancy limit?",
      inform_limit_vacancies: "Enter the maximum vacancy limit",
      has_limit_reservation: "Will it be possible to join waiting list spots?",
      inform_limit_reservation: "Enter the maximum reservation limit",
      service_image: "Add an image to the service:",
      text_alert_about_alerts_inscribes:
        "Write detailed notices for registrants",
      inscribes_alert: "Notices for registrants",
      awaiting_inscribe:
        "Please wait while the client is being registered and the confirmation is sent",
    },
    events: {
      has_limit_vacancies: "Will there be a vacancy limit?",
      inform_limit_vacancies: "Enter the maximum vacancy limit",
      event_image: "Add an image to the event:",
      text_alert_about_alerts_inscribes:
        "Write detailed notices for registrants",
      inscribes_alert: "Notices for registrants",
      awaiting_inscribe:
        "Please wait while the client is being registered and the confirmation is sent",
    },
    schedules: {
      required_users: "It is mandatory to select a user",
    },
    users: {
      create_user_groups: "Create user groups",
      invite_users: "Invite users",
      users_groups: "User groups",
      user_group: "User group",
      group_desative: "Deactivate group",

      group: {
        text_insert_name: "Enter a name for the user group:",
        text_select_permissions:
          "Select the permissions that will be active for this group:",
        title_already_active: "Do you want to activate this user group?",
        text_already_active:
          "By continuing, all users in this group will regain access and permissions.",
        title_already_desative: "Do you want to deactivate this user group?",
        text_already_desative:
          "By continuing, all users in this group will lose access as their permissions will be blocked.",
        text_already_exclude:
          "By continuing, all users in this group will lose access as their permissions will be blocked.",
        title_already_exclude: "Do you want to delete this user group?",
      },
      user: {
        text_select_group: "Select the groups to which the user will belong:",
        text_fill_information:
          "Fill in the information below to invite a new user:",
        text_awaiting_after_delete_desative:
          "By continuing, all users will lose access as their permissions will be blocked.",
        title_already_active: "Do you want to activate this user?",
        text_already_active:
          "By continuing, the user will regain access and permissions.",
        text_already_desative:
          "By continuing, all data of the selected user will be deleted, and they will no longer be able to access until restored.",
        title_already_desative: "Do you want to deactivate this client?",
        text_already_exclude:
          "By continuing, all data of the selected user will be disabled, and they will no longer be able to access until reactivated.",
        title_already_exclude: "Do you want to delete this client?",
      },
      invites: {
        text_already_resend:
          "By continuing, the previously sent invitation with its token and related information will be invalidated.",
        title_already_resend:
          "Do you want to resend the invitation to the user?",
        text_already_exclude:
          "By continuing, the invitation will be invalidated and the attached user data will be removed from the system.",
        title_already_exclude: "Do you want to delete this invitation?",
        success_title_resend: "Invitation resent",
        success_text_resend: "Your invitation has been resent successfully!",
        success_title_delete: "Invitation deleted",
        success_text_delete: "Your invitation has been deleted successfully!",
      },
    },
    apis: {
      text_fill_information: "Fill in the integration information:",
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
    search_label: "Search for your next destination",
    agencies: homeAgenciesTranslations,
    contact: {
      address_title: "Our address",
      address: "São José do Imbassai, Maricá - RJ",
      phone_title: "Contact us",
      phone: "+55 (21) 99507-1974",
      email_title: "Send us an email",
      email: "contato@matrilhas.com.br",
    },
    menu: {
      logo: "AGM logotype",
      about_us: "About us",
      partners: "Our partners",
    },
    status: {
      tours: "+100 Tours",
      guides: "+40 Guides",
      modalities: "+6 Modalities",
      travelers: "+1000 Travelers",
    },
    about: HomeAboutUsTranslations,
    events: {
      title: "Schedule and services",
      subtitle: "Our attractions and activities",
      not_available: {
        title: "No events available",
        text: "There are no events available at the moment, but we will have news soon. Stay tuned!",
      },
    },
    gallery: HomeGalleryTranslations,
    support_network: {
      title: "Support network",
      subtitle: "Institutions that strengthen our work",
    },
    faq: HomeFaqTranslations,
    newsletter: HomeNewsletterTranslations,
    testimonials: [
      {
        title: "Traveler comment",
        text: "I loved joining the tour through Maricá with AGM in the jeeps! It was a wonderful experience, full of beautiful landscapes and unforgettable moments.",
        author: "Igor Fernandes",
        info: "Resident of Maricá - RJ",
      },
      {
        title: "Traveler comment",
        text: "It was incredible to live this experience with AGM! The activities were very well organized, with fun and special moments from start to finish. I already want to join again!",
        author: "Joyce Pedro",
        info: "Resident of Ouro Preto - MG",
      },
      {
        title: "Traveler comment",
        text: "Matrilhas deserves congratulations! Participating in the activities was wonderful, everything very well planned and full of unique moments. I recommend it to everyone!",
        author: "Jofre Martins",
        info: "Resident of São Gonçalo - RJ",
      },
      {
        title: "Traveler comment",
        text: "An unforgettable experience with AGM! Every detail of the activities was thoughtfully planned, providing fun, learning, and lots of positive energy.",
        author: "Henrique José",
        info: "Resident of Maricá - RJ",
      },
    ],
  },
};