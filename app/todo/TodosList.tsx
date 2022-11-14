import Link from "next/link";
import { Todo } from "../../types/todo.type";

const fetchTodos = async () => {
  const res = await fetch(
    "https://636dfa14b567eed48acee0bf.mockapi.io/api/v1/todos"
  );
  const todos: Todo[] = await res.json();
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();
  return (
    <>
      {todos?.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todo/${todo.id}`}>Todo: {todo.title}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
