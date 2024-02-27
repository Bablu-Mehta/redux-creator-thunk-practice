import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "username",
  initialState: { username: "" },
  reducers: {
    username(state, action) {
      state.username = action.payload;
    },
  },
});

const store = configureStore({
  reducer: userSlice.reducer,
});

export const userActions = userSlice.actions;
export default store;
