import { Todo } from "../../types/todo.type";
import { TodoList } from "./TodoList";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return todos;
};

async function Todos() {
  const todos = await fetchTodos();
  return (
    <>
      {todos?.map((todo) => (
        <TodoList key={todo.id} {...todo} />
      ))}
    </>
  );
}

export default Todos;
