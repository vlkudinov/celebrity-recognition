import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import rootSaga from './root-saga';

const DEV = process.env.NODE_ENV !== 'production';

const logger = createLogger({
  predicate: () => DEV,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  devTools: DEV,
  middleware: [logger, sagaMiddleware],

});

sagaMiddleware.run(rootSaga);
