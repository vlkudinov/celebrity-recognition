import React from 'react';
import { SnackbarKey, SnackbarProvider, SnackbarProviderProps } from 'notistack';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

const CustomizedSnackbarProvider: React.FC<SnackbarProviderProps> = ({ children, ...props }: SnackbarProviderProps) => {
  const notistackRef = React.createRef<SnackbarProvider>();
  const onClickDismiss = (key: SnackbarKey) => () => {
    notistackRef?.current?.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      ref={notistackRef}
      action={(key) => (
        <IconButton aria-label="delete" onClick={onClickDismiss(key)}>
          <ClearIcon sx={{ color: 'white' }} />
        </IconButton>
      )}
      {...props}
    >
      {children}
    </SnackbarProvider>
  );
};

export default CustomizedSnackbarProvider;
