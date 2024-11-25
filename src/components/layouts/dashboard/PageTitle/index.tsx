import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarBreadcrumbs from 'components/layouts/dashboard/NavbarBreadcrumbs';
import { PageTitleProps } from 'components/layouts/dashboard/PageTitle/PageTitle.type';
import { useEffect } from 'react';
import { layoutPadding } from 'theme/globalStyles';

const PageTitle = ({ title, breadcrumb }: PageTitleProps) => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', delay: 0 });
  }, []);

  return (
    <Box width={'100%'} marginBottom={layoutPadding} data-aos="fade-up">
      <NavbarBreadcrumbs breadcrumb={breadcrumb} />
      <Typography variant="h1">{title}</Typography>
    </Box>
  );
};

export default PageTitle;
