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
import { useState } from 'react';
import { toast } from 'react-toastify';
import theme from 'theme/theme';
import { copyToClipboard, formatCurrency } from 'utils/formatters';
import { AffiliateAccordionProps } from './AffiliateAccordion.type';

const AffiliateAccordion = ({
  affiliateGridResponseData,
  editCallback,
  editLoading,
  isLoading,
  page,
  limit
}: AffiliateAccordionProps) => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const handleCopy = async (text: string) => {
    const result = await copyToClipboard(text);
    if (result) {
      toast.info('Chave Pix copiada para área de transferencia');
    }
  };

  if (isLoading) return <CircularProgress />;
  return (
    <>
      {affiliateGridResponseData?.affiliates?.map(
        ({ id, code, link, balance, user, userId }, index) => {
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
                    {code}
                  </Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {link}
                  </Typography>
                  <Typography variant="h4" fontWeight={'500'}>
                    {formatCurrency(balance)}
                  </Typography>
                </>
              }
              detailsContent={
                <Box p={2} display={'flex'} gap={2} flexDirection={'column'}>
                  <Stack
                    borderRadius={theme.shape.borderRadius}
                    border={`1.5px solid ${grey[300]}`}
                    px={4}
                    py={2}
                    direction={'row'}
                    alignItems={'center'}
                  >
                    <TextDescription label="Link:" value={link} />
                    <Button size="small" onClick={() => handleCopy(link)}>
                      <ContentCopyIcon fontSize="small" />
                    </Button>
                  </Stack>
                  <Stack
                    borderRadius={theme.shape.borderRadius}
                    border={`1.5px solid ${grey[300]}`}
                    px={4}
                    py={2}
                    direction={'row'}
                    alignItems={'center'}
                  >
                    <TextDescription label="Código:" value={code} />
                    <Button size="small" onClick={() => handleCopy(code)}>
                      <ContentCopyIcon fontSize="small" />
                    </Button>
                  </Stack>
                </Box>
              }
              expandCallback={toggleExpand}
              editCallback={() =>
                editCallback({
                  id,
                  code,
                  cpf: user.cpf,
                  email: user.email,
                  password: user.password,
                  link,
                  name: user.name,
                  phone: user.phone,
                  pixKey: user.pixKey,
                  userId: userId
                })
              }
              editLoading={editLoading}
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
