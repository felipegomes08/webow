import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import AddButtonTab from 'components/AddButtonTab';
import CountCard from 'components/CountCard';
import CustomModal from 'components/CustomModal';
import { ModalTypeEnum } from 'components/CustomModal/CustomModal.enum';
import CustomTabs from 'components/Tabs';
import { ListTabsProps } from 'components/Tabs/CustomTabs.type';
import UserAccordion from 'pages/User/components/UserAccordion';
import { UserProps } from 'pages/User/types/User.type';
import React from 'react';
import { layoutPadding } from 'theme/globalStyles';
import UserForm from './components/UserForm';

const users: UserProps[] = [
  {
    nome: 'Amanda da Costa',
    cpf: '123.123.123-54',
    email: 'teste@gmail.com',
    telefone: '34 998457845',
    chavePix: '123.123.123-54',
    senha: '12312321'
  },
  {
    nome: 'Lucas Gomes',
    cpf: '123.123.123-54',
    email: 'teste@gmail.com',
    telefone: '34 998457845',
    chavePix: '123.123.123-54',
    senha: '12312321'
  }
];

const userCountList = [
  { label: 'Usários Cadastrados', value: 245 },
  { label: 'Usuários Ativos', value: 205 },
  { label: 'Usuários Banidos', value: 40 },
  { label: 'Usuários Online', value: 69, color: 'primary' }
];

export const User = () => {
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
      label: 'Usuários',
      value: 'main',
      children: (
        <>
          <AddButtonTab onClick={() => handleOpen(ModalTypeEnum.INSERT)} />
          <UserAccordion
            userList={users}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
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
            userList={users}
            deleteCallback={() => handleOpen(ModalTypeEnum.DELETE)}
            editCallback={() => handleOpen(ModalTypeEnum.UPDATE)}
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
            userList={users}
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
