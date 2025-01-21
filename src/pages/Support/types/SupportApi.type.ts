import {
  AccountType,
  UserResponse,
  UserType
} from 'pages/User/types/UserApi.type';
import { UserStatus } from 'types/metadata';

export interface MessageGridResponse {
  success: boolean;
  data: TicketGridResponseData;
}

export interface TicketGridResponseData {
  tickets: TicketResponse[];
  page: number;
  total: number;
}

export interface TicketResponse {
  /**
   * Data de Fechamento
   */
  closedAt: string;
  /**
   * Data de Criação
   */
  createdAt: string;
  /**
   * Deletado?
   */
  deleted: boolean;
  /**
   * ID
   */
  id: string;
  /**
   * Assunto do Ticket
   */
  subject: string;
  /**
   * Suporte
   */
  support: Support;
  /**
   * ID do Suporte
   */
  supportId: string;
  /**
   * Jogador/Afiliado
   */
  user: UserResponse;
  /**
   * ID do Jogador/Afiliado
   */
  userId: string;
  [property: string]: any;
}

/**
 * Suporte
 */
export type Support = {
  /**
   * Account Type
   */
  accountType: AccountType;
  /**
   * Account Type ID
   */
  accountTypeId: string;
  /**
   * Affiliate
   */
  affiliate?: null | UserResponse;
  /**
   * Affiliate ID
   */
  affiliateId?: null | string;
  /**
   * Balance
   */
  balance: number;
  /**
   * CPF
   */
  cpf: string;
  /**
   * Created At
   */
  createdAt: string;
  /**
   * e-mail
   */
  email: string;
  /**
   * ID
   */
  id: string;
  /**
   * Name
   */
  name: string;
  /**
   * Phone
   */
  phone: string;
  /**
   * Pix Key
   */
  pixKey: string;
  status: UserStatus;
  /**
   * Status ID
   */
  statusId: string;
  /**
   * UF
   */
  uf: string;
  /**
   * Updated At
   */
  updatedAt: string;
  /**
   * User Type
   */
  userType: UserType;
  /**
   * User Type ID
   */
  userTypeId: string;
  [property: string]: any;
};

export interface TicketPostRequest {
  userId: string;
  subject: string;
}

export interface TicketPutRequest {
  /**
   * Deletado?
   */
  deleted?: boolean | null | undefined;
  /**
   * Assunto
   */
  subject?: string | null | undefined;
  /**
   * ID do Suporte
   */
  supportId: string;
  /**
   * ID do Usuário
   */
  userId?: string | null | undefined;
  [property: string]: any;
}

export interface TicketsGetRequest {
  /**
   * Data de Criação maior Que
   */
  'createdAt.gt'?: string;
  /**
   * Data de Criação Maior ou Igual Que
   */
  'createdAt.gte'?: string;
  /**
   * Data de Criação Menor Que
   */
  'createdAt.lt'?: string;
  /**
   * Data de Criação Menor ou Igual Que
   */
  'createdAt.lte'?: string;
  /**
   * Deletado?
   */
  deleted?: boolean;
  /**
   * ID do Ticket
   */
  id?: string;
  /**
   * Limite por Página
   */
  limit?: number;
  /**
   * Página
   */
  page?: number;
  /**
   * Assunto
   */
  subject?: string;
  /**
   * ID do Suporte
   */
  supportId?: string;
  /**
   * ID do Usuário
   */
  userId?: string;
  [property: string]: any;
}
