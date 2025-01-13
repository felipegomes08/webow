import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  IconButton,
  Accordion as MUIAccordion
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { GridAccordionProps } from 'components/GridAccordion/GridAccordion.type';
import { useState } from 'react';
import theme from 'theme/theme';

const GridAccordion = ({
  expanded,
  index,
  icon,
  titleContent,
  detailsContent,
  closeCallback,
  deleteCallback,
  editCallback,
  editLoading,
  expandCallback,
  expandIcon
}: GridAccordionProps) => {
  const [indexClicked, setIndexClicked] = useState<number | null>(null);
  return (
    <MUIAccordion
      square={true}
      sx={{
        backgroundColor: expanded || index % 2 === 0 ? grey[50] : grey[400],
        borderRadius: theme.shape.borderRadius,
        boxShadow: 'none',
        width: '100%',
        '&:before': {
          display: 'none'
        }
      }}
      expanded={expanded}
      onChange={expandCallback}
    >
      <AccordionSummary
        sx={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box
          bgcolor={grey[50]}
          borderRadius={theme.shape.borderRadius}
          border={`1.5px solid ${grey[300]}`}
          width={40}
          height={40}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {icon}
        </Box>
        <Box
          flex={1}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          mx={2}
        >
          {titleContent}
        </Box>
        {expanded ? (
          <Box display={'flex'} alignItems={'center'}>
            {/* <Button
              sx={{
                paddingX: '3px',
                paddingY: '3px',
                borderRadius: theme.shape.borderRadius,
                bgcolor: theme.palette.primary.main
              }}
              onClick={finishCallback}
            >
              <Typography
                color={grey[50]}
                textTransform={'capitalize'}
                fontSize={'12px'}
              >
                Finalizar
              </Typography>
            </Button> */}
            <IconButton
              sx={{ padding: '2px', borderRadius: theme.shape.borderRadius }}
              onClick={closeCallback}
            >
              <CloseOutlinedIcon sx={{ fontSize: '18px', color: grey[900] }} />
            </IconButton>
          </Box>
        ) : (
          <Box display={'flex'} alignItems={'center'}>
            {!!deleteCallback && (
              <IconButton
                sx={{ padding: '2px', borderRadius: theme.shape.borderRadius }}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteCallback(e);
                }}
              >
                <DeleteIcon sx={{ fontSize: '18px', color: grey[900] }} />
              </IconButton>
            )}
            {editCallback && (
              <IconButton
                sx={{ padding: '2px', borderRadius: theme.shape.borderRadius }}
                onClick={async (e) => {
                  e.stopPropagation();
                  setIndexClicked(index);
                  await editCallback(e);
                  setIndexClicked(null);
                }}
                disabled={editLoading}
              >
                {editLoading && indexClicked === index ? (
                  <CircularProgress size={18} />
                ) : (
                  <EditNoteOutlinedIcon
                    sx={{ fontSize: '18px', color: grey[900] }}
                  />
                )}
              </IconButton>
            )}
            {expandIcon && <ExpandMoreOutlinedIcon />}
          </Box>
        )}
      </AccordionSummary>
      <AccordionDetails sx={{ width: '100%', pX: 4 }}>
        {detailsContent}
      </AccordionDetails>
    </MUIAccordion>
  );
};

export default GridAccordion;
