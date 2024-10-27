import PersonIcon from '@mui/icons-material/Person';
import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import GridAccordion from 'components/GridAccordion';
import { AffiliateAccordionProps } from 'pages/Affiliates/components/AffiliateAccordion/AffiliateAccordion.type';
import { useState } from 'react';
import theme from 'theme/theme';

const AffiliateAccordion = ({ affiliateList }: AffiliateAccordionProps) => {
  return (
    <>
      {affiliateList.map(
        (
          {
            nome,
            link,
            codigo,
            afiliados,
            cpa,
            cpm,
            receita,
            cpf,
            email,
            telefone,
            chavePix,
            senha
          },
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
              expandIcon
              index={index}
              icon={<PersonIcon sx={{ color: grey[900] }} />}
              titleContent={
                <>
                  <Typography variant="h3">{nome}</Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {afiliados}
                  </Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {cpa}
                  </Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {cpm}
                  </Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {receita}
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
                      <Typography variant="h3">Link: </Typography>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography variant="h3" fontWeight={'normal'}>
                        {link}
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
                      <Typography variant="h3">Código: </Typography>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography variant="h3" fontWeight={'normal'}>
                        {codigo}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              }
              expandCallback={toggleExpand}
            />
          );
        }
      )}
    </>
  );
};

export default AffiliateAccordion;
