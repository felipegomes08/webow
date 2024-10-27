import { MouseEventHandler, ReactNode } from 'react';

export interface GridAccordionProps {
  expanded: boolean;
  index: number;
  icon: ReactNode;
  titleContent: ReactNode;
  detailsContent: ReactNode;
  finishCallback?: MouseEventHandler<HTMLButtonElement> | undefined;
  closeCallback?: MouseEventHandler<HTMLButtonElement> | undefined;
  deleteCallback?: MouseEventHandler<HTMLButtonElement> | undefined;
  editCallback?: MouseEventHandler<HTMLButtonElement> | undefined;
  expandCallback?:
    | ((event: React.SyntheticEvent, expanded: boolean) => void)
    | undefined;
  expandIcon?: boolean;
}
