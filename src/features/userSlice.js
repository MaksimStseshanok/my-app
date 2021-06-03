import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')),
  },
  reducers: {
    signup: (state, action) => {
      const defaultUserProps = {
        favorites: {},
        history: [],
        isLogged: true,
      };
      state.user = { ...action.payload, ...defaultUserProps };
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    signin: (state) => {
      state.user.isLogged = true;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    signout: (state) => {
      state.user.isLogged = false;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    addFavorites: (state, action) => {
      const id = action.payload.id;
      state.user.favorites[id] = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    removeFavorites: (state, action) => {
      const id = action.payload;
      delete state.user.favorites[id];
      localStorage.setItem('user', JSON.stringify(state.user));
    },
  },
});

export const { signup, signin, signout, addFavorites, removeFavorites } =
  userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
