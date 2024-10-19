import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import PersonIcon from '@mui/icons-material/Person';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import theme from 'theme/theme';
import { UserAccordionProps } from './UserAccordion.type';

const UserAccordion = ({
  nome,
  cpf,
  email,
  telefone,
  chavePix,
  senha,
  backgroundColor
}: UserAccordionProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  return (
    <Accordion
      square={true}
      sx={{
        backgroundColor: expanded ? grey[50] : backgroundColor,
        borderRadius: theme.shape.borderRadius,
        boxShadow: 'none',
        width: '100%',
        '&:before': {
          display: 'none'
        }
      }}
      expanded={expanded}
      onChange={handleChange}
    >
      <AccordionSummary
        sx={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box
          bgcolor={grey[50]}
          borderRadius={theme.shape.borderRadius}
          border={`1.5px solid ${grey[300]}`}
          width={40}
          height={40}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {expanded ? (
            <DescriptionOutlinedIcon sx={{ color: grey[900] }} />
          ) : (
            <PersonIcon sx={{ color: grey[900] }} />
          )}
        </Box>
        <Box
          flex={1}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          mx={2}
        >
          <Typography variant="h3">Nome do Cara</Typography>
          <Typography variant="h4" fontWeight={'500'}>
            123.123.123-45
          </Typography>
          <Typography variant="h4" fontWeight={'500'}>
            34 99894-9879
          </Typography>
          <Typography variant="h4" fontWeight={'500'}>
            {new Date().toDateString()}
          </Typography>
        </Box>
        {expanded ? (
          <Box display={'flex'} alignItems={'center'}>
            <Button
              sx={{
                paddingX: '3px',
                paddingY: '3px',
                borderRadius: theme.shape.borderRadius,
                bgcolor: theme.palette.primary.main
              }}
            >
              <Typography
                color={grey[50]}
                textTransform={'capitalize'}
                fontSize={'12px'}
              >
                Finalizar
              </Typography>
            </Button>
            <IconButton
              sx={{ padding: '2px', borderRadius: theme.shape.borderRadius }}
            >
              <CloseOutlinedIcon sx={{ fontSize: '18px', color: grey[900] }} />
            </IconButton>
          </Box>
        ) : (
          <Box display={'flex'} alignItems={'center'}>
            <IconButton
              sx={{ padding: '2px', borderRadius: theme.shape.borderRadius }}
            >
              <DeleteIcon sx={{ fontSize: '18px', color: grey[900] }} />
            </IconButton>
            <IconButton
              sx={{ padding: '2px', borderRadius: theme.shape.borderRadius }}
            >
              <EditNoteOutlinedIcon
                sx={{ fontSize: '18px', color: grey[900] }}
              />
            </IconButton>
          </Box>
        )}
      </AccordionSummary>
      <AccordionDetails sx={{ width: '100%' }}>
        <Stack
          direction={'row'}
          borderRadius={theme.shape.borderRadius}
          border={`1.5px solid ${grey[300]}`}
        >
          <Stack>
            <Typography variant="h3">Nome: </Typography>
            <Typography variant="h3">CPF: </Typography>
            <Typography variant="h3">Telefone: </Typography>
            <Typography variant="h3">Email: </Typography>
            <Typography variant="h3">Chave-Pix: </Typography>
            <Typography variant="h3">Senha: </Typography>
            <Typography variant="h3">Confirmar Senha: </Typography>
          </Stack>
          <Stack>
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
      </AccordionDetails>
    </Accordion>
  );
};

export default UserAccordion;
