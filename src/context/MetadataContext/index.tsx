import { AuthContext } from 'context/AuthContext';
import { createContext, useContext, useEffect, useState } from 'react';
import { getMetadata } from 'services/metadataService';
import {
  AccountType,
  MatchResult,
  RouletteValue,
  TransactionStatus,
  TransactionType,
  UserStatus,
  UserType
} from 'types/metadata';
import { MetadataProviderProps, MetadataType } from './MetadataContext.type';

const MetadataContext = createContext({} as MetadataType);

const MetadataProvider = ({ children }: MetadataProviderProps) => {
  const { authenticated } = useContext(AuthContext);
  const [transactionTypes, setTransactionTypes] = useState<TransactionType[]>(
    []
  );
  const [accountTypes, setAccountTypes] = useState<AccountType[]>([]);
  const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
  const [transactionStatus, setTransactionStatus] = useState<
    TransactionStatus[]
  >([]);
  const [userTypes, setUserTypes] = useState<UserType[]>([]);
  const [userStatus, setUserStatus] = useState<UserStatus[]>([]);
  const [rouletteValues, setRouletteValues] = useState<RouletteValue[]>([]);

  useEffect(() => {
    const fetchMetadata = async () => {
      const metadata = await getMetadata();
      setTransactionTypes(metadata.transactionTypes);
      setAccountTypes(metadata.accountTypes);
      setMatchResults(metadata.matchResults);
      setTransactionStatus(metadata.transactionStatus);
      setUserTypes(metadata.userTypes);
      setUserStatus(metadata.userStatus);
      setRouletteValues(metadata.rouletteValues);
    };

    fetchMetadata();
  }, [authenticated]);

  return (
    <MetadataContext.Provider
      value={{
        transactionTypes,
        accountTypes,
        matchResults,
        transactionStatus,
        userTypes,
        userStatus,
        rouletteValues
      }}
    >
      {children}
    </MetadataContext.Provider>
  );
};

export { MetadataContext, MetadataProvider };
