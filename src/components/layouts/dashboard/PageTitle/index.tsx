import { Box, Typography } from '@mui/material';
import NavbarBreadcrumbs from 'components/layouts/dashboard/NavbarBreadcrumbs';
import { PageTitleProps } from 'components/layouts/dashboard/PageTitle/PageTitle.type';

const PageTitle = ({ title, breadcrumb }: PageTitleProps) => {
  return (
    <Box width={'100%'} my={5}>
      <NavbarBreadcrumbs breadcrumb={breadcrumb} />
      <Typography variant="h1">{title}</Typography>
    </Box>
  );
};

export default PageTitle;
