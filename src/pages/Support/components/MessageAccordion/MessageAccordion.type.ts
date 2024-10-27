import { MessageProps } from 'pages/Support/types/Message.type';
import { MouseEventHandler } from 'react';

export interface MessageAccordionProps {
  messageList: MessageProps[];
  deleteCallback: MouseEventHandler<HTMLButtonElement> | undefined;
  editCallback: MouseEventHandler<HTMLButtonElement> | undefined;
}
