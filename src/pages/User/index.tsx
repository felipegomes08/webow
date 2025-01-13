import PersonIcon from '@mui/icons-material/Person';
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography
} from '@mui/material';
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
import UserAccordion from 'pages/User/components/UserAccordion';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { layoutPadding } from 'theme/globalStyles';
import { APIResponse } from 'types/api/Api.type';
import UserForm from './components/UserForm';
import UserUpdateForm from './components/UserUpdateForm';
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser
} from './services/userServices';
import { UserSchema, UserUpdateSchema } from './types/User.type';
import { UserGridResponseData, UserResponse } from './types/UserApi.type';

export const User = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const [userId, setUserId] = React.useState<string>('');
  const [userUpdate, setUserUpdate] = useState<UserResponse | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [editLoading, setEditLoading] = useState<boolean>(false);
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const limit = searchParams.get('limit')
    ? Number(searchParams.get('limit'))
    : 10;
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState(ModalTypeEnum.INSERT);

  const { data: userResponse, isLoading } = useQuery<
    UserGridResponseData | undefined
  >({
    queryKey: ['get-users', page, limit],
    queryFn: async () => {
      const response: APIResponse<UserGridResponseData> = await getUsers({
        page,
        limit
      });
      return response.data;
    },
    placeholderData: keepPreviousData
  });

  const { data: userBlockResponse, isLoading: isUserBlockLoading } = useQuery<
    UserGridResponseData | undefined
  >({
    queryKey: ['get-banned-users', page, limit],
    queryFn: async () => {
      const response: APIResponse<UserGridResponseData> = await getUsers({
        page,
        limit,
        status: 'banned'
      });
      return response.data;
    },
    placeholderData: keepPreviousData
  });

  const { data: userOnlineResponse, isLoading: isUserOnlineLoading } = useQuery<
    UserGridResponseData | undefined
  >({
    queryKey: ['get-online-users', page, limit],
    queryFn: async () => {
      const response: APIResponse<UserGridResponseData> = await getUsers({
        page,
        limit,
        status: 'online'
      });
      return response.data;
    },
    placeholderData: keepPreviousData
  });

  const { data: userActiveResponse, isLoading: isUserActiveLoading } = useQuery<
    UserGridResponseData | undefined
  >({
    queryKey: ['get-active-users', page, limit],
    queryFn: async () => {
      const response: APIResponse<UserGridResponseData> = await getUsers({
        page,
        limit,
        status: 'active'
      });
      return response.data;
    },
    placeholderData: keepPreviousData
  });

  const userCountList = [
    { label: 'Usários Cadastrados', value: userResponse?.total },
    { label: 'Usuários Ativos', value: userActiveResponse?.total },
    { label: 'Usuários Banidos', value: userBlockResponse?.total },
    { label: 'Usuários Online', value: 0, color: 'primary' }
  ];

  const handleOpen = (modalType: number) => {
    setModalType(modalType);
    setOpen(true);
  };
  const handleClose = () => {
    setModalType(ModalTypeEnum.INSERT);
    setUserUpdate(undefined);
    setOpen(false);
  };

  const handleDelete = async (userId: string) => {
    setLoading(true);
    const response = await deleteUser(userId);
    if (response.success) {
      toast.success('Usuário excluído com sucesso!', {
        position: 'top-center'
      });
      queryClient.invalidateQueries({ queryKey: ['get-users'] });
      queryClient.invalidateQueries({ queryKey: ['get-banned-users'] });
      queryClient.invalidateQueries({ queryKey: ['get-online-users'] });
      handleClose();
    } else {
      toast.error('Erro ao excluir usuário!', {
        position: 'top-center'
      });
    }
    setLoading(false);
  };

  const handleCreate = async (user: UserSchema) => {
    setLoading(true);
    const result: APIResponse = await createUser(user);
    if (result.success) {
      queryClient.invalidateQueries({ queryKey: ['get-users'] });
      queryClient.invalidateQueries({ queryKey: ['get-banned-users'] });
      queryClient.invalidateQueries({ queryKey: ['get-online-users'] });
      toast.success('Usuário cadastrado com sucesso!', {
        position: 'top-center'
      });
      handleClose();
    } else {
      toast.error('Erro ao cadastrar usuário!', {
        position: 'top-center'
      });
    }
    setLoading(false);
  };

  const handleSave = async (id: string, user: UserUpdateSchema) => {
    setLoading(true);
    const result: APIResponse = await updateUser(id, user);
    if (result.success) {
      queryClient.invalidateQueries({ queryKey: ['get-users'] });
      queryClient.invalidateQueries({ queryKey: ['get-banned-users'] });
      queryClient.invalidateQueries({ queryKey: ['get-online-users'] });
      toast.success('Usuário editado com sucesso!', {
        position: 'top-center'
      });
      handleClose();
    } else {
      toast.error('Erro ao editar usuário!', {
        position: 'top-center'
      });
    }
    setLoading(false);
  };

  const handleEdit = async (id: string) => {
    setEditLoading(true);
    const result: APIResponse<UserResponse> = await getUser(id);
    if (result.success) {
      setUserUpdate(result.data);
      handleOpen(ModalTypeEnum.UPDATE);
    } else {
      toast.error('Erro ao carregar usuário');
    }
    setEditLoading(false);
  };

  const listTabs: ListTabsProps[] = [
    {
      label: 'Usuários',
      value: 'main',
      children: (
        <>
          <AddButtonTab onClick={() => handleOpen(ModalTypeEnum.INSERT)} />
          <UserAccordion
            userGridResponseData={userResponse}
            deleteCallback={(id) => {
              setUserId(id);
              handleOpen(ModalTypeEnum.DELETE);
            }}
            editCallback={handleEdit}
            editLoading={editLoading}
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
            userGridResponseData={userBlockResponse}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
            editLoading={editLoading}
            isLoading={isUserBlockLoading}
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
            userGridResponseData={userOnlineResponse}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
            editLoading={editLoading}
            isLoading={isUserOnlineLoading}
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
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(userId)}
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : 'Confirmar'}
                  </Button>
                  <Button onClick={handleClose} disabled={loading}>
                    Cancelar
                  </Button>
                </Box>
              </Box>
            ) : userUpdate ? (
              <UserUpdateForm
                onSave={handleSave}
                userUpdate={userUpdate}
                loading={loading}
              />
            ) : (
              <UserForm onCreate={handleCreate} loading={loading} />
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
