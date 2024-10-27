import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import InputPasswordField from 'components/InputPasswordField';
import InputTextField from 'components/InputTextField';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
});

type UserSchema = z.infer<typeof userSchema>;

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema)
  });

  const handleSaveUser = (_: UserSchema) => {};
  return (
    <form
      onSubmit={handleSubmit(handleSaveUser)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10
      }}
    >
      <InputTextField
        label="Nome"
        error={!!errors.name}
        helperText={errors.name && errors.name.message}
        register={register('name')}
      />
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
      <Button type="submit">Salvar</Button>
    </form>
  );
};

export default UserForm;
