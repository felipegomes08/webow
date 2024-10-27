import { ReactElement, ReactEventHandler } from 'react';

export interface CustomModalProps {
  isOpen: boolean;
  onClose: ReactEventHandler;
  children: ReactElement;
  width?: number | string;
}
