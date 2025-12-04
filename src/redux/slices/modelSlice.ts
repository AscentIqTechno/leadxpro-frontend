import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signupOpen: false,
  loginOpen: false,
  forgotPasswordOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSignup: (state) => {
      state.signupOpen = true;
      state.loginOpen = false;
      state.forgotPasswordOpen = false;
    },
    openLogin: (state) => {
      state.signupOpen = false;
      state.loginOpen = true;
      state.forgotPasswordOpen = false;
    },
    openForgotPassword: (state) => {
      state.signupOpen = false;
      state.loginOpen = false;
      state.forgotPasswordOpen = true;
    },
    closeAll: (state) => {
      state.signupOpen = false;
      state.loginOpen = false;
      state.forgotPasswordOpen = false;
    },
  },
});

// ✅ Named exports for actions
export const { openSignup, openLogin, openForgotPassword, closeAll } = modalSlice.actions;

// ✅ Default export for reducer
export default modalSlice.reducer;
