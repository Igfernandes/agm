import { InternalAxiosRequestConfig } from "axios";
import { getCookie } from "cookies-next";

export function AuthenticationsInterceptor(config: InternalAxiosRequestConfig) {
  // Captura o IP do usuário (Aqui, pode ser obtido através de uma API ou de alguma variável que tenha o IP)
  const ip = "192.168.1.5"; // Substitua isso com a lógica para capturar o IP real, se necessário

  // Adiciona um token Bearer ao cabeçalho da requisição
  const token_navigation = getCookie("token_navigation"); // Substitua com o token real
  const token_access = getCookie("token_access"); // Substitua com o token real

  if (!config.headers) return config;

  // Adiciona os headers com as informações necessárias
  config.headers["Authorization"] = `Bearer ${
    token_navigation ?? token_access
  }`;
  config.headers["X-User-IP"] = ip;

  return config;
}
