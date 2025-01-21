import { TicketSchema } from 'pages/Support/types/Support.type';

export interface TicketFormProps {
  onCreate: (message: TicketSchema) => void;
  loading: boolean;
}
