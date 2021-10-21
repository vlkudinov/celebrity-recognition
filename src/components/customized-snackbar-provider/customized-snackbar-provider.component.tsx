import React from 'react';
import { SnackbarKey, SnackbarProvider, SnackbarProviderProps } from 'notistack';
import { IconButton } from '@mui/material';
import { ClearIconWhite } from 'src/components/customized-snackbar-provider/customized-snackbar-provider.style';

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
          <ClearIconWhite />
        </IconButton>
      )}
      {...props}
    >
      {children}
    </SnackbarProvider>
  );
};

export default CustomizedSnackbarProvider;
