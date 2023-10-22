import { configureStore } from '@reduxjs/toolkit';
import toolsReducer from './features/toolsSlice';
import accessoryReducer from './features/accessorySlice';

export const store = configureStore({
  reducer: {
    tools: toolsReducer,
    accessory: accessoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
