/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../config/api";
import { setlogin, setLogout, setRegister, setUserProfile } from "./authSlice";

export const loginUser = createAsyncThunk("auth/login", 
  async ({ 
    email, 
    password 
  }: { 
    email: string; 
    password: string 
  }, { 
    dispatch, 
    rejectWithValue 
  }) => {
  try {
    const reponse = await axiosInstance.post("/auth/login", { email, password });
    dispatch(setlogin({ accessToken: reponse.data.data.accessToken }));
    return reponse.data.data.accessToken;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const registerUser = createAsyncThunk("auth/register", 
  async ({ 
    name, 
    email, 
    gender, 
    password 
  }: { 
    name: string; 
    email: string; 
    gender: string; 
    password: string 
  }, { 
    dispatch, 
    rejectWithValue 
  }) => {
  try {
    await axiosInstance.post("/auth/register", { name, email, gender, password });
    dispatch(setRegister());
    return true;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
})

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