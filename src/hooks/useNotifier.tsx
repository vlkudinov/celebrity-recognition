import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SnackbarKey, useSnackbar,
} from 'notistack';
// eslint-disable-next-line import/no-unresolved
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

  React.useEffect(() => {
    notifications.forEach(({
      key, message, options = {}, dismissed = false,
    }: Notification) => {
      if (dismissed) {
        // dismiss snackbar using notistack
        closeSnackbar(key);
        return;
      }

      // do nothing if snackbar is already displayed
      if (displayed.includes(key as never)) return;

      // display snackbar using notistack
      enqueueSnackbar(message, {
        key,
        ...options,
        onClose: (event, reason, myKey) => {
          if (options.onClose) {
            options.onClose(event, reason, myKey);
          }
        },
        onExited: (event, myKey) => {
          // remove this snackbar from redux store
          dispatch(removeSnackbar(myKey));
          removeDisplayed(myKey);
        },
      });

      // keep track of snackbars that we've displayed
      storeDisplayed(key as SnackbarKey);
    });
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);
};

export default useNotifier;

// import React, { useCallback, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   SnackbarKey, useSnackbar,
// } from 'notistack';
// import { removeSnackbar } from 'src/redux/snackbar/snackbar.reducer';
// import { Notification, RootState } from 'src/model';
//
// const useNotifier = () => {
//   const dispatch = useDispatch();
//   const notifications = useSelector(({ snackbar }: RootState) => snackbar.notifications || []);
//   const [displayed, setDisplayed] = useState<SnackbarKey[] | []>([]);
//   const { enqueueSnackbar, closeSnackbar } = useSnackbar();
//
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const storeDisplayed = (key : SnackbarKey) => {
//     setDisplayed([...displayed, key]);
//   };
//
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const removeDisplayed = useCallback((key: SnackbarKey) => {
//     const filtered = displayed.filter((existingKey) => existingKey !== key);
//     setDisplayed(filtered);
//   }, [setDisplayed, displayed]);
//
//   console.log('DISPLAYED', displayed);
//
//   useEffect(() => {
//     notifications.forEach(({
//       key, message, options = {}, dismissed = false,
//     }: Notification) => {
//       if (dismissed) {
//         // dismiss snackbar using notistack
//         closeSnackbar(key);
//         return;
//       }
//
//       // do nothing if snackbar is already displayed
//       if (displayed.includes(key as never)) return;
//
//       // display snackbar using notistack
//       enqueueSnackbar(message, {
//         key,
//         ...options,
//         onClose: (event, reason, myKey) => {
//           if (options.onClose) {
//             options.onClose(event, reason, myKey);
//           }
//         },
//         onExited: (event, myKey) => {
//           // remove this snackbar from redux store
//           dispatch(removeSnackbar(myKey));
//           removeDisplayed(myKey);
//         },
//       });
//
//       // keep track of snackbars that we've displayed
//       storeDisplayed(key as SnackbarKey);
//     });
//   }, [dispatch, notifications, closeSnackbar, enqueueSnackbar, displayed, storeDisplayed, removeDisplayed]);
// };
//
// export default useNotifier;
