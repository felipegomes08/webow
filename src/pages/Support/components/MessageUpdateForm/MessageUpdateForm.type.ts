import { MessageUpdateSchema } from 'pages/Support/types/Support.type';
import { MessageResponse } from 'pages/Support/types/SupportApi.type';

export interface MessageUpdateFormProps {
  onSave: (id: string, message: MessageUpdateSchema) => void;
  messageUpdate: MessageResponse | undefined;
  loading: boolean;
}
