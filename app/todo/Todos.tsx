"use client";

import { useTodoStore } from "../../store/useTodoStore";
import { TodoList } from "./TodoList";

function Todos() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <>
      {todos?.map((todo) => (
        <TodoList key={todo.id} {...todo} />
      ))}
    </>
  );
}

export default Todos;
