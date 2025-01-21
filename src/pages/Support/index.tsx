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
import TicketAccordion from './components/TicketAccordion';
import TicketForm from './components/TicketForm';
import TicketUpdateForm from './components/TicketUpdateForm';
import {
  createTicket,
  deleteMessage,
  getTicket,
  getTickets,
  updateTicket
} from './services/supportServices';
import { TicketSchema, TicketUpdateSchema } from './types/Support.type';
import {
  TicketGridResponseData,
  TicketResponse
} from './types/SupportApi.type';

export const Support = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const [messageId, setMessageId] = React.useState<string>('');
  const [ticketUpdate, setMessageUpdate] = useState<TicketResponse | undefined>(
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

  const { data: ticketResponse, isLoading } = useQuery<
    TicketGridResponseData | undefined
  >({
    queryKey: ['get-messages', page, limit],
    queryFn: async () => {
      const response: APIResponse<TicketGridResponseData> = await getTickets({
        page,
        limit
      });
      return response.data;
    },
    placeholderData: keepPreviousData
  });

  const { data: userBlockResponse, isLoading: isMessageBlockLoading } =
    useQuery<TicketGridResponseData | undefined>({
      queryKey: ['get-tickets', page, limit],
      queryFn: async () => {
        const response: APIResponse<TicketGridResponseData> = await getTickets({
          page,
          limit,
          status: 'banned'
        });
        return response.data;
      },
      placeholderData: keepPreviousData
    });

  const { data: userOnlineResponse, isLoading: isSupportOnlineLoading } =
    useQuery<TicketGridResponseData | undefined>({
      queryKey: ['get-closed-tickets', page, limit],
      queryFn: async () => {
        const response: APIResponse<TicketGridResponseData> = await getTickets({
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
      toast.success('Ticket excluído com sucesso!', {
        position: 'top-center'
      });
      queryClient.invalidateQueries({ queryKey: ['get-messages'] });
      queryClient.invalidateQueries({ queryKey: ['get-tickets'] });
      queryClient.invalidateQueries({ queryKey: ['get-closed-tickets'] });
      handleClose();
    } else {
      toast.error('Erro ao excluir ticket!', {
        position: 'top-center'
      });
    }
    setLoading(false);
  };

  const handleCreate = async ({ userId, subject }: TicketSchema) => {
    setLoading(true);
    const result: APIResponse = await createTicket({ userId, subject });
    if (result.success) {
      queryClient.invalidateQueries({ queryKey: ['get-messages'] });
      queryClient.invalidateQueries({ queryKey: ['get-tickets'] });
      queryClient.invalidateQueries({ queryKey: ['get-closed-tickets'] });
      toast.success('Ticket cadastrado com sucesso!', {
        position: 'top-center'
      });
      handleClose();
    } else {
      toast.error('Erro ao cadastrar ticket!', {
        position: 'top-center'
      });
    }
    setLoading(false);
  };

  const handleSave = async (
    id: string,
    { userId, supportId, deleted, subject }: TicketUpdateSchema
  ) => {
    setLoading(true);
    const result: APIResponse = await updateTicket(id, {
      userId,
      supportId,
      deleted,
      subject
    });
    if (result.success) {
      queryClient.invalidateQueries({ queryKey: ['get-messages'] });
      queryClient.invalidateQueries({ queryKey: ['get-tickets'] });
      queryClient.invalidateQueries({ queryKey: ['get-closed-tickets'] });
      toast.success('Ticket editado com sucesso!', {
        position: 'top-center'
      });
      handleClose();
    } else {
      toast.error('Erro ao editar ticket!', {
        position: 'top-center'
      });
    }
    setLoading(false);
  };

  const handleEdit = async (id: string) => {
    setEditLoading(true);
    const result: APIResponse<TicketResponse> = await getTicket(id);
    if (result.success) {
      setMessageUpdate(result.data);
      handleOpen(ModalTypeEnum.UPDATE);
    } else {
      toast.error('Erro ao carregar ticket');
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
          <TicketAccordion
            ticketGridResponseData={ticketResponse}
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
          <TicketAccordion
            ticketGridResponseData={ticketResponse}
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
          <TicketAccordion
            ticketGridResponseData={ticketResponse}
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
                ? 'Novo Ticket'
                : modalType === ModalTypeEnum.UPDATE
                  ? 'Atualizar Ticket'
                  : 'Corfirmar exclusão'}
            </Typography>
          </Stack>
          <Box width={'100%'}>
            {modalType === ModalTypeEnum.DELETE ? (
              <Box mt={2}>
                <Typography variant="h3">
                  Confirma a exclusão do ticket?
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
            ) : ticketUpdate ? (
              <TicketUpdateForm
                onSave={handleSave}
                ticketUpdate={ticketUpdate}
                loading={loading}
              />
            ) : (
              <TicketForm onCreate={handleCreate} loading={loading} />
            )}
          </Box>
        </Box>
      </CustomModal>
      <CustomTabs listTabs={listTabs} mainRoute="/app/support" />
    </>
  );
};
