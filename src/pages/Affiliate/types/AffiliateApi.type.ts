import { UserResponse } from 'pages/User/types/UserApi.type';

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
  code: string;
  userId: string;
  link: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
  active: boolean;
  user: UserResponse;
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
  cpf: string;
  code: string;
  phone: string;
  email: string;
  password: string;
  id?: string | undefined;
  name?: string | null | undefined;
  pixKey?: string | null | undefined;
  link?: string | null | undefined;
}

export interface AffiliatePutRequest {
  cpf: string;
  code: string;
  phone: string;
  email: string;
  password: string;
  id?: string | undefined;
  name?: string | null | undefined;
  pixKey?: string | null | undefined;
  link?: string | null | undefined;
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
