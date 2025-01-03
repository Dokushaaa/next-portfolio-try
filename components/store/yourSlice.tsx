import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define initial state type
interface YourState {
	value: number;
}

const initialState: YourState = {
	value: 0,
};

// Create a slice
const yourSlice = createSlice({
	name: "yourFeature",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		setValue: (state: any, action: PayloadAction<number>) => {
			state.value = action.payload;
		},
	},
});

// Export actions and reducer
export const { increment, decrement, setValue } = yourSlice.actions;
export default yourSlice.reducer;
