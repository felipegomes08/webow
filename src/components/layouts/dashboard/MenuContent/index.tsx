import { Typography } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import { Link, useLocation } from 'react-router-dom';
import { localRoutes } from 'routes/localRoutes';
import theme from 'theme/theme';

const MenuContent = () => {
  const { pathname } = useLocation();
  const isSelected = (path: string) => {
    return pathname.includes(path);
  };
  return (
    <Stack width={'100%'} sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
      <List dense>
        {localRoutes
          .filter((item) => item.showSidebar)
          .map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
              <Link to={item.path} style={{ textDecoration: 'none' }}>
                <ListItemButton
                  selected={isSelected(item.path)}
                  sx={{
                    borderRadius: theme.shape.borderRadius,
                    paddingY: 1,
                    '&.Mui-selected': {
                      backgroundColor: grey[200]
                    },
                    '&.Mui-focusVisible': {
                      backgroundColor: grey[200]
                    },
                    ':hover': {
                      backgroundColor: grey[200]
                    }
                  }}
                >
                  <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <img src={item?.icon} width={'20px'} />
                    <Typography
                      variant="h3"
                      sx={{
                        color: isSelected(item.path) ? orange[800] : grey[900]
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
      </List>
    </Stack>
  );
};

export default MenuContent;
