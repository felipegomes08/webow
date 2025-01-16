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
import CustomModal from 'components/CustomModal';
import { ModalTypeEnum } from 'components/CustomModal/CustomModal.enum';
import CustomTabs from 'components/Tabs';
import { ListTabsProps } from 'components/Tabs/CustomTabs.type';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { APIResponse } from 'types/api/Api.type';
import MessageAccordion from './components/MessageAccordion';
import MessageForm from './components/MessageForm';
import MessageUpdateForm from './components/MessageUpdateForm';
import {
  createMessage,
  deleteMessage,
  getMessage,
  getMessages,
  updateMessage
} from './services/supportServices';
import { MessageSchema, MessageUpdateSchema } from './types/Support.type';
import {
  MessageGridResponseData,
  MessageResponse
} from './types/SupportApi.type';

export const Support = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const [messageId, setMessageId] = React.useState<string>('');
  const [messageUpdate, setMessageUpdate] = useState<
    MessageResponse | undefined
  >(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [editLoading, setEditLoading] = useState<boolean>(false);
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const limit = searchParams.get('limit')
    ? Number(searchParams.get('limit'))
    : 10;
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState(ModalTypeEnum.INSERT);

  const { data: messageResponse, isLoading } = useQuery<
    MessageGridResponseData | undefined
  >({
    queryKey: ['get-messages', page, limit],
    queryFn: async () => {
      const response: APIResponse<MessageGridResponseData> = await getMessages({
        page,
        limit
      });
      return response.data;
    },
    placeholderData: keepPreviousData
  });

  const { data: userBlockResponse, isLoading: isMessageBlockLoading } =
    useQuery<MessageGridResponseData | undefined>({
      queryKey: ['get-tickets', page, limit],
      queryFn: async () => {
        const response: APIResponse<MessageGridResponseData> =
          await getMessages({
            page,
            limit,
            status: 'banned'
          });
        return response.data;
      },
      placeholderData: keepPreviousData
    });

  const { data: userOnlineResponse, isLoading: isSupportOnlineLoading } =
    useQuery<MessageGridResponseData | undefined>({
      queryKey: ['get-closed-tickets', page, limit],
      queryFn: async () => {
        const response: APIResponse<MessageGridResponseData> =
          await getMessages({
            page,
            limit,
            status: 'closed'
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
    setMessageUpdate(undefined);
    setOpen(false);
  };

  const handleDelete = async (userId: string) => {
    setLoading(true);
    const response = await deleteMessage(userId);
    if (response.success) {
      toast.success('Usuário excluído com sucesso!', {
        position: 'top-center'
      });
      queryClient.invalidateQueries({ queryKey: ['get-messages'] });
      queryClient.invalidateQueries({ queryKey: ['get-tickets'] });
      queryClient.invalidateQueries({ queryKey: ['get-closed-tickets'] });
      handleClose();
    } else {
      toast.error('Erro ao excluir usuário!', {
        position: 'top-center'
      });
    }
    setLoading(false);
  };

  const handleCreate = async (message: MessageSchema) => {
    setLoading(true);
    const result: APIResponse = await createMessage(message);
    if (result.success) {
      queryClient.invalidateQueries({ queryKey: ['get-messages'] });
      queryClient.invalidateQueries({ queryKey: ['get-tickets'] });
      queryClient.invalidateQueries({ queryKey: ['get-closed-tickets'] });
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

  const handleSave = async (id: string, message: MessageUpdateSchema) => {
    setLoading(true);
    const result: APIResponse = await updateMessage(id, message);
    if (result.success) {
      queryClient.invalidateQueries({ queryKey: ['get-messages'] });
      queryClient.invalidateQueries({ queryKey: ['get-tickets'] });
      queryClient.invalidateQueries({ queryKey: ['get-closed-tickets'] });
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
    const result: APIResponse<MessageResponse> = await getMessage(id);
    if (result.success) {
      setMessageUpdate(result.data);
      handleOpen(ModalTypeEnum.UPDATE);
    } else {
      toast.error('Erro ao carregar usuário');
    }
    setEditLoading(false);
  };

  const listTabs: ListTabsProps[] = [
    {
      label: 'Mensagem',
      value: 'messages',
      children: (
        <>
          <AddButtonTab onClick={() => handleOpen(ModalTypeEnum.INSERT)} />
          <MessageAccordion
            messageGridResponseData={messageResponse}
            deleteCallback={(id) => {
              setMessageId(id);
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
      label: 'Ticket',
      value: 'ticket',
      children: (
        <>
          <AddButtonTab onClick={() => handleOpen(ModalTypeEnum.INSERT)} />
          <MessageAccordion
            messageGridResponseData={messageResponse}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
            editLoading={editLoading}
            isLoading={isMessageBlockLoading}
            page={page}
            limit={limit}
          />
        </>
      )
    },
    {
      label: 'Ticket Fechado',
      value: 'closedTicket',
      children: (
        <>
          <AddButtonTab onClick={() => handleOpen(ModalTypeEnum.INSERT)} />
          <MessageAccordion
            messageGridResponseData={messageResponse}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
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
                    onClick={() => handleDelete(messageId)}
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : 'Confirmar'}
                  </Button>
                  <Button onClick={handleClose} disabled={loading}>
                    Cancelar
                  </Button>
                </Box>
              </Box>
            ) : messageUpdate ? (
              <MessageUpdateForm
                onSave={handleSave}
                messageUpdate={messageUpdate}
                loading={loading}
              />
            ) : (
              <MessageForm onCreate={handleCreate} loading={loading} />
            )}
          </Box>
        </Box>
      </CustomModal>
      <CustomTabs listTabs={listTabs} mainRoute="/app/support" />
    </>
  );
};
