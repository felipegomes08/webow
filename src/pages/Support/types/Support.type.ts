import { z } from 'zod';

export interface MessageProps {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  chavePix: string;
  senha: string;
}

export const messageSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(4, 'O nome é muito curto'),
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
  uf: z.string().min(1, 'UF é obrigatório'),
  pixKey: z.string().min(1, 'A chave PIX é obrigatória'),
  balance: z
    .union([z.string(), z.number()])
    .transform((val) => (typeof val === 'string' ? parseFloat(val) : val))
    .optional(),
  affiliateId: z.string().optional().nullable(),
  accountType: z.string().min(1, 'O tipo de conta é obrigatório'),
  messageType: z.string().min(1, 'O tipo de usuário é obrigatório'),
  status: z.string().min(1, 'O status é obrigatório')
});

export type MessageSchema = z.infer<typeof messageSchema>;

export const messageUpdateSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(4, 'O nome é muito curto'),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
    .min(14, 'CPF inválido')
    .transform((cpf) => cpf.replace(/[^\d]/g, '')),
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  phone: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Número de telefone inválido')
    .transform((phone) => phone.replace(/[^\d]/g, '')),
  uf: z.string().min(1, 'UF é obrigatório'),
  pixKey: z.string().min(1, 'A chave PIX é obrigatória'),
  balance: z
    .union([z.string(), z.number()])
    .transform((val) => (typeof val === 'string' ? parseFloat(val) : val))
    .optional(),
  affiliateId: z.string().optional().nullable(),
  accountType: z.string().min(1, 'O tipo de conta é obrigatório'),
  messageType: z.string().min(1, 'O tipo de usuário é obrigatório'),
  status: z.string().min(1, 'O status é obrigatório')
});

export type MessageUpdateSchema = z.infer<typeof messageUpdateSchema>;
