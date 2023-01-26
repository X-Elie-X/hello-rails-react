import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../api/api';

// Actions
const FETCH_GREETINGS = 'greetings/FETCH_GREETINGS';

// Initial State
const initialState = {};

// Action Creation
export const fetchGreetings = (payload) => ({
  type: FETCH_GREETINGS,
  payload,
});

// Fetch Greetings
export const fetchGreetingsAsync = createAsyncThunk(FETCH_GREETINGS, async (arc, { dispatch }) => {
  const { data } = await axios.get(api);

  dispatch(fetchGreetings(data));

  console.log(data);
});

// Reducer
const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingsReducer;
