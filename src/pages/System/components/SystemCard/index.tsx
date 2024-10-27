import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { SystemCardProps } from 'pages/System/components/SystemCard/SystemCard.type';
import theme from 'theme/theme';

const SystemCard = ({ configuracao }: SystemCardProps) => {
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

export default SystemCard;
