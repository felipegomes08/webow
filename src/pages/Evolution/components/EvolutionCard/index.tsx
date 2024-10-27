import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { EvolutionCardProps } from 'pages/Evolution/components/EvolutionCard/EvolutionCard.type';
import EvolutionChart from 'pages/Evolution/components/EvolutionChart';
import { useEffect } from 'react';
import theme from 'theme/theme';
import EvolutionLineChart from '../EvolutionLineChart';

const EvolutionCard = ({}: EvolutionCardProps) => {
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
        <EvolutionChart title={'Total Depositado'} />
      </Grid>
      <Grid
        bgcolor={grey[50]}
        borderRadius={theme.shape.borderRadius}
        p={2}
        size={6}
      >
        <EvolutionChart title={'Lucro Liquido'} />
      </Grid>
      <Grid
        bgcolor={grey[50]}
        borderRadius={theme.shape.borderRadius}
        p={2}
        size={12}
      >
        <EvolutionLineChart />
      </Grid>
    </Grid>
  );
};

export default EvolutionCard;
