import { UserGridResponseData } from 'pages/User/types/UserApi.type';

export interface UserAccordionProps {
  userGridResponseData: UserGridResponseData | undefined;
  deleteCallback: (id: string) => void;
  editCallback: (id: string) => void;
  editLoading: boolean;
  isLoading: boolean;
  page: number;
  limit: number;
}
