import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { errorLogger } from './middlewares/errorLogger';
import authReducer from './slices/auth';
import messageReducer from './slices/message';
import settingsReducer from './slices/settings';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  settings: settingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorLogger),
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
