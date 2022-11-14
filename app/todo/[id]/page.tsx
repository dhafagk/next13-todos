import { Todo } from "../../../types/todo.type";
import { notFound } from "next/navigation";

interface TodoPageProps {
  params: {
    id: string;
  };
}

// isr
const fetchTodo = async (id: string) => {
  const res = await fetch(
    `https://636dfa14b567eed48acee0bf.mockapi.io/api/v1/todos/${id}`,
    {
      next: { revalidate: 10 },
    }
  );
  const todo: Todo = await res.json();
  return todo;
};

async function TodoPage({ params: { id } }: TodoPageProps) {
  const todo = await fetchTodo(id);

  if (!todo.id) return notFound();
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">By user: #</p>
    </div>
  );
}

// ssg
// export async function generateStaticParams() {
//   const res = await fetch(
//     `https://636dfa14b567eed48acee0bf.mockapi.io/api/v1/todos/`
//   );
//   const todos: Todo[] = await res.json();

//   // get first 10 pages avoid being rate limited by the demo api
//   const trimmedTodos = todos.splice(0, 10);

//   return trimmedTodos.map((todo) => ({
//     id: todo.id.toString(),
//   }));
// }

export default TodoPage;
