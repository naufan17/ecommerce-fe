import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "./authThunk";

export interface AuthState {
  accessToken: string | null;
  user: {
    name: string;
    email: string;
    gender: string;
  } | null;
  loading: boolean;
  error: unknown;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
  loading: false,
  error: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setlogin: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
      sessionStorage.setItem("accessToken", action.payload.accessToken);
    },
    setLogout: (state) => {
      state.accessToken = null;
      sessionStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    },
    setUserProfile: (state, action: PayloadAction<{ name: string; email: string; gender: string }>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setError: (state, action: PayloadAction<unknown>) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.accessToken = action.payload;
        state.loading = false;
        sessionStorage.setItem("accessToken", action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
});

export const { setlogin, setLogout, setUserProfile, setError } = authSlice.actions;

export default authSlice.reducer;