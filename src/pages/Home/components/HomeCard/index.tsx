import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HomeCardProps } from 'pages/Home/components/HomeCard/HomeCard.type';
import HomeChart from 'pages/Home/components/HomeChart';
import { useEffect } from 'react';
import theme from 'theme/theme';
import HomeLineChart from '../HomeLineChart';

const HomeCard = ({}: HomeCardProps) => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', delay: 0 });
  }, []);
  return (
    <Grid container spacing={2} width={'100%'} data-aos="fade-up">
      <Grid
        bgcolor={grey[50]}
        borderRadius={theme.shape.borderRadius}
        p={2}
        size={6}
      >
        <HomeChart title={'Total Depositado'} />
      </Grid>
      <Grid
        bgcolor={grey[50]}
        borderRadius={theme.shape.borderRadius}
        p={2}
        size={6}
      >
        <HomeChart title={'Lucro Liquido'} />
      </Grid>
      <Grid
        bgcolor={grey[50]}
        borderRadius={theme.shape.borderRadius}
        p={2}
        size={12}
      >
        <HomeLineChart />
      </Grid>
    </Grid>
  );
};

export default HomeCard;
