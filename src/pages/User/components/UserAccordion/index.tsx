import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonIcon from '@mui/icons-material/Person';
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography
} from '@mui/material';
import { grey } from '@mui/material/colors';
import GridAccordion from 'components/GridAccordion';
import Pagination from 'components/Pagination';
import TextDescription from 'components/TextDescription';
import { UserAccordionProps } from 'pages/User/components/UserAccordion/UserAccordion.type';
import { useState } from 'react';
import { toast } from 'react-toastify';
import theme from 'theme/theme';
import {
  copyToClipboard,
  formatCPF,
  formatCurrency,
  formatPhone
} from 'utils/formatters';

const UserAccordion = ({
  userGridResponseData,
  deleteCallback,
  editCallback,
  editLoading,
  isLoading,
  page,
  limit
}: UserAccordionProps) => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async (text: string) => {
    const result = await copyToClipboard(text);
    if (result) {
      setCopied(true);
      toast.info('Chave Pix copiada para área de transferencia');
      setTimeout(() => setCopied(false), 5000);
    }
  };

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
                    {formatCPF(cpf)}
                  </Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {formatPhone(phone)}
                  </Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {email}
                  </Typography>
                </>
              }
              detailsContent={
                <Box p={2} display={'flex'} gap={2} flexDirection={'column'}>
                  <Stack
                    borderRadius={theme.shape.borderRadius}
                    border={`1.5px solid ${grey[300]}`}
                    p={4}
                    spacing={1}
                  >
                    <TextDescription label="Nome:" value={name} />
                    <TextDescription label="CPF:" value={formatCPF(cpf)} />
                    <TextDescription label="UF:" value={uf} />
                    <TextDescription
                      label="Telefone:"
                      value={formatPhone(phone)}
                    />
                    <TextDescription label="Email:" value={email} />
                    <TextDescription
                      label="Código de Afiliado:"
                      value={affiliateId}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    p={4}
                    borderRadius={theme.shape.borderRadius}
                    border={`1.5px solid ${grey[300]}`}
                  >
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
                  <Stack
                    p={4}
                    direction={'row'}
                    borderRadius={theme.shape.borderRadius}
                    border={`1.5px solid ${grey[300]}`}
                  >
                    <Box display={'flex'} gap={2} mr={20} alignItems={'center'}>
                      <TextDescription label="Chave Pix:" value={pixKey} />
                      {!copied ? (
                        <Button size="small" onClick={() => handleCopy(pixKey)}>
                          <ContentCopyIcon fontSize="small" />
                        </Button>
                      ) : (
                        <Button size="small">
                          <CheckCircleIcon fontSize="small" />
                        </Button>
                      )}
                    </Box>
                    <TextDescription
                      label="Saldo:"
                      value={formatCurrency(balance)}
                    />
                  </Stack>
                </Box>
              }
              expandCallback={toggleExpand}
              deleteCallback={() => deleteCallback(id)}
              editCallback={() => editCallback(id)}
              editLoading={editLoading}
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
