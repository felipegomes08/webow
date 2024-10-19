import { grey } from '@mui/material/colors';
import CustomTabs from 'components/forms/Tabs';
import { ListTabsProps } from 'components/forms/Tabs/CustomTabs.type';
import UserAccordion from 'pages/User/components/UserAccordion';
import { UserProps } from 'types/entity/user/User.type';

const users: UserProps[] = [
  {
    nome: 'Bruno da Costa',
    cpf: '123.123.123-54',
    email: 'teste@gmail.com',
    telefone: '34 998457845',
    chavePix: '123.123.123-54',
    senha: '12312321'
  },
  {
    nome: 'Felipe da Costa',
    cpf: '123.123.123-54',
    email: 'teste@gmail.com',
    telefone: '34 998457845',
    chavePix: '123.123.123-54',
    senha: '12312321'
  }
];

const userAccordion = (
  <>
    {users.map(({ nome, cpf, email, telefone, chavePix, senha }, index) => (
      <UserAccordion
        nome={nome}
        cpf={cpf}
        email={email}
        telefone={telefone}
        chavePix={chavePix}
        senha={senha}
        backgroundColor={index % 2 === 0 ? grey[50] : grey[400]}
      />
    ))}
  </>
);

const listTabs: ListTabsProps[] = [
  {
    label: 'Usuários',
    value: 'main',
    children: userAccordion
  },
  {
    label: 'Banidos',
    value: 'ban',
    children: <>BAN</>
  },
  {
    label: 'Online',
    value: 'online',
    children: <>ON</>
  }
];

export const User = () => {
  return (
    <>
      <CustomTabs listTabs={listTabs} mainRoute="/users" />
    </>
  );
};
