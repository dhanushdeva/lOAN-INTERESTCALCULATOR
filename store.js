import { configureStore } from '@reduxjs/toolkit';
import loanReducer from './loanSlice';

export const store = configureStore({
  reducer: {
    loan: loanReducer,
  },
});
