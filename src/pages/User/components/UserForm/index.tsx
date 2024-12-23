import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
import axios from 'axios';
import InputPasswordField from 'components/InputPasswordField';
import InputTextField from 'components/InputTextField';
import useMetadata from 'hooks/useMetadata';
import { createUser } from 'pages/User/services/userServices';
import { UserSchema, userSchema } from 'pages/User/types/User.type';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import { Uf } from 'types/metadata';

const UserForm = () => {
  const [ufs, setUfs] = useState<Uf[]>([]);
  const { userTypes, accountTypes, userStatus } = useMetadata();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema)
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

  const handleSaveUser = (user: UserSchema) => {
    createUser(user);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSaveUser)}
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
            <ReactInputMask
              {...field}
              mask="999.999.999-99"
              onChange={(e) => field.onChange(e.target.value)}
            >
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
            <ReactInputMask
              {...field}
              mask="(99) 99999-9999"
              onChange={(e) => field.onChange(e.target.value)}
            >
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

        <Controller
          name="uf"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel size="small" id="uf-select-label">
                UF
              </InputLabel>
              <Select
                size="small"
                labelId="uf-select-label"
                id="uf-select"
                value={field.value}
                label="UF"
                onChange={(e) => field.onChange(e.target.value)}
              >
                {ufs?.map((x) => (
                  <MenuItem key={x.sigla} value={x.sigla}>
                    {x.sigla}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
        <Controller
          name="accountTypeId"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel size="small" id="account-select-label">
                Tipo de conta
              </InputLabel>
              <Select
                size="small"
                labelId="account-select-label"
                id="account-select"
                value={field.value}
                label="UF"
                onChange={(e) => field.onChange(e.target.value)}
              >
                {accountTypes?.map((x) => (
                  <MenuItem key={`${x.id}-${x.name}`} value={x.id}>
                    {x.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      </Box>
      <Box width={'100%'} display="flex" gap={1}>
        <Controller
          name="userTypeId"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel size="small" id="user-select-label">
                Tipo de usuário
              </InputLabel>
              <Select
                size="small"
                labelId="user-select-label"
                id="user-select"
                value={field.value}
                label="UF"
                onChange={(e) => field.onChange(e.target.value)}
              >
                {userTypes?.map((x) => (
                  <MenuItem key={`${x.id}-${x.name}`} value={x.id}>
                    {x.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="statusId"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel size="small" id="status-select-label">
                Status
              </InputLabel>
              <Select
                size="small"
                labelId="status-select-label"
                id="status-select"
                value={field.value}
                label="UF"
                onChange={(e) => field.onChange(e.target.value)}
              >
                {userStatus?.map((x) => (
                  <MenuItem key={`${x.id}-${x.name}`} value={x.id}>
                    {x.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      </Box>
      <Button type="submit">Salvar</Button>
    </form>
  );
};

export default UserForm;
