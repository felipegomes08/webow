import PersonIcon from '@mui/icons-material/Person';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import GridAccordion from 'components/GridAccordion';
import Pagination from 'components/Pagination';
import { useState } from 'react';
import theme from 'theme/theme';
import { AffiliateAccordionProps } from './AffiliateAccordion.type';

const AffiliateAccordion = ({
  affiliateGridResponseData,
  deleteCallback,
  editCallback,
  isLoading,
  page,
  limit
}: AffiliateAccordionProps) => {
  if (isLoading) return <CircularProgress />;
  return (
    <>
      {affiliateGridResponseData?.affiliates?.map(
        ({ id, name, cpf, email, phone, pixKey, affiliateType }, index) => {
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
                    <Typography variant="h3">Nome: </Typography>
                    <Typography variant="h3">CPF: </Typography>
                    <Typography variant="h3">Telefone: </Typography>
                    <Typography variant="h3">Email: </Typography>
                    <Typography variant="h3">Chave-Pix: </Typography>
                    <Typography variant="h3">Tipo: </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="h3" fontWeight={'normal'}>
                      {name}
                    </Typography>
                    <Typography variant="h3" fontWeight={'normal'}>
                      {cpf}
                    </Typography>
                    <Typography variant="h3" fontWeight={'normal'}>
                      {email}
                    </Typography>
                    <Typography variant="h3" fontWeight={'normal'}>
                      {phone}
                    </Typography>
                    <Typography variant="h3" fontWeight={'normal'}>
                      {pixKey}
                    </Typography>
                    <Typography variant="h3" fontWeight={'normal'}>
                      {affiliateType.name}
                    </Typography>
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
      {affiliateGridResponseData && (
        <Pagination
          page={page}
          total={affiliateGridResponseData.total}
          limit={limit}
        />
      )}
    </>
  );
};

export default AffiliateAccordion;
