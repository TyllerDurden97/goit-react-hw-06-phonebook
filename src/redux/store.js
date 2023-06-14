import { configureStore } from '@reduxjs/toolkit';
import { persistedPhonebookReducer } from "redux/phonebookSlice";
import { persistStore } from 'redux-persist';
import {
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';

export const store = configureStore({
   reducer: {
      phonebook: persistedPhonebookReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});
  
export const persistor = persistStore(store);
