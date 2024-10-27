import PersonIcon from '@mui/icons-material/Person';
import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import GridAccordion from 'components/GridAccordion';
import { MarketingUpSellAccordionProps } from 'pages/Marketing/components/MarketingUpSellAccordion/MarketingUpSellAccordion.type';
import { useState } from 'react';
import theme from 'theme/theme';

const MarketingUpSellAccordion = ({
  marketingUpSellList,
  deleteCallback,
  editCallback
}: MarketingUpSellAccordionProps) => {
  return (
    <>
      {marketingUpSellList.map(
        (
          { titulo, condicao, mensagem, imagem, se, acao, tempo, unidade },
          index
        ) => {
          const [expanded, setExpanded] = useState(false);

          const toggleExpand = (
            event: React.SyntheticEvent,
            isExpanded: boolean
          ) => {
            setExpanded(isExpanded);
          };
          return (
            <GridAccordion
              expanded={expanded}
              index={index}
              icon={<PersonIcon sx={{ color: grey[900] }} />}
              titleContent={
                <>
                  <Typography variant="h3">{titulo}</Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {condicao}
                  </Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {tempo}
                  </Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {unidade}
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
                      <Typography variant="h3">Título: </Typography>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography variant="h3" fontWeight={'normal'}>
                        {titulo}
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
                      <Typography variant="h3">Condição: </Typography>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography variant="h3" fontWeight={'normal'}>
                        {condicao}
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
                      <Typography variant="h3">Mensagem: </Typography>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography variant="h3" fontWeight={'normal'}>
                        {mensagem}
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
                      <Typography variant="h3">Imagem: </Typography>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography variant="h3" fontWeight={'normal'}>
                        {imagem}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <Stack
                      direction={'row'}
                      borderRadius={theme.shape.borderRadius}
                      border={`1.5px solid ${grey[300]}`}
                      p={2}
                      width={'100%'}
                    >
                      <Stack mr={4} spacing={1}>
                        <Typography variant="h3">Se: </Typography>
                      </Stack>
                      <Stack spacing={1}>
                        <Typography variant="h3" fontWeight={'normal'}>
                          {se}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      direction={'row'}
                      borderRadius={theme.shape.borderRadius}
                      border={`1.5px solid ${grey[300]}`}
                      p={2}
                      width={'100%'}
                    >
                      <Stack mr={4} spacing={1}>
                        <Typography variant="h3">Acao: </Typography>
                      </Stack>
                      <Stack spacing={1}>
                        <Typography variant="h3" fontWeight={'normal'}>
                          {acao}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <Stack
                      width={'100%'}
                      direction={'row'}
                      borderRadius={theme.shape.borderRadius}
                      border={`1.5px solid ${grey[300]}`}
                      p={2}
                    >
                      <Stack mr={4} spacing={1}>
                        <Typography variant="h3">Tempo: </Typography>
                      </Stack>
                      <Stack spacing={1}>
                        <Typography variant="h3" fontWeight={'normal'}>
                          {tempo}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      width={'100%'}
                      direction={'row'}
                      borderRadius={theme.shape.borderRadius}
                      border={`1.5px solid ${grey[300]}`}
                      p={2}
                    >
                      <Stack mr={4} spacing={1}>
                        <Typography variant="h3">Unidade: </Typography>
                      </Stack>
                      <Stack spacing={1}>
                        <Typography variant="h3" fontWeight={'normal'}>
                          {unidade}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              }
              expandCallback={toggleExpand}
              deleteCallback={deleteCallback}
              editCallback={editCallback}
            />
          );
        }
      )}
    </>
  );
};

export default MarketingUpSellAccordion;
