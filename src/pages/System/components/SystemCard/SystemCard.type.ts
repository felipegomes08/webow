import { Systemjson } from 'pages/System/types/SystemGetApi.type';
import { System } from 'pages/System/types/SystemPutApi.type';

export interface SystemCardProps {
  configuracao: Systemjson | undefined;
  handleUpdateSystem: (systemConfiguration: System) => void;
  loading: boolean;
}
