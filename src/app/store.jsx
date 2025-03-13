import { configureStore } from "@reduxjs/toolkit";
import todoSclice from "../features/todo/todoSclice";

export const store = configureStore({
    reducer: todoSclice
})