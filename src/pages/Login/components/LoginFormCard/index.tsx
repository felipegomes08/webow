import { zodResolver } from '@hookform/resolvers/zod';
import { Button, CircularProgress, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import brand from 'assets/brand.svg';
import InputPasswordField from 'components/InputPasswordField';
import InputTextField from 'components/InputTextField';
import { AuthContext } from 'context/AuthContext';
import { AuthContextType } from 'context/AuthContext/AuthContext.type';
import {
  LoginResponse,
  loginSchema,
  LoginSchema
} from 'pages/Login/types/Login.type';
import { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginFormCard = () => {
  const { signIn } = useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  });

  const handleLogin = async ({ cpf, password }: LoginSchema) => {
    setLoading(true);
    const result: LoginResponse = await signIn(cpf, password);
    if (result?.success) {
      toast.success('Seja bem vindo !', {
        position: 'top-center'
      });
      navigate('/app/home');
    } else {
      const message: string = result?.message
        ? result.message
        : 'Falha no login. Verifique suas credenciais.';
      toast.error(message, { position: 'top-center' });
    }
    setLoading(false);
  };

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
        Entre com seu cpf para gerenciar a plataforma
      </Typography>
      <form
        onSubmit={handleSubmit(handleLogin)}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
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
        <InputPasswordField
          label="Senha"
          error={!!errors.password}
          helperText={errors.password && errors.password.message}
          register={register('password')}
        />
        <Button variant="contained" type="submit">
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
        </Button>
      </form>
    </Box>
  );
};

export default LoginFormCard;
