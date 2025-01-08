import PersonIcon from '@mui/icons-material/Person';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import GridAccordion from 'components/GridAccordion';
import Pagination from 'components/Pagination';
import TextDescription from 'components/TextDescription';
import { UserAccordionProps } from 'pages/User/components/UserAccordion/UserAccordion.type';
import { useState } from 'react';
import theme from 'theme/theme';

const UserAccordion = ({
  userGridResponseData,
  deleteCallback,
  editCallback,
  isLoading,
  page,
  limit
}: UserAccordionProps) => {
  const [expanded, setExpanded] = useState<string[]>([]);

  if (isLoading) return <CircularProgress />;
  return (
    <>
      {userGridResponseData?.users?.map(
        (
          {
            id,
            name,
            cpf,
            email,
            phone,
            pixKey,
            balance,
            uf,
            accountType,
            affiliateId,
            status,
            userType
          },
          index
        ) => {
          const toggleExpand = (
            _: React.SyntheticEvent,
            isExpanded: boolean
          ) => {
            if (isExpanded) setExpanded((prevArgs) => [...prevArgs, id]);
            else setExpanded(expanded.filter((x) => x !== id));
          };
          return (
            <GridAccordion
              expanded={expanded.includes(id)}
              index={index}
              icon={<PersonIcon sx={{ color: grey[900] }} />}
              titleContent={
                <>
                  <Typography variant="h3">{name}</Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {cpf}
                  </Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {phone}
                  </Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {email}
                  </Typography>
                </>
              }
              detailsContent={
                <Stack
                  direction={'row'}
                  borderRadius={theme.shape.borderRadius}
                  border={`1.5px solid ${grey[300]}`}
                  p={2}
                >
                  <Stack mr={4} spacing={1}>
                    <TextDescription label="Nome:" value={name} />
                    <TextDescription label="CPF:" value={cpf} />
                    <TextDescription label="UF:" value={uf} />
                    <TextDescription label="Telefone:" value={phone} />
                    <TextDescription label="Email:" value={email} />
                    <TextDescription label="Chave Pix:" value={pixKey} />
                    <TextDescription label="Saldo:" value={balance} />
                    <TextDescription
                      label="Código de Afiliado:"
                      value={affiliateId}
                    />
                    <TextDescription
                      label="Tipo de Usuário:"
                      value={userType.label}
                    />
                    <TextDescription
                      label="Tipo de Conta:"
                      value={accountType.label}
                    />
                    <TextDescription label="Status:" value={status.label} />
                  </Stack>
                </Stack>
              }
              expandCallback={toggleExpand}
              deleteCallback={() => deleteCallback(id)}
              editCallback={editCallback}
            />
          );
        }
      )}
      {userGridResponseData && (
        <Pagination
          page={page}
          total={userGridResponseData.total}
          limit={limit}
        />
      )}
    </>
  );
};

export default UserAccordion;
