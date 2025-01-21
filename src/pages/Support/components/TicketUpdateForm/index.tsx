import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, CircularProgress, MenuItem } from '@mui/material';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import InputTextField from 'components/InputTextField';
import SelectData from 'components/SelectData';
import {
  ticketUpdateSchema,
  TicketUpdateSchema
} from 'pages/Support/types/Support.type';
import { getUsers } from 'pages/User/services/userServices';
import { UserGridResponseData } from 'pages/User/types/UserApi.type';
import { Controller, useForm } from 'react-hook-form';
import { APIResponse } from 'types/api/Api.type';
import { TicketUpdateFormProps } from './TicketUpdateForm.type';

const TicketUpdateForm = ({
  onSave,
  ticketUpdate,
  loading
}: TicketUpdateFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TicketUpdateSchema>({
    resolver: zodResolver(ticketUpdateSchema),
    defaultValues: {
      id: ticketUpdate ? ticketUpdate.id : '',
      subject: ticketUpdate ? ticketUpdate.subject : '',
      deleted: ticketUpdate ? ticketUpdate.deleted : false,
      userId: ticketUpdate ? ticketUpdate.userId : '',
      supportId: ticketUpdate ? ticketUpdate.supportId : ''
    }
  });

  const { data: users, isLoading: isUserActiveLoading } = useQuery<
    UserGridResponseData | undefined
  >({
    queryKey: ['get-active-users'],
    queryFn: async () => {
      const response: APIResponse<UserGridResponseData> = await getUsers({
        page: 0,
        limit: 9999999,
        status: 'active'
      });
      return response.data;
    },
    placeholderData: keepPreviousData
  });

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
      <Box
        width={'100%'}
        display="flex"
        sx={{ flexDirection: 'column' }}
        gap={1}
      >
        <Controller
          name="supportId"
          control={control}
          render={({ field, fieldState }) => (
            <SelectData
              id="support-select"
              fieldError={fieldState.error}
              register={register('supportId')}
              label="Suporte"
              {...field}
            >
              {users?.users.map((x) => (
                <MenuItem key={x.id} value={x.id}>
                  {x.name}
                </MenuItem>
              ))}
            </SelectData>
          )}
        />
        <Controller
          name="userId"
          control={control}
          render={({ field, fieldState }) => (
            <SelectData
              id="user-select"
              fieldError={fieldState.error}
              register={register('userId')}
              label="Usuário"
              {...field}
            >
              {users?.users.map((x) => (
                <MenuItem key={x.id} value={x.id}>
                  {x.name}
                </MenuItem>
              ))}
            </SelectData>
          )}
        />
        <InputTextField
          label="Mensagem"
          error={!!errors.subject}
          helperText={errors.subject && errors.subject.message}
          register={register('subject')}
        />
      </Box>
      <Button type="submit" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Salvar'}
      </Button>
    </form>
  );
};

export default TicketUpdateForm;
