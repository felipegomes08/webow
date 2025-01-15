import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, CircularProgress } from '@mui/material';
import InputPasswordField from 'components/InputPasswordField';
import InputTextField from 'components/InputTextField';
import {
  AffiliateUpdateSchema,
  affiliateUpdateSchema
} from 'pages/Affiliate/types/Affiliate.type';
import { Controller, useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import { formatCPF, formatPhone } from 'utils/formatters';
import { AffiliateUpdateFormProps } from './AffiliateUpdateForm.type';

const AffiliateUpdateForm = ({
  onSave,
  affiliateUpdate,
  loading
}: AffiliateUpdateFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<AffiliateUpdateSchema>({
    resolver: zodResolver(affiliateUpdateSchema),
    defaultValues: {
      id: affiliateUpdate ? affiliateUpdate.id : '',
      name: affiliateUpdate ? affiliateUpdate.name : '',
      cpf: affiliateUpdate ? formatCPF(affiliateUpdate.cpf || '') : '',
      email: affiliateUpdate ? affiliateUpdate.email : '',
      password: affiliateUpdate ? affiliateUpdate.password : '',
      phone: affiliateUpdate ? formatPhone(affiliateUpdate.phone || '') : '',
      pixKey: affiliateUpdate ? affiliateUpdate.pixKey : '',
      code: affiliateUpdate ? affiliateUpdate.code : '',
      link: affiliateUpdate ? affiliateUpdate.link : ''
    }
  });

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit((affiliate) => onSave(affiliate.id!, affiliate))}
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 10
      }}
    >
      <Box width={'100%'} display="flex" gap={1}>
        <InputTextField
          label="Nome"
          error={!!errors.name}
          helperText={errors.name && errors.name.message}
          register={register('name')}
        />
        <Controller
          name="cpf"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <ReactInputMask {...field} mask="999.999.999-99" maskChar="">
              {(inputProps) => (
                <InputTextField
                  {...inputProps}
                  type="text"
                  label="CPF"
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            </ReactInputMask>
          )}
        />
      </Box>
      <Box width={'100%'} display="flex" gap={1}>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <ReactInputMask {...field} mask="(99) 99999-9999" maskChar="">
              {(inputProps) => (
                <InputTextField
                  {...inputProps}
                  type="text"
                  label="Telefone"
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            </ReactInputMask>
          )}
        />
      </Box>
      <Box width={'100%'} display="flex" gap={1}>
        <InputTextField
          label="Email"
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
          register={register('email')}
        />
        <InputPasswordField
          label="Senha"
          error={!!errors.password}
          helperText={errors.password && errors.password.message}
          register={register('password')}
        />
      </Box>
      <Box width={'100%'} display="flex" gap={1}>
        <InputPasswordField
          label="Chave PIX"
          error={!!errors.pixKey}
          helperText={errors.pixKey && errors.pixKey.message}
          register={register('pixKey')}
        />
      </Box>
      <Box width={'100%'} display="flex" gap={1}>
        <InputTextField
          label="Código"
          error={!!errors.code}
          helperText={errors.code && errors.code.message}
          register={register('code')}
        />
        <InputTextField
          label="Link"
          error={!!errors.link}
          helperText={errors.link && errors.link.message}
          register={register('link')}
        />
      </Box>
      <Button type="submit" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Salvar'}
      </Button>
    </form>
  );
};

export default AffiliateUpdateForm;
