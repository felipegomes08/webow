import { MessageSchema } from 'pages/Support/types/Support.type';

export interface MessageFormProps {
  onCreate: (message: MessageSchema) => void;
  loading: boolean;
}
