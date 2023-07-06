import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSalutes = createAsyncThunk('salutes/fetch', async () => {
  const response = await fetch('/api/v1/salutes');
  const data = await response.json();
  const { salute } = data;
  return salute;
});

const initialState = { loading: false, salute: '', error: '' };

const saluteSlice = createSlice({
  name: 'salute',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSalutes.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(fetchSalutes.fulfilled, (state, action) => {
      const newState = { ...state, salute: action.payload, loading: false };
      return newState;
    });
    builder.addCase(fetchSalutes.rejected, (state, action) => {
      const newState = { ...state, salute: '', error: action.error.message };
      return newState;
    });
  },
});

export default saluteSlice.reducer;
