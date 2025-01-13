import { Stack, Typography } from '@mui/material';
import { TextDescriptionProps } from './TextDescription.type';

const TextDescription = ({ label, value }: TextDescriptionProps) => {
  if (value === undefined || value === null) return;
  return (
    <Stack direction={'row'} spacing={1}>
      <Typography variant="h3" minWidth={150}>
        {label}
      </Typography>
      <Typography variant="h3" fontWeight={'normal'}>
        {value}
      </Typography>
    </Stack>
  );
};

export default TextDescription;
