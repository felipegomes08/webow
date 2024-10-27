import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import GridAccordion from 'components/GridAccordion';
import { TicketAccordionProps } from 'pages/Support/components/TicketAccordion/TicketAccordion.type';
import { useState } from 'react';
import theme from 'theme/theme';

const TicketAccordion = ({
  ticketList,
  deleteCallback,
  editCallback
}: TicketAccordionProps) => {
  return (
    <>
      {ticketList.map(({ assunto, cpf, conteudo, codigo, data }, index) => {
        const [expanded, setExpanded] = useState(false);

        const toggleExpand = (_: React.SyntheticEvent, isExpanded: boolean) => {
          setExpanded(isExpanded);
        };
        return (
          <GridAccordion
            expanded={expanded}
            index={index}
            icon={<DescriptionOutlinedIcon sx={{ color: grey[900] }} />}
            titleContent={
              <>
                <Typography variant="h3">{assunto}</Typography>
                <Typography variant="h4" fontWeight={'500'}>
                  {cpf}
                </Typography>
                <Typography variant="h4" fontWeight={'500'}>
                  {codigo}
                </Typography>
                <Typography variant="h4" fontWeight={'500'}>
                  {data.toLocaleDateString('pt-BR')}
                </Typography>
              </>
            }
            detailsContent={
              <Stack spacing={1}>
                <Stack
                  direction={'row'}
                  borderRadius={theme.shape.borderRadius}
                  border={`1.5px solid ${grey[300]}`}
                  p={2}
                >
                  <Stack mr={4} spacing={1}>
                    <Typography variant="h3">CPF: </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="h3" fontWeight={'bold'}>
                      {cpf}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={'row'}
                  borderRadius={theme.shape.borderRadius}
                  border={`1.5px solid ${grey[300]}`}
                  p={2}
                >
                  <Stack mr={4} spacing={1}>
                    <Typography variant="h3">Assunto: </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="h3" fontWeight={'bold'}>
                      {assunto}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={'row'}
                  borderRadius={theme.shape.borderRadius}
                  border={`1.5px solid ${grey[300]}`}
                  p={2}
                >
                  <Typography variant="h3" fontWeight={'normal'}>
                    {conteudo}
                  </Typography>
                </Stack>
              </Stack>
            }
            expandCallback={toggleExpand}
            deleteCallback={deleteCallback}
            editCallback={editCallback}
          />
        );
      })}
    </>
  );
};

export default TicketAccordion;
