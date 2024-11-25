import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import MenuContent from 'components/layouts/dashboard/MenuContent';
import SelectProject from 'components/layouts/dashboard/SelectProject';
import { sidebarWidth } from 'theme/globalStyles';

const SideMenu = () => {
  const theme = useTheme();

  return (
    <Box
      width={sidebarWidth}
      borderRadius={theme.shape.borderRadius}
      sx={{
        background: grey[50],
        border: `solid ${grey[400]} 1px`,
        padding: 2
      }}
    >
      <SelectProject />

      <MenuContent />
    </Box>
  );
};

export default SideMenu;
