import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/singnup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    alert("Something went wrong");
  }
});

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    alert("Something went wrong");
  }
});

const Exit = createAsyncThunk("auth/exit", async (credentials) => {
  try {
    const { data } = await axios.post("/users/exit", credentials);
    token.unset();
    return data;
  } catch (error) {
    alert("Something went wrong");
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      alert("Some problems");
    }
  }
);
const authOperations = {
  register,
  logIn,
  Exit,
  fetchCurrentUser,
};
export default authOperations;
