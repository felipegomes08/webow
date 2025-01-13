export interface UserGridResponse {
  success: boolean;
  data: UserGridResponseData;
}

export interface UserGridResponseData {
  users: UserResponse[];
  page: number;
  total: number;
}

export interface UserResponse {
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
  userType: UserType;
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
  userType: UserType;
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

export interface UserType {
  id: string;
  name: string;
  label: string;
}

export interface Status {
  id: string;
  name: string;
  label: string;
}

export interface UserPostRequest {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  uf: string;
  pixKey: string;
  password: string;
  affiliateId?: string | null;
  accountType: string;
  userType: string;
  status: string;
  balance?: number | null;
}

export interface UserPutRequest {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  uf: string;
  pixKey: string;
  affiliateId?: string | null;
  accountType: string;
  userType: string;
  status: string;
  balance?: number | null;
}

export interface UsersGetRequest {
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
