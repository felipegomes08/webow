import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import InputTextField from 'components/InputTextField';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const upSellSchema = z.object({
  titulo: z.string().min(1, 'O Título é obrigatório'),
  condicao: z.string().min(1, 'A Condição é obrigatória'),
  mensagem: z.string().min(1, 'A Mensagem é obrigatória'),
  imagem: z.string().min(1, 'A imagem é obrigatória'),
  se: z.string().min(1, 'A Condição é obrigatória'),
  acao: z.string().min(1, 'A Ação é obrigatória'),
  tempo: z.number(),
  unidade: z.number()
});

type UpSellSchema = z.infer<typeof upSellSchema>;

const MarketingUpSellForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UpSellSchema>({
    resolver: zodResolver(upSellSchema)
  });

  const handleSaveUpSell = (data: UpSellSchema) => {};
  return (
    <form
      onSubmit={handleSubmit(handleSaveUpSell)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10
      }}
    >
      <InputTextField
        label="Título"
        error={!!errors.titulo}
        helperText={errors.titulo && errors.titulo.message}
        register={register('titulo')}
      />
      <InputTextField
        label="Condição"
        error={!!errors.condicao}
        helperText={errors.condicao && errors.condicao.message}
        register={register('condicao')}
      />
      <InputTextField
        label="Mensagem"
        error={!!errors.mensagem}
        helperText={errors.mensagem && errors.mensagem.message}
        register={register('mensagem')}
      />
      <InputTextField
        label="Imagem"
        error={!!errors.imagem}
        helperText={errors.imagem && errors.imagem.message}
        register={register('imagem')}
      />
      <InputTextField
        label="Se"
        error={!!errors.se}
        helperText={errors.se && errors.se.message}
        register={register('se')}
      />
      <InputTextField
        label="Ação"
        error={!!errors.acao}
        helperText={errors.acao && errors.acao.message}
        register={register('acao')}
      />
      <InputTextField
        label="Tempo"
        error={!!errors.tempo}
        helperText={errors.tempo && errors.tempo.message}
        register={register('tempo')}
      />
      <InputTextField
        label="Unidade"
        error={!!errors.unidade}
        helperText={errors.unidade && errors.unidade.message}
        register={register('unidade')}
      />
      <Button type="submit">Salvar</Button>
    </form>
  );
};

export default MarketingUpSellForm;
