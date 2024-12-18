import { UserGridResponseData } from 'pages/User/types/UserApi.type';
import { MouseEventHandler } from 'react';

export interface UserAccordionProps {
  userGridResponseData: UserGridResponseData | undefined;
  deleteCallback: MouseEventHandler<HTMLButtonElement> | undefined;
  editCallback: MouseEventHandler<HTMLButtonElement> | undefined;
  isLoading: boolean;
  page: number;
  limit: number;
}
