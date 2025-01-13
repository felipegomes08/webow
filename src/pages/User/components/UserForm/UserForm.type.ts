import { UserSchema } from 'pages/User/types/User.type';

export interface UserFormProps {
  onCreate: (user: UserSchema) => void;
  loading: boolean;
}
