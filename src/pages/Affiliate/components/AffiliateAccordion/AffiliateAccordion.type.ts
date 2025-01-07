import { AffiliateGridResponseData } from 'pages/Affiliate/types/AffiliateApi.type';
import { MouseEventHandler } from 'react';

export interface AffiliateAccordionProps {
  affiliateGridResponseData: AffiliateGridResponseData | undefined;
  deleteCallback: (id: string) => void;
  editCallback: MouseEventHandler<HTMLButtonElement> | undefined;
  isLoading: boolean;
  page: number;
  limit: number;
}
