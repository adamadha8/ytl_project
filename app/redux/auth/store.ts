import { configureStore, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  biometricEnabled: boolean;
  pin: string;
}

const initialState: AuthState = {
  biometricEnabled: false,
  pin: '123456',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setBiometricEnabled(state, action) {
      state.biometricEnabled = action.payload;
    },
    setPin(state, action) {
      state.pin = action.payload;
    },
    logout: (state) => {
      state.biometricEnabled = initialState.biometricEnabled;
      state.pin = initialState.pin;
    },
  },
});

export const { setBiometricEnabled, setPin, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
