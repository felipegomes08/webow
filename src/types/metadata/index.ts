export interface Metadata {
  transactionTypes: TransactionType[];
  accountTypes: AccountType[];
  matchResults: MatchResult[];
  transactionStatus: TransactionStatus[];
  userTypes: UserType[];
  userStatus: UserStatus[];
  rouletteValues: RouletteValue[];
}

export interface TransactionType {
  id: string;
  name: string;
  label: string;
}

export interface AccountType {
  id: string;
  name: string;
  label: string;
}

export interface MatchResult {
  id: string;
  name: string;
  label: string;
}

export interface TransactionStatus {
  id: string;
  name: string;
  label: string;
}

export interface UserType {
  id: string;
  name: string;
  label: string;
}

export interface UserStatus {
  id: string;
  name: string;
  label: string;
}

export interface RouletteValue {
  id: string;
  matchResultId: string;
  matchResult: MatchResult;
  label: string;
  value: number;
}

export interface Uf {
  id: number;
  sigla: string;
  nome: string;
  regiao: Regiao;
}

export interface Regiao {
  id: number;
  sigla: string;
  nome: string;
}
