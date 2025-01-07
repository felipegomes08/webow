import { OutlinedSelectProps } from '@mui/material';
import { ReactNode } from 'react';
import { FieldError, FieldValues } from 'react-hook-form';

export interface SelectDataProps extends Omit<OutlinedSelectProps, 'variant'> {
  register: FieldValues;
  label?: string;
  id: string;
  children?: ReactNode;
  fieldError?: FieldError | undefined;
  variant?: OutlinedSelectProps['variant'];
}
