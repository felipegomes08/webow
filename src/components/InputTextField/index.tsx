import { TextField } from '@mui/material';
import { InputTextFieldProps } from 'components/InputTextField/InputTextField.type';

const InputTextField = ({ register, ...rest }: InputTextFieldProps) => {
  return (
    <TextField
      variant="standard"
      size="small"
      sx={{ width: '100%', fontSize: '5px' }}
      {...register}
      {...rest}
    />
  );
};

export default InputTextField;
