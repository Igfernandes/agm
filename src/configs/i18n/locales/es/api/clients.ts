export const ClientsApiTranslations = {
  categories: {
    success: {
      post: "¡Las categorías se actualizaron con éxito!",
      patch: "¡La categoría del(los) cliente(s) se modificó con éxito!",
    },
    invalid: {
      id: "La categoría proporcionada no existe o es inválida",
      client_id: "El cliente proporcionado no existe o es inválido",
      name: "El nombre de la categoría proporcionada es inválido",
      name_contains: "El nombre de la categoría proporcionada es inválido",
      description_contains: "La descripción de la categoría proporcionada es inválida",
      created_at: "La fecha de creación de la categoría es inválida",
      updated_at: "La fecha de actualización de la categoría es inválida",
      categories: "Las categorías proporcionadas están ausentes o son inválidas",
      linked_category:
        "Desvincule las categorías de los clientes antes de eliminarlas",
    },
  },
  subscribes: {
    success: {
      post: "¡AGM agradece su inscripción y lo mantendrá informado sobre todas las novedades!",
    },
    invalid: {
      name: "Es obligatorio completar su nombre",
      phone: "Es obligatorio completar su teléfono",
    },
  },
  dispatchers: {
    invalid: {
      client_id:
        "El cliente proporcionado es inválido para el envío de mensajes",
      status: "El estado del envío es inválido",
      dispatcher: "El envío es inválido",
      message_id: "El contenido del envío es inválido",
    },
  },
  fields: {
    success: {
      post: "¡El campo se creó con éxito!",
    },
    invalid: {
      name_max_length_100:
        "El campo contiene un nombre que supera el límite máximo de 100 caracteres.",
      component:
        "El tipo de campo proporcionado es inválido o no está disponible para esta operación.",
      type_max_length_50:
        "El campo contiene un tipo que supera el límite máximo de 50 caracteres.",
      scope: "El campo creado no puede ser asignado a este grupo",
      is_required: "El campo 'Es obligatorio' fue completado incorrectamente",
      is_sensitive: "El campo 'Es sensible' fue completado incorrectamente",
      group_id: "El grupo proporcionado es inválido o está desactivado",
      client_id: "El cliente proporcionado no existe en el sistema",
      id: "El campo tiene un identificador ausente. Recargue e intente nuevamente.",
    },
  },
  success: {
    imports: "¡Los clientes se importaron con éxito!",
    post: "¡El cliente se creó con éxito!",
    put: "¡El cliente se actualizó con éxito!",
    delete: "¡El cliente se eliminó con éxito!",
    patch: "¡La categoría del(los) cliente(s) se actualizó con éxito!",
    profile: "¡La información se actualizó con éxito!",
    patch_password: "¡La contraseña se cambió con éxito!",
  },
  invalid: {
    id: "El cliente no se pudo encontrar",
    data: "El sistema encontró un problema. Intente nuevamente más tarde",
    path: "El sistema encontró un problema. Intente nuevamente más tarde",
    in_ids: "Los clientes proporcionados presentan alguna irregularidad",
    client: "El cliente proporcionado no existe o es inválido",
    clients: "Los clientes proporcionados no existen o son inválidos",
    category: "La categoría del cliente proporcionada está vacía o es inválida",
    name: "El nombre proporcionado del cliente es inválido",
    name_max_length_100:
      "El cliente contiene un nombre que supera el límite máximo de 100 caracteres.",
    avatar: "El avatar del cliente contiene una URL inválida",
    phone: "El teléfono proporcionado del cliente está en uso o es inválido",
    phone_max_length_35:
      "El cliente contiene un teléfono que supera el límite máximo de 35 caracteres.",
    birthdate: "La fecha de nacimiento proporcionada del cliente es inválida",
    email: "El correo electrónico proporcionado del cliente es inválido",
    email_max_length_255:
      "El cliente contiene un correo electrónico que supera el límite máximo de 255 caracteres.",
    created_at: "La fecha de creación proporcionada del cliente es inválida",
    updated_at: "La fecha de actualización proporcionada del cliente es inválida",
    not_found_category: "La categoría oculta es inválida o no está disponible",
  },
};
