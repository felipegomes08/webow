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
      variant="standard"
      sx={{ width: '100%' }}
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
