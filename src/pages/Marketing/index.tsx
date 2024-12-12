import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import AddButtonTab from 'components/AddButtonTab';
import CustomModal from 'components/CustomModal';
import { ModalTypeEnum } from 'components/CustomModal/CustomModal.enum';
import CustomTabs from 'components/Tabs';
import { ListTabsProps } from 'components/Tabs/CustomTabs.type';
import MarketingAffiliateAccordion from 'pages/Marketing/components/MarketingAffiliateAccordion';
import MarketingUpSellAccordion from 'pages/Marketing/components/MarketingUpSellAccordion';
import { MarketingAffiliateProps } from 'pages/Marketing/types/MarketingAffiliate.type';
import { MarketingUpSellProps } from 'pages/Marketing/types/MarketingUpSelll.type';
import UserForm from 'pages/User/components/UserForm';
import React from 'react';
import { useLocation } from 'react-router-dom';
import MarketingUpSellForm from './components/MarketingUpSellForm';
import PixelCard from './components/PixelCard';

const affiliates: MarketingAffiliateProps[] = [
  {
    nome: 'Amanda da Costa',
    link: 'https://www.monkmaster.com/1243',
    codigo: 'AMANDA20',
    depositos: 5,
    quebras: 5,
    cpa: 10,
    cpm: 5000,
    cpf: '123.123.123-54',
    email: 'teste@gmail.com',
    telefone: '34 998457845',
    chavePix: '123.123.123-54',
    senha: '12312321'
  },
  {
    nome: 'Lucas Gomes',
    link: 'https://www.monkmaster.com/1243',
    codigo: 'LUCAS20',
    depositos: 5,
    quebras: 5,
    cpa: 10,
    cpm: 5000,
    cpf: '123.123.123-54',
    email: 'teste@gmail.com',
    telefone: '34 998457845',
    chavePix: '123.123.123-54',
    senha: '12312321'
  }
];

const upsell: MarketingUpSellProps[] = [
  {
    titulo: 'Novos Jogadores saldo baixo',
    condicao: 'Se uma pessoa completou 1 mes de jogo',
    mensagem: 'Saldo abaixo de 50,00',
    imagem: 'Saldo abaixo de 50,00',
    se: 'Saldo abaixo de 50,00',
    acao: 'Vai dobrar o depósito',
    tempo: 30,
    unidade: 200
  },
  {
    titulo: 'Crédito novos jogadores',
    condicao: 'Se uma pessoa completou 1 mes de jogo',
    mensagem: 'Saldo abaixo de 50,00',
    imagem: 'Saldo abaixo de 50,00',
    se: 'Saldo abaixo de 50,00',
    acao: 'Vai dobrar o depósito',
    tempo: 30,
    unidade: 200
  }
];

export const Marketing = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState(ModalTypeEnum.INSERT);
  const handleOpen = (modalType: number) => {
    setModalType(modalType);
    setOpen(true);
  };
  const handleClose = () => {
    setModalType(ModalTypeEnum.INSERT);
    setOpen(false);
  };

  const modalForm =
    location.pathname === '/marketing/upsell' ? (
      <MarketingUpSellForm />
    ) : location.pathname === '/marketing/pixel' ? (
      <UserForm />
    ) : (
      <UserForm />
    );
  const listTabs: ListTabsProps[] = [
    {
      label: 'Afiliados',
      value: 'affiliates',
      children: (
        <>
          <MarketingAffiliateAccordion
            marketingAffiliateList={affiliates}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
          />
        </>
      )
    },
    {
      label: 'UpSell',
      value: 'upsell',
      children: (
        <>
          <AddButtonTab onClick={() => handleOpen(ModalTypeEnum.INSERT)} />
          <MarketingUpSellAccordion
            marketingUpSellList={upsell}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
          />
        </>
      )
    },
    {
      label: 'Pixel',
      value: 'pixel',
      children: (
        <>
          <PixelCard
            pixel='<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,"script",
"https://connect.facebook.net/en_US/fbevents.js");
fbq("init", "875304520827655");
fbq("track", "PageView");
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=875304520827655&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->'
          />
        </>
      )
    }
  ];
  return (
    <>
      <CustomModal isOpen={open} onClose={handleClose}>
        <Box width={'100%'}>
          <Stack direction={'row'} spacing={2}>
            <PersonIcon sx={{ color: grey[900], fontSize: '25px' }} />
            <Typography id="modal-modal-title" variant="h1">
              {modalType === ModalTypeEnum.INSERT
                ? 'Nova Regra'
                : modalType === ModalTypeEnum.UPDATE
                  ? 'Atualizar Regra'
                  : 'Corfirmar exclusão'}
            </Typography>
          </Stack>
          <Box width={'100%'}>
            {modalType === ModalTypeEnum.DELETE ? (
              <Box mt={2}>
                <Typography variant="h3">
                  Confirma a exclusão da regra?
                </Typography>
                <Box mt={2} display={'flex'} justifyContent={'flex-end'}>
                  <Button variant="contained">Confirmar</Button>
                  <Button>Cancelar</Button>
                </Box>
              </Box>
            ) : (
              <>{modalForm}</>
            )}
          </Box>
        </Box>
      </CustomModal>
      <CustomTabs listTabs={listTabs} mainRoute="/app/marketing" />
    </>
  );
};
