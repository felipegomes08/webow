export interface PixelCardProps {
  configuracao: string | undefined;
  handleUpdatePixel: (pixel: string) => void;
  loading: boolean;
}
