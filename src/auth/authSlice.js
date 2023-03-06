import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_USER, IS_DEMO } from 'config.js';

const initialState = {
  isLogin: IS_DEMO,
  currentUser: IS_DEMO ? DEFAULT_USER : {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.isLogin = true;
    },
    logout(state) {
      state.currentUser = {};
      state.isLogin = false;
    },
  },
});

export const { setCurrentUser, logout } = authSlice.actions;
// (state) => state.auth
export const sign = (state) => state.auth;
const authReducer = authSlice.reducer;

export default authReducer;
