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
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
    .min(14, 'CPF inválido')
    .transform((cpf) => cpf.replace(/[^\d]/g, '')),
  phone: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Número de telefone inválido')
    .transform((phone) => phone.replace(/[^\d]/g, '')),
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  pixKey: z.string().optional().nullable(),
  password: z
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
    .regex(/[\W_]/, 'A senha deve conter pelo menos um símbolo'),
  code: z.string().min(1, 'O código é obrigatório'),
  link: z.string().optional().nullable()
});

export type AffiliateSchema = z.infer<typeof affiliateSchema>;

export const affiliateUpdateSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
    .min(14, 'CPF inválido')
    .transform((cpf) => cpf.replace(/[^\d]/g, '')),
  phone: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Número de telefone inválido')
    .transform((phone) => phone.replace(/[^\d]/g, '')),
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  pixKey: z.string().optional().nullable(),
  password: z
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
    .regex(/[\W_]/, 'A senha deve conter pelo menos um símbolo'),
  code: z.string().min(1, 'O código é obrigatório'),
  link: z.string().optional().nullable()
});

export type AffiliateUpdateSchema = z.infer<typeof affiliateUpdateSchema>;

export interface AffiliateUpdateResponse {
  id: string | undefined;
  name: string | undefined;
  password: string | undefined;
  cpf: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  pixKey: string | undefined;
  code: string | undefined;
  userId: string | undefined;
  link: string | undefined;
}
