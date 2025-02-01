import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
    name: "background",
    initialState: { imageUrl: "" },
    reducers: {
        setBackground: (state, action) => {
            state.imageUrl = action.payload;
        },
    },
});

export const { setBackground } = backgroundSlice.actions;
export default backgroundSlice.reducer;