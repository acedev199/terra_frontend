import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSignedIn: false, isSignoutAlert : false, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        singinFulfilled(state, action) {
            state.isSignedIn = true;
        },
        singinRejected(state, action) {
            state.isSignedIn = false;
        },
        signoutFullfilled(state, action) {
            state.isSignedIn = false;
            state.isSignoutAlert = true;
        },
        removeSignoutAlert(state, action) {
            state.isSignedIn = false;
            state.isSignoutAlert = false;
        },
    },
});

export const { singinFulfilled, singinRejected, signoutFullfilled, removeSignoutAlert } = authSlice.actions;
export default authSlice.reducer;
