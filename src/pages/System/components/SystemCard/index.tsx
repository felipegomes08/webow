import { Check, Close, Edit } from '@mui/icons-material';
import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  TextField
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { SystemCardProps } from 'pages/System/components/SystemCard/SystemCard.type';
import { useState } from 'react';
import { toast } from 'react-toastify';
import theme from 'theme/theme';

const SystemCard = ({
  configuracao,
  handleUpdateSystem,
  loading
}: SystemCardProps) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(
    JSON.stringify(configuracao, null, 2)
  );

  const handleSave = async () => {
    try {
      const jsonValue = JSON.parse(value);
      await handleUpdateSystem(jsonValue);
      setIsEditMode(false);
    } catch (error) {
      toast.error('Objeto JSON inválido!');
    }
  };

  return (
    <Stack
      width={'100%'}
      bgcolor={grey[50]}
      borderRadius={theme.shape.borderRadius}
      p={2}
      spacing={2}
    >
      <Box position={'relative'}>
        <TextField
          multiline
          value={value}
          onChange={(e) => setValue(e.target.value)}
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              border: 'none',
              '& fieldset': {
                border: 'none'
              },
              '&:hover fieldset': {
                border: 'none'
              },
              '&.Mui-focused fieldset': {
                border: 'none'
              }
            },
            '& .MuiOutlinedInput-input': {
              padding: 0,
              fontFamily: 'monospace'
            }
          }}
          disabled={!isEditMode}
        />
        {!isEditMode ? (
          <IconButton
            sx={{
              padding: '2px',
              borderRadius: theme.shape.borderRadius,
              position: 'absolute',
              right: 0,
              top: 0,
              background: 'darkOrange',
              ':hover': { background: 'orange' }
            }}
            onClick={() => setIsEditMode(true)}
          >
            <Edit sx={{ fontSize: '28px', color: grey[200] }} />
          </IconButton>
        ) : (
          <Stack
            flexDirection={'row'}
            gap={1}
            position={'absolute'}
            right={0}
            top={0}
          >
            <IconButton
              sx={{
                borderRadius: theme.shape.borderRadius,
                background: 'green',
                ':hover': { background: 'darkGreen' }
              }}
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={18} />
              ) : (
                <Check sx={{ fontSize: '28px', color: grey[200] }} />
              )}
            </IconButton>
            <IconButton
              sx={{
                borderRadius: theme.shape.borderRadius,
                background: 'red',
                ':hover': { background: 'darkRed' }
              }}
              onClick={() => {
                setValue(JSON.stringify(configuracao, null, 2));
                setIsEditMode(false);
              }}
              disabled={loading}
            >
              <Close sx={{ fontSize: '28px', color: grey[200] }} />
            </IconButton>
          </Stack>
        )}
      </Box>
    </Stack>
  );
};

export default SystemCard;
