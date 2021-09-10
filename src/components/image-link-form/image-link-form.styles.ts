import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';

export const WhiteBorderTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: theme.palette.grey['900'],
    '& fieldset': {
      color: theme.palette.grey['500'],
      borderColor: theme.palette.grey['500'],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  label: {
    color: theme.palette.grey['500'],
    '.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiFormHelperText-root': {
    color: theme.palette.grey['700'],
  },
})) as unknown as typeof TextField;

export const BlackClearIcon = styled(ClearIcon)(({ theme }) => ({
  color: theme.palette.background.default,
  cursor: 'pointer',
}));
