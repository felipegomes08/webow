import PersonIcon from '@mui/icons-material/Person';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import GridAccordion from 'components/GridAccordion';
import Pagination from 'components/Pagination';
import TextDescription from 'components/TextDescription';
import { useState } from 'react';
import { toast } from 'react-toastify';
import theme from 'theme/theme';
import { copyToClipboard } from 'utils/formatters';
import { TicketAccordionProps } from './TicketAccordion.type';

const TicketAccordion = ({
  ticketGridResponseData,
  deleteCallback,
  editCallback,
  editLoading,
  isLoading,
  page,
  limit
}: TicketAccordionProps) => {
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
      {ticketGridResponseData?.tickets?.map(
        (
          {
            id,
            userId,
            user,
            closedAt,
            createdAt,
            deleted,
            subject,
            support,
            supportId
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
                  <Typography variant="h3">{user.name}</Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {subject}
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
                    <TextDescription label="Usuário:" value={user.name} />
                  </Stack>
                  <Stack
                    spacing={1}
                    p={4}
                    borderRadius={theme.shape.borderRadius}
                    border={`1.5px solid ${grey[300]}`}
                  >
                    <TextDescription label="Mensagem:" value={subject} />
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
      {ticketGridResponseData && (
        <Pagination
          page={page}
          total={ticketGridResponseData.total}
          limit={limit}
        />
      )}
    </>
  );
};

export default TicketAccordion;
