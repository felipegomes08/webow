import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Box, Button, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import AddButtonTab from 'components/AddButtonTab';
import CustomModal from 'components/CustomModal';
import { ModalTypeEnum } from 'components/CustomModal/CustomModal.enum';
import CustomTabs from 'components/Tabs';
import { ListTabsProps } from 'components/Tabs/CustomTabs.type';
import MessageAccordion from 'pages/Support/components/MessageAccordion';
import MessageForm from 'pages/Support/components/MessageForm';
import TicketAccordion from 'pages/Support/components/TicketAccordion';
import { MessageProps } from 'pages/Support/types/Message.type';
import React from 'react';
import { TicketProps } from './types/Ticket.type';

const messages: MessageProps[] = [
  {
    assunto: 'Falha no Pagamento',
    conteudo:
      'Selecione o método de pagamento que será o mode pagamento o método de pagamento oferecido',
    codigo: '1231232354',
    data: new Date()
  },
  {
    assunto: 'Falha no Pagamento',
    conteudo:
      'Selecione o método de pagamento que será o mode pagamento o método de pagamento oferecido',
    codigo: '1231232354',
    data: new Date()
  }
];
const tickets: TicketProps[] = [
  {
    assunto: 'Ticket Usuário',
    cpf: '123.123.461-45',
    conteudo:
      'Selecione o método de pagamento que será o mode pagamento o método de pagamento oferecido',
    codigo: '1231232354',
    data: new Date()
  },
  {
    assunto: 'Ticket Usuário',
    cpf: '123.123.461-45',
    conteudo:
      'Selecione o método de pagamento que será o mode pagamento o método de pagamento oferecido',
    codigo: '1231232354',
    data: new Date()
  }
];

export const Support = () => {
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

  const listTabs: ListTabsProps[] = [
    {
      label: 'Mensagem',
      value: 'messages',
      children: (
        <>
          <AddButtonTab onClick={() => handleOpen(ModalTypeEnum.INSERT)} />
          <MessageAccordion
            messageList={messages}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
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
            ticketList={tickets}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
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
            ticketList={tickets}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
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
            <DescriptionOutlinedIcon
              sx={{ color: grey[900], fontSize: '25px' }}
            />
            <Typography id="modal-modal-title" variant="h1">
              {modalType === ModalTypeEnum.INSERT
                ? 'Nova Mensagem'
                : modalType === ModalTypeEnum.UPDATE
                  ? 'Atualizar Mensagem'
                  : 'Corfirmar exclusão'}
            </Typography>
          </Stack>
          <Box width={'100%'}>
            {modalType === ModalTypeEnum.DELETE ? (
              <Box mt={2}>
                <Typography variant="h3">
                  Confirma a exclusão da mensagem?
                </Typography>
                <Box mt={2} display={'flex'} justifyContent={'flex-end'}>
                  <Button variant="contained">Confirmar</Button>
                  <Button>Cancelar</Button>
                </Box>
              </Box>
            ) : (
              <MessageForm />
            )}
          </Box>
        </Box>
      </CustomModal>
      <CustomTabs listTabs={listTabs} mainRoute="/support" />
    </>
  );
};
