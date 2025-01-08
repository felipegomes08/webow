import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, MenuItem } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import InputPasswordField from 'components/InputPasswordField';
import InputTextField from 'components/InputTextField';
import SelectData from 'components/SelectData';
import useMetadata from 'hooks/useMetadata';
import { createUser } from 'pages/User/services/userServices';
import { UserSchema, userSchema } from 'pages/User/types/User.type';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { Uf } from 'types/metadata';
import { UserFormProps } from './UserForm.type';

const UserForm = ({ onClose }: UserFormProps) => {
  const [ufs, setUfs] = useState<Uf[]>([]);
  const { userTypes, accountTypes, userStatus } = useMetadata();
  const queryClient = useQueryClient();
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

  const handleSaveUser = async (user: UserSchema) => {
    const result = await createUser(user);
    if (result.success) {
      queryClient.invalidateQueries({ queryKey: ['get-users'] });
      queryClient.invalidateQueries({ queryKey: ['get-banned-users'] });
      queryClient.invalidateQueries({ queryKey: ['get-online-users'] });
      toast.success('Usuário cadastrado com sucesso!', {
        position: 'top-center'
      });
      onClose();
    } else {
      toast.error('Erro ao cadastrar usuário!', {
        position: 'top-center'
      });
    }
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
        <SelectData
          id="uf-select"
          fieldError={errors.uf}
          register={register('uf')}
          label="UF"
        >
          {ufs?.map((x) => (
            <MenuItem key={x.sigla} value={x.sigla}>
              {x.sigla}
            </MenuItem>
          ))}
        </SelectData>
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
        <SelectData
          id="account-select"
          label="Tipo de Conta"
          fieldError={errors.accountType}
          register={register('accountType')}
        >
          {accountTypes?.map((x) => (
            <MenuItem key={`${x.id}-${x.name}`} value={x.name}>
              {x.label}
            </MenuItem>
          ))}
        </SelectData>
      </Box>
      <Box width={'100%'} display="flex" gap={1}>
        <SelectData
          id="user-select"
          label="Tipo de Usuário"
          fieldError={errors.userType}
          register={register('userType')}
        >
          {userTypes?.map((x) => (
            <MenuItem key={`${x.id}-${x.name}`} value={x.name}>
              {x.label}
            </MenuItem>
          ))}
        </SelectData>
        <SelectData
          id="status-select"
          label="Status"
          fieldError={errors.status}
          register={register('status')}
        >
          {userStatus?.map((x) => (
            <MenuItem key={`${x.id}-${x.name}`} value={x.name}>
              {x.label}
            </MenuItem>
          ))}
        </SelectData>
      </Box>
      <Box width={'100%'} display="flex" gap={1}>
        <InputTextField
          label="Saldo"
          type="number"
          error={!!errors.balance}
          helperText={errors.balance && errors.balance.message}
          register={register('balance')}
          fullWidth
        />
        <InputTextField
          label="ID do Afiliado"
          error={!!errors.affiliateId}
          helperText={errors.affiliateId && errors.affiliateId.message}
          register={register('affiliateId')}
          fullWidth
        />
      </Box>
      <Button type="submit">Salvar</Button>
    </form>
  );
};

export default UserForm;
