import { AffiliateSchema } from 'pages/Affiliate/types/Affiliate.type';

export interface AffiliateFormProps {
  onCreate: (affiliate: AffiliateSchema) => void;
  loading: boolean;
}
