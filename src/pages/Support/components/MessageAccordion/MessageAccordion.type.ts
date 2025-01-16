import { MessageGridResponseData } from 'pages/Support/types/SupportApi.type';

export interface MessageAccordionProps {
  messageGridResponseData: MessageGridResponseData | undefined;
  deleteCallback: (id: string) => void;
  editCallback: (id: string) => void;
  editLoading: boolean;
  isLoading: boolean;
  page: number;
  limit: number;
}
