import { TextField } from '@mui/material';
import { InputTextFieldProps } from 'components/InputTextField/InputTextField.type';

const InputTextField = ({ register, ...rest }: InputTextFieldProps) => {
  return (
    <TextField
      size="small"
      sx={{
        width: '100%',
        fontSize: '5px',
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 100px transparent inset',
          WebkitTextFillColor: '#000',
          transition: 'background-color 5000s ease-in-out 0s'
        }
      }}
      {...register}
      {...rest}
    />
  );
};

export default InputTextField;
