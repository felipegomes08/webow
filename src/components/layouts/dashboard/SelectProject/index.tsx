import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent, selectClasses } from '@mui/material/Select';
import StarIcon from 'assets/starIcon.svg';
import * as React from 'react';
import theme from 'theme/theme';

const SelectProject = () => {
  const [company, setCompany] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCompany(event.target.value as string);
  };

  return (
    <Select
      labelId="company-select"
      id="company-simple-select"
      value={company}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Select company' }}
      fullWidth
      sx={{
        borderRadius: theme.shape.borderRadius,
        background: grey[200],
        maxHeight: 56,
        width: 215,
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none'
        },
        '&.MuiList-root': {
          p: '8px'
        },
        [`& .${selectClasses.select}`]: {
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          pl: 1
        }
      }}
    >
      <MenuItem value="">
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: theme.shape.borderRadius,
            background: grey[50],
            marginRight: 2,
            border: 'none'
          }}
        >
          <img src={StarIcon} width={'15px'} />
        </Box>
        <Box>
          <Typography variant="h3">MonkMaster</Typography>
          <Typography variant="subtitle1">webow</Typography>
        </Box>
      </MenuItem>
    </Select>
  );
};

export default SelectProject;
