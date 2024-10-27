import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { AddButtonTabProps } from 'components/AddButtonTab/AddButtonTab.type';
import theme from 'theme/theme';

const AddButtonTab = ({ ...rest }: AddButtonTabProps) => {
  return (
    <IconButton
      aria-label="new"
      sx={{
        bgcolor: grey[50],
        width: '34px',
        height: '34px',
        borderRadius: theme.shape.borderRadius
      }}
      {...rest}
    >
      <AddIcon sx={{ color: grey[900] }} />
    </IconButton>
  );
};

export default AddButtonTab;
