import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import AddLinkIcon from '@mui/icons-material/AddLink';
import ClearIcon from '@mui/icons-material/Clear';

export const WhiteBorderTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: theme.palette.background.default,
    '& fieldset': {
      color: theme.palette.background.default,
      borderColor: theme.palette.background.default,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  label: {
    color: theme.palette.background.default,
    '.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiFormHelperText-root': {
    color: theme.palette.background.default,
  },
})) as unknown as typeof TextField;

export const BlackLinkIcon = styled(AddLinkIcon)(({ theme }) => ({
  color: theme.palette.background.default,
}));

export const BlackClearIcon = styled(ClearIcon)(({ theme }) => ({
  color: theme.palette.background.default,
  cursor: 'pointer',
}));
