/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}
const persistConfig = {
  key: "effie",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
