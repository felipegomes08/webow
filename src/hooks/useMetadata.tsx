import { MetadataContext } from 'context/MetadataContext';
import { useContext } from 'react';

const useMetadata = () => {
  const {
    accountTypes,
    matchResults,
    rouletteValues,
    transactionStatus,
    transactionTypes,
    userStatus,
    userTypes
  } = useContext(MetadataContext);

  return {
    accountTypes,
    matchResults,
    rouletteValues,
    transactionStatus,
    transactionTypes,
    userStatus,
    userTypes
  };
};

export default useMetadata;
