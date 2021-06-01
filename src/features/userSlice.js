import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')),
  },
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
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
      state.user.favorites.push(action.payload);
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    removeFavorites: (state, action) => {
      const index = state.user.favorites.findIndex(
        (movie) => movie.id === action.payload
      );
      state.user.favorites.splice(index, 1);
      localStorage.setItem('user', JSON.stringify(state.user));
    },
  },
});

export const { signup, signin, signout, addFavorites, removeFavorites } =
  userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
