import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { CustomTabsProps } from 'components/forms/Tabs/CustomTabs.type';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import theme from 'theme/theme';
import AddButtonTab from '../AddButtonTab';

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
      >
        {listTabs.map((tab) => (
          <Tab
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
        <TabPanel value={tabIndex} index={tab.value}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={2}
          >
            <AddButtonTab />
            {tab.children}
          </Box>
        </TabPanel>
      ))}
    </>
  );
};

export default CustomTabs;
