import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./todoSlice";
import backgroundSliceReducer from "./BackgroundSlice";

const store = configureStore({
    reducer: {
        todos: todoSliceReducer,
        background: backgroundSliceReducer,
    },
});

export default store;
