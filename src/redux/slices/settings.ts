import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  firstTime: false,
  vibrate: true,
  isLoading: false,
};

export const initSettings = createAsyncThunk('settings/initSettings', async () => {
  const firstTimeStr = await AsyncStorage.getItem('firstTime');
  const firstTimeObj = firstTimeStr != null ? JSON.parse(firstTimeStr) : { firstTime: true };

  const vibrateString = await AsyncStorage.getItem('vibrate');
  const vibrateObj = vibrateString !== null ? JSON.parse(vibrateString) : { vibrate: true };

  return { firstTime: firstTimeObj.firstTime, vibrate: vibrateObj.vibrate };
});

export const setVibrate = createAsyncThunk(
  'settings/setVibrate',
  async (data: boolean, thunkAPI) => {
    await AsyncStorage.setItem('vibrate', JSON.stringify({ vibrate: data }));

    return data;
  }
);

export const setFirstTime = createAsyncThunk(
  'settings/setFirstTime',
  async (data: boolean, thunkAPI) => {
    await AsyncStorage.setItem('firstTime', JSON.stringify({ firstTime: data }));

    return data;
  }
);

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        initSettings.fulfilled,
        (state, action: PayloadAction<{ firstTime: boolean; vibrate: boolean }>) => {
          state.firstTime = action.payload.firstTime;
          state.vibrate = action.payload.vibrate;
          state.isLoading = false;
        }
      )
      .addCase(initSettings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(initSettings.rejected, (state) => {
        state.isLoading = false;
        state.firstTime = true;
        state.vibrate = true;
      })
      .addCase(setVibrate.fulfilled, (state, action) => {
        state.vibrate = action.payload;
      })

      .addCase(setFirstTime.fulfilled, (state, action) => {
        state.firstTime = action.payload;
        state.isLoading = false;
      })
      .addCase(setFirstTime.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setFirstTime.rejected, (state) => {
        state.isLoading = false;
        state.firstTime = true;
      });
  },
});

export default settingsSlice.reducer;
