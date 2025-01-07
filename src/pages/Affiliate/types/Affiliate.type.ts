import { z } from 'zod';

export interface AffiliateProps {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  chavePix: string;
  senha: string;
}

export const affiliateSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
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
    .regex(/[\W_]/, 'A senha deve conter pelo menos um símbolo'),
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  phone: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Número de telefone inválido')
    .transform((phone) => phone.replace(/[^\d]/g, '')),
  pixKey: z.string().min(1, 'A chave PIX é obrigatória'),
  code: z.string().min(1, 'O código é obrigatório'),
  link: z.string().min(1, 'O link é obrigatório')
});

export type AffiliateSchema = z.infer<typeof affiliateSchema>;
