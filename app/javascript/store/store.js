import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from '../redux/messages/messages';

const store = configureStore({
  reducer: {
    message: greetingsReducer,
  },
});

export default store;
