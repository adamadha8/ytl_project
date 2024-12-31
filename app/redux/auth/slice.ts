// redux/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  biometricEnabled: boolean;
  pin: string | null;
};

const initialState: AuthState = {
  biometricEnabled: true, // Enable biometric by default
  pin: '123456', // Default 6-digit PIN for fallback
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setBiometricEnabled: (state, action: PayloadAction<boolean>) => {
      state.biometricEnabled = action.payload;
    },
    setPin: (state, action: PayloadAction<string>) => {
      state.pin = action.payload;
    },
  },
});

export const { setBiometricEnabled, setPin } = authSlice.actions;
export default authSlice.reducer;