import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { InterfaceCardProps } from 'pages/System/components/InterfaceCard/InterfaceCard.type';
import theme from 'theme/theme';

const InterfaceCard = ({ configuracao }: InterfaceCardProps) => {
  return (
    <Stack
      width={'100%'}
      bgcolor={grey[50]}
      borderRadius={theme.shape.borderRadius}
      p={2}
      spacing={2}
    >
      <Typography variant="h4" whiteSpace={'pre-line'}>
        {configuracao}
      </Typography>
    </Stack>
  );
};

export default InterfaceCard;
