import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import formReducer from './features/formSlice';
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { combineReducers } from 'redux';

// Persist config for form slice
const formPersistConfig = {
  key: 'form',
  storage,
};

const persistedFormReducer = persistReducer(formPersistConfig, formReducer);

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  form: persistedFormReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
