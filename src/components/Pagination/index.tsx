import {
  FirstPage,
  LastPage,
  NavigateBefore,
  NavigateNext
} from '@mui/icons-material';
import { Box, IconButton, MenuItem, Select, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import theme from 'theme/theme';
import { PaginationProps } from './types/Pagination.type';

const Pagination = ({ page, total, limit }: PaginationProps) => {
  const [, setSearchParams] = useSearchParams();
  const pages = limit > total ? 1 : Math.ceil(total / limit);

  const firstPage = () => {
    setSearchParams((params) => {
      params.set('page', '1');
      return params;
    });
  };

  const previousPage = () => {
    if (page - 1 <= 0) return;
    setSearchParams((params) => {
      params.set('page', String(page - 1));
      return params;
    });
  };

  const nextPage = () => {
    if (page + 1 <= 0) return;
    setSearchParams((params) => {
      params.set('page', String(page + 1));
      return params;
    });
  };

  const lastPage = () => {
    setSearchParams((params) => {
      params.set('page', String(pages));
      return params;
    });
  };

  return (
    <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
      <Box display={'flex'} alignItems={'center'}>
        <Typography variant={'h4'}>
          Exibindo {limit > total ? total : limit} de {total} registros
        </Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <Typography variant={'h4'} mr={1}>
          Linhas por página
        </Typography>
        <Select
          id="demo-simple-select"
          size="small"
          value={limit}
          onChange={(e) => {
            setSearchParams((params) => {
              params.set('limit', String(e.target.value));
              return params;
            });
          }}
          sx={{ mr: 2 }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
        <Typography variant={'h4'} mr={2}>
          Página {page} de {pages}
        </Typography>
        <Box display={'flex'} gap={0.5}>
          <IconButton
            onClick={firstPage}
            disabled={page === 1}
            sx={{
              borderRadius: theme.shape.borderRadius,
              border: '1px solid'
            }}
            aria-label="first"
            size="small"
          >
            <FirstPage fontSize="small" />
          </IconButton>
          <IconButton
            onClick={previousPage}
            disabled={page === 1}
            sx={{
              borderRadius: theme.shape.borderRadius,
              border: '1px solid'
            }}
            aria-label="previous"
            size="small"
          >
            <NavigateBefore fontSize="small" />
          </IconButton>
          <IconButton
            onClick={nextPage}
            disabled={page === pages}
            sx={{
              borderRadius: theme.shape.borderRadius,
              border: '1px solid'
            }}
            aria-label="next"
            size="small"
          >
            <NavigateNext fontSize="small" />
          </IconButton>
          <IconButton
            onClick={lastPage}
            disabled={page === pages}
            sx={{
              borderRadius: theme.shape.borderRadius,
              border: '1px solid'
            }}
            aria-label="last"
            size="small"
          >
            <LastPage fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Pagination;
