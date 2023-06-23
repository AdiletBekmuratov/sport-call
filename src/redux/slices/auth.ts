import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import jwt_decode, { JwtPayload } from 'jwt-decode';

import authService from '../services/auth.service';

import { LoginFormData, RegisterFormData, IAuth, IToken } from '@/types/index';

const initialState: IAuth = {
  token: null!,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

// Register user
export const register = createAsyncThunk<
  any,
  RegisterFormData,
  {
    rejectValue: string;
  }
>('auth/register', async (user, thunkAPI) => {
  try {
    const result = await authService.register(user);

    return result;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
    return thunkAPI.rejectWithValue(error?.message);
  }
});

// Login user
export const login = createAsyncThunk<
  any,
  LoginFormData,
  {
    rejectValue: string;
  }
>('auth/login', async (user, thunkAPI) => {
  try {
    const userData = await authService.login(user);

    return userData;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
    return thunkAPI.rejectWithValue(error?.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

export const addUser = createAsyncThunk('auth/addUser', async () => {
  const jsonValue = await AsyncStorage.getItem('token');
  const token: IToken = jsonValue != null ? JSON.parse(jsonValue) : null;
  if (token) {
    const decodedJwt = jwt_decode(token.accessToken) as JwtPayload;
    if (decodedJwt?.exp! * 1000 < Date.now()) {
      await AsyncStorage.removeItem('token');
      return { token: null };
    }
  }

  return { token };
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state, action) => {
        state.token = action.payload.token!;
        state.isLoading = false;
      })
      .addCase(addUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.token = null!;
      })

      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.token = null!;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.token = null!;
      })

      .addCase(logout.fulfilled, (state) => {
        state.token = null!;
      });
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
