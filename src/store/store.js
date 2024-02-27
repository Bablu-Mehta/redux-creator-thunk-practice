import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const fetchUser = () => {
  return async (dispatch) => {
    const fetchUsername = async () => {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const username = response.data.name;
      return username;
    };

    try {
      const username = await fetchUsername();
      console.log("Fetched data successfully");
      dispatch(userActions.username(username));
      console.log("setted the data successfully");
    } catch (error) {
      throw new Error("Something went wrong while fetching the username");
    }
  };
};

export const userActions = userSlice.actions;
export default store;
