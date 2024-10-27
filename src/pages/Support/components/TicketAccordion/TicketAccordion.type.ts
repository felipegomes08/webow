import { TicketProps } from 'pages/Support/types/Ticket.type';
import { MouseEventHandler } from 'react';

export interface TicketAccordionProps {
  ticketList: TicketProps[];
  deleteCallback: MouseEventHandler<HTMLButtonElement> | undefined;
  editCallback: MouseEventHandler<HTMLButtonElement> | undefined;
}
