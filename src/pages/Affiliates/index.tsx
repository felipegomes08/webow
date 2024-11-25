import { Stack } from '@mui/material';
import CountCard from 'components/CountCard';
import CustomTabs from 'components/Tabs';
import { ListTabsProps } from 'components/Tabs/CustomTabs.type';
import AffiliateAccordion from 'pages/Affiliates/components/AffiliateAccordion';
import { AffiliateProps } from 'pages/Affiliates/types/Affiliate.type';
import { layoutPadding } from 'theme/globalStyles';

const affiliates: AffiliateProps[] = [
  {
    nome: 'Amanda da Costa',
    link: 'http/www.monkmaster.com/id-32394/',
    codigo: 'MARIA20',
    afiliados: 432,
    cpa: 432,
    cpm: 523,
    receita: 4532,
    cpf: '123.123.123-54',
    email: 'teste@gmail.com',
    telefone: '34 998457845',
    chavePix: '123.123.123-54',
    senha: '12312321'
  },
  {
    nome: 'Lucas Gomes',
    link: 'http/www.monkmaster.com/id-32124/',
    codigo: 'LUCAS20',
    afiliados: 432,
    cpa: 432,
    cpm: 523,
    receita: 4532,
    cpf: '123.123.123-54',
    email: 'teste@gmail.com',
    telefone: '34 998457845',
    chavePix: '123.123.123-54',
    senha: '12312321'
  }
];

const affiliatesCountList = [
  { label: 'Usários Cadastrados', value: 245 },
  { label: 'Receita Total', value: 15478 }
];

export const Affiliates = () => {
  const listTabs: ListTabsProps[] = [
    {
      label: 'Afiliados',
      value: 'affiliates',
      children: <AffiliateAccordion affiliateList={affiliates} />
    }
  ];
  return (
    <>
      <Stack direction="row" spacing={2} mb={layoutPadding} width={'50%'}>
        {affiliatesCountList.map((count) => (
          <CountCard label={count.label} value={count.value} />
        ))}
      </Stack>
      <CustomTabs listTabs={listTabs} mainRoute="/affiliates" />
    </>
  );
};
