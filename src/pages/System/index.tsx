import { Stack } from '@mui/material';
import CountCard from 'components/CountCard';
import CustomTabs from 'components/Tabs';
import { ListTabsProps } from 'components/Tabs/CustomTabs.type';
import InterfaceCard from 'pages/System/components/InterfaceCard';
import SystemCard from 'pages/System/components/SystemCard';
import { configuracao, configuracaoInterface } from 'pages/System/configuracao';

const systemCountList = [
  { label: 'Servidores', value: 3 },
  { label: 'GPU', value: 12 },
  { label: 'Requisições', value: 3242 }
];

export const System = () => {
  const listTabs: ListTabsProps[] = [
    {
      label: 'Sistema',
      value: 'main',
      children: <SystemCard configuracao={configuracao} />
    },
    {
      label: 'Interface',
      value: 'interface',
      children: <InterfaceCard configuracao={configuracaoInterface} />
    }
  ];
  return (
    <>
      <Stack direction="row" spacing={2} mb={2}>
        {systemCountList.map((count) => (
          <CountCard label={count.label} value={count.value} />
        ))}
      </Stack>
      <CustomTabs listTabs={listTabs} mainRoute="/system" />
    </>
  );
};
