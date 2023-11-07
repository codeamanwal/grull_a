import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
    },
  },
});

export const {setAccessToken, clearAccessToken} = authSlice.actions;
export const selectAccessToken = (state) => state.auth.accessToken;
export default loginSlice.reducer;
