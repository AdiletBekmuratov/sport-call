import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ISnackbar } from '@/types/index';

const initialState: ISnackbar = {
  message: '',
  action: null,
};

export const addMessage = createAsyncThunk('message/addMessage', (data: ISnackbar, thunkApi) => {
  return data;
});

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = '';
      state.action = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addMessage.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.action = action.payload?.action;
    });
  },
});

export const { clearMessage } = messageSlice.actions;
export default messageSlice.reducer;
