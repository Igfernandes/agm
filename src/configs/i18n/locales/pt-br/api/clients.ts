export const ClientsApiTranslations = {
  categories: {
    success: {
      post: "As categorias foram atualizadas com sucesso!",
      patch: "A categoria do(s) cliente(s) foi alterada com sucesso",
    },
    invalid: {
      id: "A categoria informado não existe ou está inválido",
      client_id: "O cliente informado não existe ou está inválido",
      name: "O nome da categoria informada está inválido",
      name_contains: "O nome da categoria informada está inválido",
      description_contains: "A descrição da categoria informada está inválida",
      created_at: "A data de criação da categoria está inválida",
      updated_at: "A data de atualização da categoria está inválida",
      categories: "As categories informadas estão ausentes ou inválidas",
      linked_category:
        "Desvincule as categorias aos clientes antes de excluir-las",
    },
  },
  subscribes: {
    success: {
      post: "A AGM agradece a sua inscrição e manterá você informado sobre todas as novidades",
    },
    invalid: {
      name: "É obrigatório preencher o seu nome",
      phone: "É obrigatório preencher o seu telefone",
    },
  },
  dispatchers: {
    invalid: {
      client_id:
        "O cliente informado encontra-se inválido para o envio de mensagens",
      status: "O status do envio encontra-se inválido",
      dispatcher: "O envio encontra-se inválido",
      message_id: "O conteúdo do envio encontra-se inválido",
    },
  },
  fields: {
    success: {
      post: "O campo foi criado com sucesso!",
    },
    invalid: {
      name_max_length_100:
        "O campo contém nome com o limite acima do máximo de 100 caracteres.",
      component:
        "O tipo de campo informado encontra-se inválido ou indisponível para essa operação.",
      type_max_length_50:
        "O campo contém type com o limite acima do máximo de 50 caracteres.",
      scope: "O campo criado não pode ser atribuído a esse grupo",
      is_required: "O campo de 'É obrigatório', foi preenchido incorretamente",
      is_sensitive: "O campo de 'É sensível', foi preenchido incorretamente",
      group_id: "O grupo informado encontra-se inválido ou desativado",
      client_id: "O cliente informado encontra-se inexistente no sistema",
      id: "O campo encontra-se com o identificador ausente. Recarregue e tente novamente.",
    },
  },
  success: {
    imports: "Os clientes foram importados com sucesso",
    post: "O cliente foi criado com sucesso!",
    put: "O cliente foi atualizado com sucesso!",
    delete: "O cliente foi excluído com sucesso!",
    patch: "A categoria do(s) cliente(s) foi atualizada(os) com sucesso!",
    profile: "As informações foram atualizadas com sucesso!",
    patch_password: "A senha foi alterada com sucesso!",
  },
  invalid: {
    id: "O cliente não pode ser encontrado",
    data: "O sistema encontrou um problema. Tente novamente mais tarde",
    path: "O sistema encontrou um problema. Tente novamente mais tarde",
    in_ids: "Os clientes informados encontram-se com alguma irregularidade",
    client: "O cliente informado encontra-se inexistente ou inválido",
    clients: "Os clientes informados encontram-se inexistentes ou inválidos",
    category: "A categoria do cliente informada encontra-se vazia ou inválida",
    name: "O nome informado do cliente encontra-se inválido",
    name_max_length_100:
      "O cliente contém nome com o limite acima do máximo de 100 caracteres.",
    avatar: "O avatar do cliente contém uma url inválida",
    phone: "O telefone informado do cliente encontra-se utilizado ou inválido",
    phone_max_length_35:
      "O cliente contém telefone com o limite acima do máximo de 35 caracteres.",
    birthdate: "A data de nascimento informada do cliente encontra-se inválido",
    email: "O e-mail informado do cliente encontra-se inválido",
    email_max_length_255:
      "O cliente contém e-mail com o limite acima do máximo de 255 caracteres.",
    created_at: "A data de criação informada do cliente encontra-se inválido",
    updated_at:
      "A data de atualização informada do cliente encontra-se inválido",
    not_found_category: "A categoria escondida está inválida ou indisponível",
  },
};
