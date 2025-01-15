import { CircularProgress, Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import CountCard from 'components/CountCard';
import CustomTabs from 'components/Tabs';
import { ListTabsProps } from 'components/Tabs/CustomTabs.type';
import InterfaceCard from 'pages/System/components/InterfaceCard';
import SystemCard from 'pages/System/components/SystemCard';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { layoutPadding } from 'theme/globalStyles';
import { APIResponse } from 'types/api/Api.type';
import PixelCard from './components/PixelCard';
import { getConfiguration, updateConfiguration } from './services';
import { ConfigurationGetResponse } from './types/SystemGetApi.type';
import {
  Interface as InterfacePutRequest,
  System as SystemPutRequest
} from './types/SystemPutApi.type';

const systemCountList = [
  { label: 'Servidores', value: 3 },
  { label: 'GPU', value: 12 },
  { label: 'Requisições', value: 3242 }
];

export const System = () => {
  const [loadingPutSystem, setLoadingPutSystem] = useState<boolean>(false);
  const [loadingPutInterface, setLoadingPutInterface] =
    useState<boolean>(false);
  const [loadingPutPixel, setLoadingPutPixel] = useState<boolean>(false);
  const { data: configuration, isLoading } = useQuery<
    ConfigurationGetResponse | undefined
  >({
    queryKey: ['get-configuration'],
    queryFn: async () => {
      const response: APIResponse<ConfigurationGetResponse> =
        await getConfiguration();
      return response.data;
    }
  });

  const handleUpdateSystem = async (systemConfiguration: SystemPutRequest) => {
    setLoadingPutSystem(true);
    const result: APIResponse = await updateConfiguration(configuration?.id!, {
      system: systemConfiguration,
      pixel: configuration?.pixel,
      interface: configuration?.interface.json
    });
    if (result.success) {
      toast.success('Configuração atualizada com sucesso!', {
        position: 'top-center'
      });
    } else {
      toast.error('Erro ao atualizar a configuração!', {
        position: 'top-center'
      });
    }
    setLoadingPutSystem(false);
  };

  const handleUpdateInterface = async (
    interfaceConfiguration: InterfacePutRequest
  ) => {
    setLoadingPutInterface(true);
    const result: APIResponse = await updateConfiguration(configuration?.id!, {
      system: configuration?.system.json,
      pixel: configuration?.pixel,
      interface: interfaceConfiguration
    });
    if (result.success) {
      toast.success('Configuração atualizada com sucesso!', {
        position: 'top-center'
      });
    } else {
      toast.error('Erro ao atualizar a configuração!', {
        position: 'top-center'
      });
    }
    setLoadingPutInterface(false);
  };

  const handleUpdatePixel = async (pixelConfiguration: string) => {
    setLoadingPutPixel(true);
    const result: APIResponse = await updateConfiguration(configuration?.id!, {
      system: configuration?.system.json,
      pixel: pixelConfiguration,
      interface: configuration?.interface.json
    });
    if (result.success) {
      toast.success('Configuração atualizada com sucesso!', {
        position: 'top-center'
      });
    } else {
      toast.error('Erro ao atualizar a configuração!', {
        position: 'top-center'
      });
    }
    setLoadingPutPixel(false);
  };

  const listTabs: ListTabsProps[] = [
    {
      label: 'Sistema',
      value: 'main',
      children: (
        <SystemCard
          configuracao={configuration?.system.json}
          handleUpdateSystem={handleUpdateSystem}
          loading={loadingPutSystem}
        />
      )
    },
    {
      label: 'Interface',
      value: 'interface',
      children: (
        <InterfaceCard
          configuracao={configuration?.interface.json}
          handleUpdateInterface={handleUpdateInterface}
          loading={loadingPutInterface}
        />
      )
    },
    {
      label: 'Pixel Meta',
      value: 'pixel',
      children: (
        <PixelCard
          configuracao={configuration?.pixel}
          handleUpdatePixel={handleUpdatePixel}
          loading={loadingPutPixel}
        />
      )
    }
  ];
  if (isLoading) return <CircularProgress />;
  return (
    <>
      <Stack direction="row" spacing={2} mb={layoutPadding}>
        {systemCountList.map((count) => (
          <CountCard label={count.label} value={count.value} />
        ))}
      </Stack>
      <CustomTabs listTabs={listTabs} mainRoute="/app/system" />
    </>
  );
};
