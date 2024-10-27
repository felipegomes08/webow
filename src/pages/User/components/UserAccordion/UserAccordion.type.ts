import { UserProps } from 'pages/User/types/User.type';
import { MouseEventHandler } from 'react';

export interface UserAccordionProps {
  userList: UserProps[];
  deleteCallback: MouseEventHandler<HTMLButtonElement> | undefined;
  editCallback: MouseEventHandler<HTMLButtonElement> | undefined;
}
