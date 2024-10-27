import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CustomTabsProps } from 'components/Tabs/CustomTabs.type';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import theme from 'theme/theme';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: string;
  value: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      bgcolor={grey[300]}
      borderRadius={theme.shape.borderRadius}
      sx={{
        borderTopLeftRadius: 0
      }}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

const CustomTabs = ({ listTabs, mainRoute }: CustomTabsProps) => {
  const { tab } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', delay: 0 });
  }, []);

  const [tabIndex, setTabIndex] = React.useState(tab || listTabs[0].value);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
    navigate(`${mainRoute}/${newValue}`, { replace: true });
  };

  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        TabIndicatorProps={{ sx: { display: 'none' } }}
        data-aos="fade-up"
      >
        {listTabs.map((tab) => (
          <Tab
            data-aos="fade-up"
            sx={{
              marginRight: 1,
              bgcolor: tabIndex === tab.value ? grey[300] : grey[200],
              borderRadius: theme.shape.borderRadius,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              textTransform: 'capitalize',
              fontWeight: 'bold',
              fontSize: '12px',
              color: grey[900],
              '&.Mui-selected': {
                color: grey[900]
              },
              '&:hover': {
                bgcolor: grey[300]
              }
            }}
            value={tab.value}
            label={tab.label}
          />
        ))}
      </Tabs>
      {listTabs.map((tab) => (
        <TabPanel value={tabIndex} index={tab.value} data-aos="fade-up">
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={2}
          >
            {tab.children}
          </Box>
        </TabPanel>
      ))}
    </>
  );
};

export default CustomTabs;
