import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, CircularProgress, MenuItem } from '@mui/material';
import axios from 'axios';
import InputPasswordField from 'components/InputPasswordField';
import InputTextField from 'components/InputTextField';
import SelectData from 'components/SelectData';
import {
  messageUpdateSchema,
  MessageUpdateSchema
} from 'pages/Support/types/Support.type';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import { Uf } from 'types/metadata';
import { formatCPF, formatPhone } from 'utils/formatters';
import { MessageUpdateFormProps } from './MessageUpdateForm.type';

const MessageUpdateForm = ({
  onSave,
  messageUpdate,
  loading
}: MessageUpdateFormProps) => {
  const [ufs, setUfs] = useState<Uf[]>([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<MessageUpdateSchema>({
    resolver: zodResolver(messageUpdateSchema),
    defaultValues: {
      id: messageUpdate ? messageUpdate.id : '',
      name: messageUpdate ? messageUpdate.name : '',
      cpf: messageUpdate ? formatCPF(messageUpdate.cpf) : '',
      email: messageUpdate ? messageUpdate.email : '',
      phone: messageUpdate ? formatPhone(messageUpdate.phone) : '',
      uf: messageUpdate ? messageUpdate.uf : '',
      pixKey: messageUpdate ? messageUpdate.pixKey : '',
      balance: messageUpdate ? messageUpdate.balance : 0,
      affiliateId: messageUpdate ? messageUpdate.affiliateId : '',
      accountType: messageUpdate ? messageUpdate.accountType.name : '',
      status: messageUpdate ? messageUpdate.status.name : ''
    }
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
      onSubmit={handleSubmit((message) => onSave(message.id!, message))}
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
        <Controller
          name="uf"
          control={control}
          render={({ field, fieldState }) => (
            <SelectData
              id="uf-select"
              fieldError={fieldState.error}
              register={register('uf')}
              label="UF"
              {...field}
            >
              {ufs?.map((x) => (
                <MenuItem key={x.sigla} value={x.sigla}>
                  {x.sigla}
                </MenuItem>
              ))}
            </SelectData>
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
      <Button type="submit" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Salvar'}
      </Button>
    </form>
  );
};

export default MessageUpdateForm;
