import { AffiliateUpdateResponse } from 'pages/Affiliate/types/Affiliate.type';
import { AffiliateGridResponseData } from 'pages/Affiliate/types/AffiliateApi.type';

export interface AffiliateAccordionProps {
  affiliateGridResponseData: AffiliateGridResponseData | undefined;
  editCallback: (affiliate: AffiliateUpdateResponse) => void;
  editLoading: boolean;
  isLoading: boolean;
  page: number;
  limit: number;
}
