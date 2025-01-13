import { UserUpdateSchema } from 'pages/User/types/User.type';
import { UserResponse } from 'pages/User/types/UserApi.type';

export interface UserUpdateFormProps {
  onSave: (id: string, user: UserUpdateSchema) => void;
  userUpdate: UserResponse | undefined;
  loading: boolean;
}
