import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import brand from 'assets/brand.svg';
import InputPasswordField from 'components/InputPasswordField';
import InputTextField from 'components/InputTextField';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginFormCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  });

  const handleLogin = (_: LoginSchema) => {};

  return (
    <Box
      position={'relative'}
      width={['100%', '100%', '35%']}
      height={'100%'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      p={[2, 10, 2, 10]}
    >
      <img
        src={brand}
        width={'130px'}
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <Typography variant="h1" mb={2}>
        WeSpace
      </Typography>
      <Typography variant="h4" mb={4}>
        Entre com seu email para gerenciar a plataforma
      </Typography>
      <form
        onSubmit={handleSubmit(handleLogin)}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
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
        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </form>
    </Box>
  );
};

export default LoginFormCard;
