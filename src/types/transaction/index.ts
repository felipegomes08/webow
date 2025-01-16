export interface TransactionGridRequest {
  /**
   * Buscar Por Valor Maior que
   */
  'amount.gt'?: number;
  /**
   * Buscar Por Valor Maior ou igual que
   */
  'amount.gte'?: number;
  /**
   * Buscar Por Valor Menor que
   */
  'amount.lt'?: number;
  /**
   * Buscar Por Valor Menor ou igual que
   */
  'amount.lte'?: number;
  /**
   * Buscar Por Data Maior que
   */
  'createdAt.gt'?: string;
  /**
   * Buscar Por Data Maior ou Igual que
   */
  'createdAt.gte'?: string;
  /**
   * Buscar Por Data Menor que
   */
  'createdAt.lt'?: string;
  /**
   * Buscar Por Data Menor ou Igual
   */
  'createdAt.lte'?: string;
  /**
   * ID da Transação
   */
  id?: string;
  /**
   * Limite por Página
   */
  limit?: string;
  /**
   * Páginação
   */
  page?: string;
  /**
   * Chave PIX da Transação
   */
  pixKey?: string;
  /**
   * Status da Transação
   */
  status?: string;
  /**
   * Tipo da Transação
   */
  type?: string;
  /**
   * Tipo de Conta
   */
  'user.accountType'?: string;
  /**
   * Código de Affiliado
   */
  'user.affiliateCode'?: string;
  /**
   * CPF do Usuário
   */
  'user.cpf'?: string;
  /**
   * Email do Usuário
   */
  'user.email'?: string;
  /**
   * ID do Usuário
   */
  'user.id'?: string;
  /**
   * Chave PIX do Usuário
   */
  'user.pixKey'?: string;
  /**
   * Status do Usuário
   */
  'user.status'?: string;
  /**
   * Tipo de Usuário
   */
  'user.userType'?: string;
  [property: string]: any;
}

export type TransactionPostBodyRequest = {
  /**
   * Valor
   */
  amount: number;
  /**
   * ID do usuário
   */
  userId: string;
  [property: string]: any;
};

export type TransactionPostPathRequest = {
  /**
   * Tipo de Transação
   */
  type: string;
  [property: string]: any;
};

export type TransactionPutRequest = {
  /**
   * Valor Transacionado
   */
  amount?: number;
  /**
   * Chave PIX
   */
  pixKey?: string;
  /**
   * ID do Status da Transação
   */
  statusId?: string;
  /**
   * ID do Tipo de Transação
   */
  typeId?: string;
  /**
   * ID do Usuário
   */
  userId?: string;
  [property: string]: any;
};
