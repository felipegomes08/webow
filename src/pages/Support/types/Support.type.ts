import { z } from 'zod';

export interface MessageProps {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  chavePix: string;
  senha: string;
}

export const ticketSchema = z.object({
  subject: z.string(),
  userId: z.string()
});

export type TicketSchema = z.infer<typeof ticketSchema>;

export const ticketUpdateSchema = z.object({
  id: z.string().optional().nullable(),
  deleted: z.union([z.boolean(), z.null()]).optional(),
  subject: z.union([z.null(), z.string()]).optional(),
  supportId: z.string(),
  userId: z.union([z.null(), z.string()]).optional()
});

export type TicketUpdateSchema = z.infer<typeof ticketUpdateSchema>;
