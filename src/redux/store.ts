import { configureStore } from "@reduxjs/toolkit";
import changingValueSlice from "./sliceReducers/changingValueSlice";

const store = configureStore({
    reducer:{
        value:changingValueSlice,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;