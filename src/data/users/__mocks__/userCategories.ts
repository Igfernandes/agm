import { ClientCategoriesShape } from "@type/Clients/ClientCategories";

export const MOCK_USER_CATEGORIES = [
  {
    id: 1,
    name: "Cliente",
    position: 1,
    created_at: new Date().toUTCString(),
    updated_at: new Date().toUTCString(),
  },
  {
    id: 2,
    name: "Fornecedor",
    position: 2,
    created_at: new Date().toUTCString(),
    updated_at: new Date().toUTCString(),
  },
  {
    id: 3,
    name: "Parceiro",
    position: 3,
    created_at: new Date().toUTCString(),
    updated_at: new Date().toUTCString(),
  },
] as ClientCategoriesShape[];
