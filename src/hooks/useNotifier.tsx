import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SnackbarKey, useSnackbar } from 'notistack';
import { removeSnackbar } from 'src/redux/snackbar/snackbar.reducer';
import { Notification, RootState } from 'src/model';

let displayed : SnackbarKey[] | [] = [];

const useNotifier = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(({ snackbar }: RootState) => snackbar.notifications || []);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id : SnackbarKey) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };

  useEffect(() => {
    notifications.forEach(({ key, message, options = {}, dismissed = false }: Notification) => {
      if (dismissed) {
        closeSnackbar(key);
        return;
      }

      if (displayed.includes(key as never)) return;

      enqueueSnackbar(message, {
        key,
        ...options,
        onClose: (event, reason, myKey) => {
          if (options.onClose) {
            options.onClose(event, reason, myKey);
          }
        },
        onExited: (event, myKey) => {
          dispatch(removeSnackbar(myKey));
          removeDisplayed(myKey);
        },
      });

      storeDisplayed(key as SnackbarKey);
    });
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);
};

export default useNotifier;
