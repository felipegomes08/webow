import { Stack } from '@mui/material';
import CountCard from 'components/CountCard';
import CustomTabs from 'components/Tabs';
import { ListTabsProps } from 'components/Tabs/CustomTabs.type';
import { layoutPadding } from 'theme/globalStyles';
import HomeCard from './components/HomeCard';

const systemCountList = [
  { label: 'Servidores', value: 3 },
  { label: 'GPU', value: 12 },
  { label: 'Requisições', value: 3242 }
];

export const Home = () => {
  const listTabs: ListTabsProps[] = [
    {
      label: 'Evolução',
      value: 'home',
      children: <HomeCard />
    }
  ];
  return (
    <>
      <Stack direction="row" spacing={2} mb={layoutPadding}>
        {systemCountList.map((count) => (
          <CountCard label={count.label} value={count.value} />
        ))}
      </Stack>
      <CustomTabs listTabs={listTabs} mainRoute="/app/home" />
    </>
  );
};
