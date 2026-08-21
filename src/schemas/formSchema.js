import { z } from "zod"

export const formSchema = z.object({

  firstName: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres.")
    .max(50, "Máximo de 50 caracteres.")
    .regex(
      /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
      "O nome deve conter apenas letras."
    ),

  lastName: z
    .string()
    .min(2, "O sobrenome deve ter pelo menos 2 caracteres.")
    .max(50, "Máximo de 50 caracteres.")
    .regex(
      /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
      "O sobrenome deve conter apenas letras."
    ),

  email: z
    .string()
    .min(1, "O e-mail é obrigatório.")
    .email("Informe um endereço de e-mail válido.")
    .toLowerCase(),

  contact: z
    .string()
    .min(1, "O número de contato é obrigatório.")
    .regex(
      /^\(\d{2}\)\s?\d{4,5}-\d{4}$/,
      "Formato inválido. Ex: (11) 98765-4321"
    ),

  gender: z.enum(
    ["male", "female", "other"],
    {
      error: "Selecione uma opção.",
    }
  ),

  genres: z
    .array(z.string())
    .min(1, "Selecione pelo menos um gênero favorito."),

  url: z
    .string()
    .min(1, "O link é obrigatório.")
    .url("Informe uma URL válida."),

  choice: z
    .string()
    .min(1, "Selecione uma opção."),

  about: z
    .string()
    .min(10, "Digite pelo menos 10 caracteres.")
    .max(500, "Máximo de 500 caracteres."),

})