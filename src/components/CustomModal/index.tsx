import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import { CustomModalProps } from 'components/CustomModal/CustomModal.type';
import theme from 'theme/theme';

const CustomModal = ({
  isOpen,
  onClose,
  children,
  width
}: CustomModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: width || 600,
          bgcolor: grey[50],
          border: 'none',
          borderRadius: theme.shape.borderRadius,
          boxShadow: 24,
          p: 4
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
