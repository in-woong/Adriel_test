import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTime } from 'utils/utils';
import { RootState } from '../index';

interface TimeState {
  hours: number;
  minutes: number;
  seconds: number;
}

const now = new Date();

const initialState: TimeState = {
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds(),
};

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setTime: (
      state,
      action: PayloadAction<{
        hours: number;
        minutes: number;
        seconds: number;
      }>,
    ) => {
      return action.payload;
    },
  },
});

export const { setTime } = timeSlice.actions;

export const getHours = (state: RootState) => state.time.hours;
export const getMinutes = (state: RootState) => state.time.minutes;
export const getSeconds = (state: RootState) => state.time.seconds;
export const getTimes = (state: RootState) =>
  getTime(state.time.hours, state.time.minutes, state.time.seconds);
