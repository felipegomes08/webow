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
import UserAccordion from 'pages/User/components/UserAccordion';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'services/api';
import { layoutPadding } from 'theme/globalStyles';
import { APIResponse } from 'types/api/Api.type';
import UserForm from './components/UserForm';
import { UserGridResponse } from './types/UserApi.type';

const userCountList = [
  { label: 'Usários Cadastrados', value: 245 },
  { label: 'Usuários Ativos', value: 205 },
  { label: 'Usuários Banidos', value: 40 },
  { label: 'Usuários Online', value: 69, color: 'primary' }
];

export const User = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const limit = searchParams.get('limit')
    ? Number(searchParams.get('limit'))
    : 10;
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState(ModalTypeEnum.INSERT);

  const { data: userResponse, isLoading } = useQuery<UserGridResponse>({
    queryKey: ['get-users', page, limit],
    queryFn: async () => {
      const response: APIResponse = await api.get(
        `/users?page=${page}&limit=${limit}`
      );
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

  const listTabs: ListTabsProps[] = [
    {
      label: 'Usuários',
      value: 'main',
      children: (
        <>
          <AddButtonTab onClick={() => handleOpen(ModalTypeEnum.INSERT)} />
          <UserAccordion
            userGridResponseData={userResponse?.data}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
            isLoading={isLoading}
            page={page}
            limit={limit}
          />
        </>
      )
    },
    {
      label: 'Banidos',
      value: 'ban',
      children: (
        <>
          <AddButtonTab onClick={() => handleOpen(ModalTypeEnum.INSERT)} />
          <UserAccordion
            userGridResponseData={userResponse?.data}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
            isLoading={isLoading}
            page={page}
            limit={limit}
          />
        </>
      )
    },
    {
      label: 'Online',
      value: 'online',
      children: (
        <>
          <AddButtonTab onClick={() => handleOpen(ModalTypeEnum.INSERT)} />
          <UserAccordion
            userGridResponseData={userResponse?.data}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
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
          <Stack direction={'row'} spacing={2}>
            <PersonIcon sx={{ color: grey[900], fontSize: '25px' }} />
            <Typography id="modal-modal-title" variant="h1">
              {modalType === ModalTypeEnum.INSERT
                ? 'Novo Usuário'
                : modalType === ModalTypeEnum.UPDATE
                  ? 'Atualizar Usuário'
                  : 'Corfirmar exclusão'}
            </Typography>
          </Stack>
          <Box width={'100%'}>
            {modalType === ModalTypeEnum.DELETE ? (
              <Box mt={2}>
                <Typography variant="h3">
                  Confirma a exclusão do usuário?
                </Typography>
                <Box mt={2} display={'flex'} justifyContent={'flex-end'}>
                  <Button variant="contained">Confirmar</Button>
                  <Button>Cancelar</Button>
                </Box>
              </Box>
            ) : (
              <UserForm />
            )}
          </Box>
        </Box>
      </CustomModal>
      <Stack direction="row" spacing={2} mb={layoutPadding}>
        {userCountList.map((count) => (
          <CountCard
            label={count.label}
            value={count.value}
            color={count.color}
          />
        ))}
      </Stack>
      <CustomTabs listTabs={listTabs} mainRoute="/app/users" />
    </>
  );
};
