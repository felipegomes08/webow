import {
  AffiliateUpdateResponse,
  AffiliateUpdateSchema
} from 'pages/Affiliate/types/Affiliate.type';

export interface AffiliateUpdateFormProps {
  onSave: (id: string, affiliate: AffiliateUpdateSchema) => void;
  affiliateUpdate: AffiliateUpdateResponse | undefined;
  loading: boolean;
}
