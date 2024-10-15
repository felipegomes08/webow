import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { NavbarBreadcrumb } from 'components/layouts/dashboard/NavbarBreadcrumbs/NavbarBreadcrumb.type';
import { Link } from 'react-router-dom';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.action.disabled,
    margin: 1
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center'
  }
}));

const NavbarBreadcrumbs = ({ breadcrumb }: NavbarBreadcrumb) => {
  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon sx={{ fontSize: '12px' }} />}
    >
      {breadcrumb?.map((item, index) => (
        <Link to={item.path} key={item.path} style={{ textDecoration: 'none' }}>
          <Typography
            variant="subtitle2"
            sx={{
              color:
                index === breadcrumb.length - 1
                  ? 'text.primary'
                  : 'text.secondary',
              fontWeight: 600
            }}
          >
            {item.label}
          </Typography>
        </Link>
      ))}
    </StyledBreadcrumbs>
  );
};

export default NavbarBreadcrumbs;
