"use client"
import Image from "next/image";
import AddTodo from "../components/AddTodo"
import Todo from "../components/Todos"
import { Provider } from "react-redux";
import { store } from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Learn about redux toolkit</h1>
        <AddTodo />
        <Todo />
      </div>
    </Provider>
  );
}
