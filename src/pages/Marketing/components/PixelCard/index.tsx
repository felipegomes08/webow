import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { PixelCardProps } from 'pages/Marketing/components/PixelCard/PixelCard.type';
import theme from 'theme/theme';

const PixelCard = ({ pixel }: PixelCardProps) => {
  return (
    <Stack
      bgcolor={grey[50]}
      borderRadius={theme.shape.borderRadius}
      p={2}
      spacing={2}
    >
      <Typography variant="h3">Pixel Meta:</Typography>
      <Stack
        direction={'row'}
        borderRadius={theme.shape.borderRadius}
        border={`1.5px solid ${grey[300]}`}
        p={2}
      >
        <Typography variant="h4">{pixel}</Typography>
      </Stack>
    </Stack>
  );
};

export default PixelCard;
