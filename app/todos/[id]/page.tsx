import { Todo } from "../../../types/todo.type";

interface TodoPageProps {
  params: {
    id: string;
  };
}

const fetchTodo = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });
  const todo: Todo = await res.json();
  return todo;
};

async function TodoPage({ params: { id } }: TodoPageProps) {
  const todo = await fetchTodo(id);
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By user: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;
