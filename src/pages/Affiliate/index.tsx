import PersonIcon from '@mui/icons-material/Person';
import { Box, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import {
  keepPreviousData,
  useQuery,
  useQueryClient
} from '@tanstack/react-query';
import AddButtonTab from 'components/AddButtonTab';
import CountCard from 'components/CountCard';
import CustomModal from 'components/CustomModal';
import { ModalTypeEnum } from 'components/CustomModal/CustomModal.enum';
import CustomTabs from 'components/Tabs';
import { ListTabsProps } from 'components/Tabs/CustomTabs.type';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { layoutPadding } from 'theme/globalStyles';
import { APIResponse } from 'types/api/Api.type';
import AffiliateAccordion from './components/AffiliateAccordion';
import AffiliateForm from './components/AffiliateForm';
import AffiliateUpdateForm from './components/AffiliateUpdateForm';
import {
  createAffiliate,
  getAffiliates,
  updateAffiliate
} from './services/affiliateServices';
import {
  AffiliateSchema,
  AffiliateUpdateResponse,
  AffiliateUpdateSchema
} from './types/Affiliate.type';
import { AffiliateGridResponseData } from './types/AffiliateApi.type';

export const Affiliate = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const [affiliateId, setAffiliateId] = React.useState<string>('');
  const [affiliateUpdate, setAffiliateUpdate] = useState<
    AffiliateUpdateResponse | undefined
  >(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [editLoading, setEditLoading] = useState<boolean>(false);
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const limit = searchParams.get('limit')
    ? Number(searchParams.get('limit'))
    : 10;
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState(ModalTypeEnum.INSERT);

  const { data: affiliateResponse, isLoading } = useQuery<
    AffiliateGridResponseData | undefined
  >({
    queryKey: ['get-affiliates', page, limit],
    queryFn: async () => {
      const response: APIResponse<AffiliateGridResponseData> =
        await getAffiliates({
          page,
          limit
        });
      return response.data;
    },
    placeholderData: keepPreviousData
  });

  const affiliateCountList = [
    { label: 'Usários Cadastrados', value: affiliateResponse?.total },
    { label: 'Receita Total', value: 0, color: 'primary' }
  ];

  const handleOpen = (modalType: number) => {
    setModalType(modalType);
    setOpen(true);
  };
  const handleClose = () => {
    setModalType(ModalTypeEnum.INSERT);
    setAffiliateUpdate(undefined);
    setOpen(false);
  };

  const handleCreate = async (affiliate: AffiliateSchema) => {
    setLoading(true);
    const result: APIResponse = await createAffiliate(affiliate);
    if (result.success) {
      queryClient.invalidateQueries({ queryKey: ['get-affiliates'] });
      toast.success('Afiliado cadastrado com sucesso!', {
        position: 'top-center'
      });
      handleClose();
    } else {
      toast.error('Erro ao cadastrar afiliado!', {
        position: 'top-center'
      });
    }
    setLoading(false);
  };

  const handleSave = async (id: string, affiliate: AffiliateUpdateSchema) => {
    setLoading(true);
    const result: APIResponse = await updateAffiliate(id, affiliate);
    if (result.success) {
      queryClient.invalidateQueries({ queryKey: ['get-affiliates'] });
      toast.success('Afiliado editado com sucesso!', {
        position: 'top-center'
      });
      handleClose();
    } else {
      toast.error('Erro ao editar afiliado!', {
        position: 'top-center'
      });
    }
    setLoading(false);
  };

  const handleEdit = async (affiliate: AffiliateUpdateResponse) => {
    setEditLoading(true);
    if (affiliate) {
      setAffiliateUpdate(affiliate);
      handleOpen(ModalTypeEnum.UPDATE);
    } else {
      toast.error('Erro ao carregar Afiliado');
    }
    setEditLoading(false);
  };

  const listTabs: ListTabsProps[] = [
    {
      label: 'Afiliados',
      value: 'affiliates',
      children: (
        <>
          <AddButtonTab onClick={() => handleOpen(ModalTypeEnum.INSERT)} />
          <AffiliateAccordion
            affiliateGridResponseData={affiliateResponse}
            editCallback={handleEdit}
            editLoading={editLoading}
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
                : 'Atualizar Afiliado'}
            </Typography>
          </Stack>
          <Box width={'100%'}>
            {affiliateUpdate ? (
              <AffiliateUpdateForm
                onSave={handleSave}
                affiliateUpdate={affiliateUpdate}
                loading={loading}
              />
            ) : (
              <AffiliateForm onCreate={handleCreate} loading={loading} />
            )}
          </Box>
        </Box>
      </CustomModal>
      <Stack direction="row" spacing={2} mb={layoutPadding}>
        {affiliateCountList.map((count) => (
          <CountCard
            label={count.label}
            value={count.value}
            color={count.color}
          />
        ))}
      </Stack>
      <CustomTabs listTabs={listTabs} mainRoute="/app/affiliates" />
    </>
  );
};
