import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import InputTextField from 'components/InputTextField';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const messageSchema = z.object({
  assunto: z.string().min(1, 'Assunto é obrigatório'),
  conteudo: z.string().min(1, 'Conteúdo é obrigatório')
});

type MessageSchema = z.infer<typeof messageSchema>;

const MessageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<MessageSchema>({
    resolver: zodResolver(messageSchema)
  });

  const handleSaveMessage = (data: MessageSchema) => {};
  return (
    <form
      onSubmit={handleSubmit(handleSaveMessage)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10
      }}
    >
      <InputTextField
        label="Assunto"
        error={!!errors.assunto}
        helperText={errors.assunto && errors.assunto.message}
        register={register('assunto')}
      />
      <InputTextField
        label="Conteúdo"
        error={!!errors.conteudo}
        helperText={errors.conteudo && errors.conteudo.message}
        register={register('conteudo')}
      />
      <Button type="submit">Salvar</Button>
    </form>
  );
};

export default MessageForm;
