import { TicketUpdateSchema } from 'pages/Support/types/Support.type';
import { TicketResponse } from 'pages/Support/types/SupportApi.type';

export interface TicketUpdateFormProps {
  onSave: (id: string, message: TicketUpdateSchema) => void;
  ticketUpdate: TicketResponse | undefined;
  loading: boolean;
}
