import {
  AccountType,
  MatchResult,
  RouletteValue,
  TransactionStatus,
  TransactionType,
  UserStatus,
  UserType
} from 'types/metadata';

export type MetadataType = {
  transactionTypes: TransactionType[];
  accountTypes: AccountType[];
  matchResults: MatchResult[];
  transactionStatus: TransactionStatus[];
  userTypes: UserType[];
  userStatus: UserStatus[];
  rouletteValues: RouletteValue[];
};

export type MetadataProviderProps = {
  children: React.ReactElement;
};
