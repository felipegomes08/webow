import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import AddButtonTab from 'components/AddButtonTab';
import CountCard from 'components/CountCard';
import CustomModal from 'components/CustomModal';
import { ModalTypeEnum } from 'components/CustomModal/CustomModal.enum';
import CustomTabs from 'components/Tabs';
import { ListTabsProps } from 'components/Tabs/CustomTabs.type';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { layoutPadding } from 'theme/globalStyles';
import { APIResponse } from 'types/api/Api.type';
import AffiliateAccordion from './components/AffiliateAccordion';
import AffiliateForm from './components/AffiliateForm';
import { deleteAffiliate, getAffiliates } from './services/affiliateServices';
import { AffiliateGridResponse } from './types/AffiliateApi.type';

const affiliateCountList = [
  { label: 'Affiliados Cadastrados', value: 245 },
  { label: 'Receita Total', value: 205 }
];

export const Affiliate = () => {
  const [searchParams] = useSearchParams();
  const [affiliateId, setAffiliateId] = React.useState<string>('');
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const limit = searchParams.get('limit')
    ? Number(searchParams.get('limit'))
    : 10;
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState(ModalTypeEnum.INSERT);

  const { data: affiliateResponse, isLoading } =
    useQuery<AffiliateGridResponse>({
      queryKey: ['get-affiliates', page, limit],
      queryFn: async () => {
        const response: APIResponse = await getAffiliates({
          page,
          limit
        });
        return response.data;
      },
      placeholderData: keepPreviousData
    });

  const handleOpen = (modalType: number) => {
    setModalType(modalType);
    setOpen(true);
  };
  const handleClose = () => {
    setModalType(ModalTypeEnum.INSERT);
    setOpen(false);
  };

  const handleDelete = async (affiliateId: string) => {
    const response = await deleteAffiliate(affiliateId);
    if (response.success) {
      toast.success('Afiliado excluído com sucesso!', {
        position: 'top-center'
      });
    } else {
      toast.error('Erro ao excluir afiliado!', {
        position: 'top-center'
      });
    }
    handleClose();
  };

  const listTabs: ListTabsProps[] = [
    {
      label: 'Afiliados',
      value: 'main',
      children: (
        <>
          <AddButtonTab onClick={() => handleOpen(ModalTypeEnum.INSERT)} />
          <AffiliateAccordion
            affiliateGridResponseData={affiliateResponse?.data}
            deleteCallback={(id) => {
              setAffiliateId(id);
              handleOpen(ModalTypeEnum.DELETE);
            }}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
            isLoading={isLoading}
            page={page}
            limit={limit}
          />
        </>
      )
    }
  ];
  return (
    <>
      <CustomModal isOpen={open} onClose={handleClose}>
        <Box width={'100%'}>
          <Stack direction={'row'} spacing={2} mb={2}>
            <PersonIcon sx={{ color: grey[900], fontSize: '25px' }} />
            <Typography id="modal-modal-title" variant="h1">
              {modalType === ModalTypeEnum.INSERT
                ? 'Novo Afiliado'
                : modalType === ModalTypeEnum.UPDATE
                  ? 'Atualizar Afiliado'
                  : 'Corfirmar exclusão'}
            </Typography>
          </Stack>
          <Box width={'100%'}>
            {modalType === ModalTypeEnum.DELETE ? (
              <Box mt={2}>
                <Typography variant="h3">
                  Confirma a exclusão do afiliado?
                </Typography>
                <Box mt={2} display={'flex'} justifyContent={'flex-end'}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      if (modalType === ModalTypeEnum.DELETE)
                        handleDelete(affiliateId);
                    }}
                  >
                    Confirmar
                  </Button>
                  <Button>Cancelar</Button>
                </Box>
              </Box>
            ) : (
              <AffiliateForm />
            )}
          </Box>
        </Box>
      </CustomModal>
      <Stack direction="row" spacing={2} mb={layoutPadding}>
        {affiliateCountList.map((count) => (
          <CountCard label={count.label} value={count.value} />
        ))}
      </Stack>
      <CustomTabs listTabs={listTabs} mainRoute="/app/affiliates" />
    </>
  );
};
