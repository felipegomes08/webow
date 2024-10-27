import { MarketingAffiliateProps } from 'pages/Marketing/types/MarketingAffiliate.type';
import { MouseEventHandler } from 'react';

export interface MarketingAffiliateAccordionProps {
  marketingAffiliateList: MarketingAffiliateProps[];
  deleteCallback: MouseEventHandler<HTMLButtonElement> | undefined;
  editCallback: MouseEventHandler<HTMLButtonElement> | undefined;
}
