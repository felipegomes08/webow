import PersonIcon from '@mui/icons-material/Person';
import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import GridAccordion from 'components/GridAccordion';
import { MarketingAffiliateAccordionProps } from 'pages/Marketing/components/MarketingAffiliateAccordion/MarketingAffiliateAccordion.type';
import { useState } from 'react';
import theme from 'theme/theme';

const MarketingAffiliateAccordion = ({
  marketingAffiliateList,
  deleteCallback,
  editCallback
}: MarketingAffiliateAccordionProps) => {
  return (
    <>
      {marketingAffiliateList.map(
        ({ nome, cpf, email, telefone, chavePix, senha }, index) => {
          const [expanded, setExpanded] = useState(false);

          const toggleExpand = (
            _: React.SyntheticEvent,
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
                  <Typography variant="h3">{nome}</Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {cpf}
                  </Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {telefone}
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
                    <Typography variant="h3">Nome: </Typography>
                    <Typography variant="h3">CPF: </Typography>
                    <Typography variant="h3">Telefone: </Typography>
                    <Typography variant="h3">Email: </Typography>
                    <Typography variant="h3">Chave-Pix: </Typography>
                    <Typography variant="h3">Senha: </Typography>
                    <Typography variant="h3">Confirmar Senha: </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="h3" fontWeight={'normal'}>
                      {nome}
                    </Typography>
                    <Typography variant="h3" fontWeight={'normal'}>
                      {cpf}
                    </Typography>
                    <Typography variant="h3" fontWeight={'normal'}>
                      {email}
                    </Typography>
                    <Typography variant="h3" fontWeight={'normal'}>
                      {telefone}
                    </Typography>
                    <Typography variant="h3" fontWeight={'normal'}>
                      {chavePix}
                    </Typography>
                    <Typography variant="h3" fontWeight={'normal'}>
                      {senha}
                    </Typography>
                    <Typography variant="h3" fontWeight={'normal'}>
                      ********
                    </Typography>
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

export default MarketingAffiliateAccordion;
