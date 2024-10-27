import { StandardTextFieldProps } from '@mui/material';
import { FieldValues } from 'react-hook-form';

export interface InputTextFieldProps extends StandardTextFieldProps {
  register: FieldValues;
}
