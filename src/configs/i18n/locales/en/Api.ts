export const Api = {
  exports: {
    invalid: {
      in_ids:
        "The selected data is corrupted or the system is having trouble processing it.",
      type: "The export type is required but was not provided correctly.",
      entity:
        "The type of data to be exported is incorrect or has issues in its records.",
    },
    success: {
      post: "The export was completed successfully",
    },
    service_problem:
      "There was a problem while trying to create or retrieve the file. Check if the file has already been created in the file history or try again.",
  },
  mailer: {
    invalid: {
      email:
        "The system was unable to notify the client because their email is missing from their account.",
    },
  },
  unauthorized:
    "The user has been disconnected or does not have permission to continue this action",
  default: {
    not_auth:
      "The user has been disconnected or does not have permission to continue this action",
    internal_error:
      "A severe error occurred in the application. Please contact support.",
    error: "We're looking into the issue. Please try again later.",
  },
  invalid: {
    email: "The email is nonexistent or invalid",
    recaptcha: "The page has outdated resources. Reload and try again.",
    csrf: "The page has outdated or missing resources. Reload and try again.",
  },
  auth: {
    success: {
      post: "Please wait. You'll be redirected soon!",
    },
    invalid: {
      password: "The password is in an invalid format or missing",
      rememberMe:
        "The 'remember me' feature is having issues. Reload and try again.",
      recaptcha: "The page has outdated resources. Reload and try again.",
      credentials: "The provided credentials are invalid",
    },
  },
  remember: {
    success: {
      post: "Please wait. You'll be redirected soon!",
    },
    invalid: {
      token: "Automatic login failed. Please log in manually.",
    },
  },
  subscribe: {
    success: {
      post: "You are now always connected with us!",
    },
  },
  clients: {
    subscribes: {
      success: {
        post: "AGM thanks you for your subscription and will keep you informed about all news",
      },
      invalid: {
        name: "Name is required",
        phone: "Phone is required",
      },
    },
    categories: {
      success: {
        post: "Categories updated successfully!",
      },
      invalid: {
        id: "The specified category does not exist or is invalid",
        client_id: "The specified client does not exist or is invalid",
        name: "The provided category name is invalid",
        name_contains: "The provided category name is invalid",
        description: "The provided category description is invalid",
        created_at: "The category creation date is invalid",
        updated_at: "The category update date is invalid",
        categories: "The provided categories are missing or invalid",
        linked_category: "Unlink categories from clients before deleting them",
      },
    },
    dispatchers: {
      invalid: {
        client_id: "The specified client is invalid for sending messages",
        status: "The send status is invalid",
        dispatcher: "The dispatcher is invalid",
        message_id: "The dispatch content is invalid",
      },
    },
    services: {
      success: {
        post: "Client(s) successfully subscribed!",
      },
      isConfirm: {
        success: "Successfully confirmed!",
      },
    },
    fields: {
      success: {
        post: "Field created successfully!",
      },
      invalid: {
        name_max_length_100:
          "The field name exceeds the maximum limit of 100 characters.",
        component:
          "The specified field type is invalid or unavailable for this operation.",
        type_max_length_50:
          "The field type exceeds the maximum limit of 50 characters.",
        scope: "The created field cannot be assigned to this group",
        is_required: "The 'is required' field was filled out incorrectly",
        is_sensitive: "The 'is sensitive' field was filled out incorrectly",
        group_id: "The specified group is invalid or disabled",
        client_id: "The specified client does not exist in the system",
        id: "The field identifier is missing. Reload and try again.",
      },
    },
    success: {
      post: "Client created successfully!",
      put: "Client updated successfully!",
      delete: "Client deleted successfully!",
      patch: "Client(s) category updated successfully!",
    },
    invalid: {
      id: "Client could not be found",
      data: "The system encountered an issue. Please try again later",
      path: "The system encountered an issue. Please try again later",
      in_ids: "One or more specified clients have irregularities",
      client: "The specified client does not exist or is invalid",
      clients: "The specified clients do not exist or are invalid",
      category: "The specified client category is invalid",
      name: "The provided client name is invalid",
      name_max_length_100:
        "The client name exceeds the maximum limit of 100 characters.",
      avatar: "The client's avatar URL is invalid",
      phone: "The specified client phone is invalid",
      phone_max_length_35:
        "The client phone exceeds the maximum limit of 35 characters.",
      birthdate: "The specified client birthdate is invalid",
      email: "The specified client email is invalid",
      email_max_length_255:
        "The client email exceeds the maximum limit of 255 characters.",
      created_at: "The specified client creation date is invalid",
      updated_at: "The specified client update date is invalid",
      not_found_category: "The hidden category is invalid or unavailable",
    },
  },
  custom_forms: {
    fills: {
      success: {
        delete: "Record deleted successfully!",
        post: "Filled form deleted successfully!",
      },
    },
    services: {
      success: {
        inscribe: "The client was successfully registered for the event!",
      },
    },
    success: {
      post: "Form created successfully!",
      put: "Form updated successfully!",
      delete: "Form deleted successfully!",
    },
    invalid: {
      id: "The specified form does not exist or is invalid",
      in_ids: "One or more specified forms have irregularities",
      name: "The provided form name is invalid",
      name_contains: "The provided form name is invalid",
      components: "Form fields are invalid",
      not_stock: "There are no vacancies available or the form is temporarily disabled",
      slug: "The form route slug is invalid",
      slug_contains: "The form route slug is invalid",
      type: "The form type is invalid",
      description: "The provided form description is invalid",
      description_contains: "The provided form description is invalid",
      status: "The form status is invalid",
      created_at: "The form creation date is invalid",
      updated_at: "The form update date is invalid",
      not_found: "Form not found",
      client: "Invalid operation. Record is not linked to a client.",
      color_mark:
        "The selected color does not match the hexadecimal format allowed by the system",
      thanks_message:
        "The information entered in the thank-you message field is invalid",
    },
  },
  dispatchers: {
    success: {
      post: "Dispatcher created successfully!",
      put: "Dispatcher updated successfully!",
      delete: "Dispatcher deleted successfully!",
    },
    invalid: {
      id: "The specified dispatcher does not exist or is invalid",
      in_ids: "One or more specified dispatchers have irregularities",
      title: "The specified dispatcher title is invalid or missing",
      status: "The dispatcher status is invalid",
      period: "The dispatch period must be 'Daily', 'Weekly' or 'Monthly'",
      content: "The dispatch content is empty or invalid",
      platforms: "The chosen dispatch platform is invalid",
      service_id: "The service is invalid or does not exist",
      charge_id: "The charge is invalid or does not exist",
      scheduled_day: "The scheduled dispatch day is invalid",
      started_at: "The dispatch start date is invalid",
      not_found_content: "Could not find the dispatch content",
      not_found_clients: "Could not find the clients for dispatch.",
      not_found: "Dispatcher not found",
    },
  },
  fields: {
    success: {
      post: "Field created successfully!",
      delete: "Field deleted successfully!",
    },
    invalid: {
      name: "The provided field name is invalid",
      name_max_length_100:
        "The field name exceeds the maximum limit of 100 characters.",
      component:
        "The specified field type is invalid or unavailable for this operation.",
      type: "The form type is invalid",
      type_max_length_50:
        "The field type exceeds the maximum limit of 50 characters.",
      scope: "The created field cannot be assigned to this group",
      is_required: "The 'is required' field was filled out incorrectly",
      is_sensitive: "The 'is sensitive' field was filled out incorrectly",
      group_id: "The specified group is invalid or disabled",
      relation_id: "The related client does not exist or is invalid",
      value: "The field value is invalid",
      not_found: "The specified field does not exist or has just been deleted",
      not_found_group: "The specified field group is invalid or not registered",
    },
  },
  charges: {
    clients: {
      success: {
        post: "Charge assigned to clients successfully!",
      },
    },
    extracts: {
      not_found: "Statement not found",
    },
    checkout: {
      success: {
        post: "Please wait to complete your purchase!",
      },
      invalid: {
        name: "The provided name is invalid",
        name_max_length_100:
          "The name exceeds the maximum limit of 100 characters.",
        phone: "The specified client phone is invalid",
        phone_max_length_35:
          "The phone exceeds the maximum limit of 35 characters.",
        amounts: "The selected amount is invalid",
        email: "The email is nonexistent or invalid",
        email_max_length_255:
          "The email exceeds the maximum limit of 255 characters.",
        birthdate: "The provided birthdate is invalid",
        product: "The specified product is invalid or does not exist",
      },
    },
    operations_failures: {
      success: {
        post: "The financial operation was resolved successfully",
      },
      not_found: "Operation not found",
      invalid: {
        operation_failed: "The operation cannot be found or resolved",
        not_found: "Operation not found",
      },
    },
    success: {
      post: "Charge created successfully!",
      delete: "Charge deleted successfully!",
      put: "Charge updated successfully!",
    },
    again_submit: "The form contains outdated information. Resubmit.",
    invalid: {
      id: "The specified charge does not exist or is invalid",
      in_ids: "One or more specified charges have irregularities",
      title: "The provided charge title is invalid or missing",
      description: "The charge description is invalid",
      status: "The charge status is invalid",
      charge_id: "The charge is invalid or does not exist",
      service_id: "The service is invalid or does not exist",
      payment_id: "The payment does not exist or is invalid",
      price: "The charge price is invalid",
      privacy: "Privacy must be 'Public' or 'Private'",
      type: "The charge type is invalid",
      amount: "The charge amount is invalid",
      period: "The charge period is invalid",
      promotional_price: "The promotional price is invalid",
      reference: "The charge is invalid or does not exist",
      clients: "The specified clients do not exist or are invalid",
      not_available: "The selected charge does not exist or is unavailable",
      created_at: "The charge creation date is invalid",
      updated_at: "The charge update date is invalid",
      not_found: "Charge not found",
      not_found_client: "The chosen client was not found",
      name_or_service: "A name or service must be provided for the charge",
      recaptcha: "The page has outdated resources. Reload and try again.",
    },
  },
  integrations: {
    success: {
      post: "Integration updated successfully!",
    },
    invalid: {
      not_found: "Integration not found",
      not_found_bank: "NNo valid bank is configured in the system",
    },
  },
  invites: {
    success: {
      post: "Invite sent successfully!",
      resend: "Invite resent successfully!",
      delete: "Invite deleted successfully!",
    },
    invalid: {
      name: "The provided name is invalid",
      name_max_length_100:
        "The invite name exceeds the maximum limit of 100 characters.",
      email: "The email is nonexistent or invalid",
      already_exists_email: "The provided email is already in use",
      already_exists_phone: "The provided phone is already in use",
      invalid_group: "The specified group is invalid or missing",
      email_max_length_255:
        "The email exceeds the maximum limit of 255 characters.",
      phone: "The provided phone is invalid",
      not_found: "Invite not found",
    },
  },
  notifications: {
    invalid: {
      phone: "The specified client phone is invalid",
      phone_max_length_35:
        "The phone exceeds the maximum limit of 35 characters.",
      type: "The notification type is invalid",
      data: "An error occurred while processing your registration",
    },
  },
  schedules: {
    success: {
      post: "Schedule created successfully!",
      put: "Schedule updated successfully!",
      delete: "Schedule deleted successfully!",
    },
    invalid: {
      title: "The specified schedule title is invalid or missing",
      color: "The provided color format is invalid or missing",
      describe: "The description is empty or invalid",
      date: "The date is invalid or empty",
      end_date: "The end date is invalid or empty",
      linked: "Linked users were not specified",
      not_found: "Schedule not found",
    },
  },
  services: {
    success: {
      post: "Service created successfully!",
      put: "Service updated successfully!",
      delete: "Service deleted successfully!",
      inscribe: "Client successfully enrolled!",
    },
    invalid: {
      name: "The provided service name is invalid",
      type: "The service type is invalid",
      description: "The provided service description is invalid",
      privacy: "Privacy must be 'Public' or 'Private'",
      stock: "The number of available items is invalid",
      reservations: "The reservation value is invalid",
      address: "The provided address format is invalid",
      photo: "The provided service image is invalid",
      photo_max_size_1024: "The service image exceeds the allowed size of 1 MB",
      photo_mime_type:
        "The service image has an invalid extension (.png, .jpeg, .jpg)",
      realized_at: "The provided realization date format is invalid",
      expired_at: "The expiration date format is invalid",
      not_found: "Service not found",
    },
  },
  users: {
    groups: {
      success: {
        post: "Group created successfully!",
        put: "Group updated successfully!",
        status: "Group status changed successfully!",
        delete: "Group deleted successfully!",
        patch_password: "Password changed successfully!",
        patch_status: "Status changed successfully!",
      },
      invalid: {
        name: "The provided group name is invalid",
        name_max_length_100:
          "The group name exceeds the maximum limit of 100 characters.",
        name_unique: "The group name is already in use",
        description: "The provided group description is invalid",
        permissions: "Provided permissions are invalid",
        not_found: "Group not found",
        not_found_permission: "Some provided permissions are invalid",
      },
    },
    success: {
      post: "Your account has been created successfully!",
      put: "Profile updated successfully!",
      delete: "User deleted successfully!",
      recover_password: "Please check your email and follow the steps",
      alter_password: "Your password has been changed successfully",
      patch_status: "Status changed successfully!",
    },
    invalid: {
      name: "The provided group name is invalid",
      name_max_length_100:
        "The group name exceeds the maximum limit of 100 characters.",
      name_unique: "The group name is already in use",
      cpf: "The CPF is empty or incorrectly formatted",
      birthdate: "The specified user birthdate is invalid",
      keyword: "The user's keyword is empty or invalid",
      password: "The password is in an invalid format or missing",
      operation: "The token is invalid or expired",
      already_exists_cpf: "The provided CPF is already in use",
      not_found_invite: "The invite link you accessed is expired or invalid",
      incorrect_password_formatted:
        "The provided password is invalid or doesn't meet the standards",
      not_found_permission: "Some provided permissions are invalid",
      already_exists_phone: "The provided phone is already in use",
      already_exists_email: "The provided email is already in use",
      email_max_length_255:
        "The email exceeds the maximum limit of 255 characters.",
      phone_max_length_35:
        "The phone exceeds the maximum limit of 35 characters.",
      not_found: "User not found",
      not_found_token: "The token is invalid or missing",
    },
  },
};
