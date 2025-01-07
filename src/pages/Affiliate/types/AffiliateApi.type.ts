export interface AffiliateGridResponse {
  success: boolean;
  data: AffiliateGridResponseData;
}

export interface AffiliateGridResponseData {
  affiliates: AffiliateResponse[];
  page: number;
  total: number;
}

export interface AffiliateResponse {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  pixKey: string;
  password: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
  uf: string;
  accessToken: string;
  refreshToken: string;
  accountType: AccountType;
  accountTypeId: string;
  affiliateId: string | null;
  status: Status;
  statusId: string;
  affiliateType: AffiliateType;
  affiliateTypeId: string;
}

export interface Affiliate {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
  uf: string;
  pixKey: string;
  password: string;
  affiliateId: string;
  affiliate: Affiliate;
  accountTypeId: string;
  accountType: AccountType;
  affiliateTypeId: string;
  affiliateType: AffiliateType;
  statusId: string;
  status: Status;
  balance: number;
  accessToken: string;
  refreshToken: string;
  createdAt: string;
  updatedAt: string;
}

export interface Affiliate {}

export interface AccountType {
  id: string;
  name: string;
  label: string;
}

export interface AffiliateType {
  id: string;
  name: string;
  label: string;
}

export interface Status {
  id: string;
  name: string;
  label: string;
}

export interface AffiliatePostRequest {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  pixKey: string;
  password: string;
  code: string;
  link: string;
}

export interface AffiliatePutRequest {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  uf: string;
  pixKey: string;
  password: string;
  affiliateId?: string | null;
  accountType: string;
  affiliateType: string;
  status: string;
  balance?: number | null;
}

export interface AffiliatesGetRequest {
  page: number;
  limit: number;
  id?: string;
  cpf?: string;
  email?: string;
  pixKey?: string;
  affiliateType?: string;
  accountType?: string;
  status?: string;
  affiliateCode?: string;
  createdAt?: {
    lte?: string;
    lt?: string;
    gt?: string;
    gte?: string;
  };
  balance?: {
    lte?: number;
    lt?: number;
    gt?: number;
    gte?: number;
  };
}
