import create from "zustand";
import { persist } from "zustand/middleware";
import { Todo } from "../types/todo.type";

interface TodosState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
}

export const useTodoStore = create(
  persist<TodosState>(
    (set, get) => ({
      todos: [],
      addTodo: (todo: Todo) => {
        // set((state) => {
        //   return { ...state, todos: [...state.todos, todo] };
        // }),
        const todos = get().todos;
        set({ todos: [todo, ...todos] });
      },
      toggleTodo: (id: number) => {
        const todos = get().todos;
        const findId = todos.find((elm) => elm.id == id);
        if (findId) {
          findId.completed = !findId.completed;
        }
        set({ todos });
      },
      deleteTodo: (id: number) =>
        set((state) => {
          return { ...state, todos: state.todos.filter((e) => e.id != id) };
        }),
    }),
    {
      name: "todoStore",
    }
  )
);
