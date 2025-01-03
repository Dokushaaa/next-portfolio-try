import { configureStore } from "@reduxjs/toolkit";
import yourReducer from "./yourSlice"; // Import your slice reducer

export const store = configureStore({
	reducer: {
		yourFeature: yourReducer, // replace with your actual reducer
	},
});

// Optional: Type for RootState and AppDispatch for type-safe access
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
