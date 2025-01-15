import { Interfacejson } from 'pages/System/types/SystemGetApi.type';
import { Interface } from 'pages/System/types/SystemPutApi.type';

export interface InterfaceCardProps {
  configuracao: Interfacejson | undefined;
  handleUpdateInterface: (interfaceConfiguration: Interface) => void;
  loading: boolean;
}
