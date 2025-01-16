export interface MessageGridResponse {
  success: boolean;
  data: MessageGridResponseData;
}

export interface MessageGridResponseData {
  messages: MessageResponse[];
  page: number;
  total: number;
}

export interface MessageResponse {
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
  affiliateId: string | undefined;
  status: Status;
  statusId: string;
  userType: MessageType;
  userTypeId: string;
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
  userTypeId: string;
  userType: MessageType;
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

export interface MessageType {
  id: string;
  name: string;
  label: string;
}

export interface Status {
  id: string;
  name: string;
  label: string;
}

export interface MessagePostRequest {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  uf: string;
  pixKey: string;
  password: string;
  affiliateId?: string | null;
  accountType: string;
  status: string;
  balance?: number | null;
}

export interface MessagePutRequest {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  uf: string;
  pixKey: string;
  affiliateId?: string | null;
  accountType: string;
  status: string;
  balance?: number | null;
}

export interface MessagesGetRequest {
  page: number;
  limit: number;
  id?: string;
  cpf?: string;
  email?: string;
  pixKey?: string;
  userType?: string;
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
