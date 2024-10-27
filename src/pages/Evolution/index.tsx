import { Stack } from '@mui/material';
import CountCard from 'components/CountCard';
import CustomTabs from 'components/Tabs';
import { ListTabsProps } from 'components/Tabs/CustomTabs.type';
import EvolutionCard from 'pages/Evolution/components/EvolutionCard';

const systemCountList = [
  { label: 'Servidores', value: 3 },
  { label: 'GPU', value: 12 },
  { label: 'Requisições', value: 3242 }
];

export const Evolution = () => {
  const listTabs: ListTabsProps[] = [
    {
      label: 'Evolução',
      value: 'evolution',
      children: <EvolutionCard />
    }
  ];
  return (
    <>
      <Stack direction="row" spacing={2} mb={2}>
        {systemCountList.map((count) => (
          <CountCard label={count.label} value={count.value} />
        ))}
      </Stack>
      <CustomTabs listTabs={listTabs} mainRoute="/evolution" />
    </>
  );
};
