"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/func/ReduxActions";

export const store = configureStore({
	reducer: {
		mainRedux: counterReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
