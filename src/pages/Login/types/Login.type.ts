import { UserResponse } from 'pages/User/types/UserApi.type';
import { z } from 'zod';

export const loginSchema = z.object({
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
    .min(14, 'CPF inválido')
    .transform((cpf) => cpf.replace(/[^\d]/g, '')),
  password: z
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
    .regex(/[\W_]/, 'A senha deve conter pelo menos um símbolo')
});

export type LoginSchema = z.infer<typeof loginSchema>;

export interface LoginResponse {
  data: UserResponse;
  message: string;
  success: boolean;
}
