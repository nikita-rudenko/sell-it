import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import reducer from 'reducers/rootReducer';

import { logger } from 'middlewares/logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas/rootSaga';

import { createBrowserHistory } from 'history';
import httpService from 'api-client/interceptors';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

// export type StoreState = typeof store;

export const history = createBrowserHistory();
httpService.setupInterceptors(store, history);

sagaMiddleware.run(rootSaga);
