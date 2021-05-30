import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

// import thunk from "redux-thunk";

import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";

import rootSaga from "./root-sagas";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

// const middlewares = [thunk];

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// export default { store, persistor };
