import { MarketingUpSellProps } from 'pages/Marketing/types/MarketingUpSelll.type';
import { MouseEventHandler } from 'react';

export interface MarketingUpSellAccordionProps {
  marketingUpSellList: MarketingUpSellProps[];
  deleteCallback: MouseEventHandler<HTMLButtonElement> | undefined;
  editCallback: MouseEventHandler<HTMLButtonElement> | undefined;
}
