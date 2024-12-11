/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../config/api";
import { setlogin, setLogout, setUserProfile } from "./authSlice";

export const loginUser = createAsyncThunk("auth/login", async ({ email, password }: { email: string; password: string }, { dispatch, rejectWithValue }) => {
  try {
    const reponse = await axiosInstance.post("/auth/login", { email, password });
    dispatch(setlogin({ accessToken: reponse.data.data.accessToken }));
    return reponse.data.data.accessToken;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async (_, { dispatch, rejectWithValue }) => {
  try {
    dispatch(setLogout());
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const profileUser = createAsyncThunk("/profile", async (_, { dispatch, rejectWithValue }) => {
  try {
    const reponse = await axiosInstance.get("/profile", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`
      }
    });
    dispatch(setUserProfile(reponse.data.data));
    return reponse.data.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});