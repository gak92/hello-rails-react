import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actions from './types';

const REQUESTED_URL = '/api/v1/random_greeting';

// Actions
const getGreeting = createAsyncThunk(
  actions.RANDOM_GREETING,
  async () => {
    const response = await axios.get(REQUESTED_URL);
    return response.data;
  },
);

export { getGreeting };
