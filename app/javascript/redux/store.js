import { configureStore } from '@reduxjs/toolkit';
import saluteReducer from './salutes/saluteSlice';

const store = configureStore({
  reducer: {
    salutes: saluteReducer,
  },
});

export default store;
