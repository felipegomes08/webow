import { Check, Close, Edit } from '@mui/icons-material';
import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  TextField
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import { toast } from 'react-toastify';
import theme from 'theme/theme';
import { PixelCardProps } from './PixelCard.type';

const PixelCard = ({
  configuracao,
  handleUpdatePixel,
  loading
}: PixelCardProps) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string | undefined>(configuracao);

  const handleSave = async () => {
    try {
      await handleUpdatePixel(value || '');
      setIsEditMode(false);
    } catch (error) {
      toast.error('Pixel inválido!');
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
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
                setValue(configuracao);
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

export default PixelCard;
