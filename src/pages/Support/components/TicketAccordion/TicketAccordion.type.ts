import { TicketGridResponseData } from 'pages/Support/types/SupportApi.type';

export interface TicketAccordionProps {
  ticketGridResponseData: TicketGridResponseData | undefined;
  deleteCallback: (id: string) => void;
  editCallback: (id: string) => void;
  editLoading: boolean;
  isLoading: boolean;
  page: number;
  limit: number;
}
