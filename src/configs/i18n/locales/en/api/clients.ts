export const ClientsApiTranslations = {
  categories: {
    success: {
      post: "Categories have been updated successfully!",
      patch: "The client(s) category has been updated successfully",
    },
    invalid: {
      id: "The informed category does not exist or is invalid",
      client_id: "The informed client does not exist or is invalid",
      name: "The category name is invalid",
      name_contains: "The category name is invalid",
      description_contains: "The category description is invalid",
      created_at: "The category creation date is invalid",
      updated_at: "The category update date is invalid",
      categories: "The informed categories are missing or invalid",
      linked_category:
        "Unlink the categories from clients before deleting them",
    },
  },
  subscribes: {
    success: {
      post: "AGM thanks you for subscribing and will keep you updated on all news",
    },
    invalid: {
      name: "Your name is required",
      phone: "Your phone number is required",
    },
  },
  dispatchers: {
    invalid: {
      client_id: "The informed client is invalid for sending messages",
      status: "The dispatch status is invalid",
      dispatcher: "The dispatch is invalid",
      message_id: "The dispatch content is invalid",
    },
  },
  fields: {
    success: {
      post: "The field has been created successfully!",
    },
    invalid: {
      name_max_length_100:
        "The field name exceeds the maximum length of 100 characters",
      component: "The field type is invalid or unavailable for this operation",
      type_max_length_50:
        "The field type exceeds the maximum length of 50 characters",
      scope: "The field cannot be assigned to this group",
      is_required: "The 'Required' field was filled incorrectly",
      is_sensitive: "The 'Sensitive' field was filled incorrectly",
      group_id: "The informed group is invalid or deactivated",
      client_id: "The informed client does not exist in the system",
      id: "The field identifier is missing. Reload and try again.",
    },
  },
  success: {
    imports: "Clients have been imported successfully",
    post: "The client has been created successfully!",
    put: "The client has been updated successfully!",
    delete: "The client has been deleted successfully!",
    patch: "The client(s) category has been updated successfully!",
    profile: "The information has been updated successfully!",
    patch_password: "The password has been changed successfully!",
  },
  invalid: {
    id: "The client cannot be found",
    data: "The system encountered a problem. Please try again later",
    path: "The system encountered a problem. Please try again later",
    in_ids: "The informed clients have some irregularities",
    client: "The informed client does not exist or is invalid",
    clients: "The informed clients do not exist or are invalid",
    category: "The client's category is missing or invalid",
    name: "The client's name is invalid",
    name_max_length_100:
      "The client name exceeds the maximum length of 100 characters",
    avatar: "The client's avatar URL is invalid",
    phone: "The client's phone is invalid or already in use",
    phone_max_length_35:
      "The client phone exceeds the maximum length of 35 characters",
    birthdate: "The client's birth date is invalid",
    email: "The client's email is invalid",
    email_max_length_255:
      "The client email exceeds the maximum length of 255 characters",
    created_at: "The client's creation date is invalid",
    updated_at: "The client's update date is invalid",
    not_found_category: "The hidden category is invalid or unavailable",
  },
};
