import { configureStore } from '@reduxjs/toolkit';
import { timeSlice } from './time/timeSlice';

export const store = configureStore({
  reducer: { time: timeSlice.reducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
