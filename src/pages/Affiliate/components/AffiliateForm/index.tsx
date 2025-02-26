import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import InputPasswordField from 'components/InputPasswordField';
import InputTextField from 'components/InputTextField';
import useMetadata from 'hooks/useMetadata';
import {
  AffiliateSchema,
  affiliateSchema
} from 'pages/Affiliate/types/Affiliate.type';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import { Uf } from 'types/metadata';
import { AffiliateFormProps } from './AffiliateForm.type';

const AffiliateForm = ({ onCreate, loading }: AffiliateFormProps) => {
  const [ufs, setUfs] = useState<Uf[]>([]);
  const { userTypes, accountTypes, userStatus } = useMetadata();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<AffiliateSchema>({
    resolver: zodResolver(affiliateSchema)
  });

  useEffect(() => {
    const fetchUfs = async () => {
      const response = await axios.get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
      );
      setUfs(response.data);
    };
    fetchUfs();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onCreate)}
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
                  register={register('cpf')}
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
                  register={register('phone')}
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

export default AffiliateForm;
