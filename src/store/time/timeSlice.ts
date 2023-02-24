import { RootState } from './../index';
import { createSlice } from '@reduxjs/toolkit';

interface timeState {
  hours: number;
  minutes: number;
  seconds: number;
}

const now = new Date();

const initialState: timeState = {
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds(),
};

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {},
});

export const {} = timeSlice.actions;

export const getHours = (state: RootState) => state.time.hours;
export const getMinutes = (state: RootState) => state.time.minutes;
export const getSeconds = (state: RootState) => state.time.seconds;
