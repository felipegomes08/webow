import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { InputPasswordFieldProps } from './InputPasswordField.type';

const InputPasswordField = ({ register, ...rest }: InputPasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      size={'small'}
      sx={{
        width: '100%',
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 100px transparent inset',
          WebkitTextFillColor: '#000',
          transition: 'background-color 5000s ease-in-out 0s'
        }
      }}
      type={showPassword ? 'text' : 'password'}
      {...register}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              size="small"
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOff sx={{ fontSize: '15px' }} />
              ) : (
                <Visibility sx={{ fontSize: '15px' }} />
              )}
            </IconButton>
          </InputAdornment>
        )
      }}
      {...rest}
    />
  );
};

export default InputPasswordField;
