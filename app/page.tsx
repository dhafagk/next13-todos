import { Heading } from "../components/ui/Heading";
import CreateTodo from "./todo/CreateTodo";
import Todos from "./todo/Todos";

export default function Home() {
  return (
    <>
      <Heading text="Todo APP" />
      <CreateTodo />
      <div className="flex flex-col gap-5 max-w-sm sm:max-w-none w-full mx-auto px-4 sm:px-0">
        {/* @ts-ignore */}
        <Todos />
      </div>
    </>
  );
}
