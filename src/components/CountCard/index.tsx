import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CountCardProps } from 'components/CountCard/CountCard.type';
import { useEffect, useRef } from 'react';
import theme from 'theme/theme';

const CountCard = ({ label, value, color }: CountCardProps) => {
  const countupRef = useRef<HTMLSpanElement>(null);
  let countUpAnim;

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', delay: 0 });
  }, []);

  useEffect(() => {
    initCountUp();
  }, []);

  async function initCountUp() {
    const countUpModule = await import('countup.js');
    if (countupRef.current) {
      countUpAnim = new countUpModule.CountUp(countupRef.current, value);
      if (!countUpAnim.error) {
        countUpAnim.start();
      } else {
        console.error(countUpAnim.error);
      }
    }
  }

  return (
    <Box
      bgcolor={grey[50]}
      border={`1.5px solid ${grey[300]}`}
      borderRadius={theme.shape.borderRadius}
      width={'100%'}
      data-aos="fade-up"
      p={2}
    >
      <Typography variant="h3">{label}</Typography>
      <Typography variant="h1" ref={countupRef} color={color}>
        0
      </Typography>
    </Box>
  );
};

export default CountCard;
