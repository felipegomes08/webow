import { FormControl, InputLabel, Select } from '@mui/material';
import { SelectDataProps } from './SelectData.type';

const SelectData = ({
  register,
  label,
  id,
  children,
  fieldError,
  variant = 'outlined',
  ...rest
}: SelectDataProps) => {
  const labelId = `${id}-label`;
  return (
    <FormControl fullWidth>
      <InputLabel size="small" id={labelId} variant={variant}>
        {label}
      </InputLabel>
      <Select
        id={id}
        size="small"
        labelId={labelId}
        label={label}
        error={!!fieldError}
        variant={variant}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200
            }
          }
        }}
        {...register}
        {...rest}
      >
        {children}
      </Select>
      <span
        style={{
          fontSize: '11px',
          marginTop: '4px',
          marginLeft: '14px',
          color: '#d32f2f'
        }}
      >
        {fieldError && fieldError.message}
      </span>
    </FormControl>
  );
};

export default SelectData;
