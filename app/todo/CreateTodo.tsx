"use client";

import { useState } from "react";
import { Input } from "../../components/ui/Input";

function CreateTodo() {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        id: 202,
        title: title,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setTitle("");

    const data = await res.json();
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control py-10">
        <div className="input-group input-group-sm justify-center">
          <input
            type="text"
            placeholder="Add todo"
            className="input input-sm w-full max-w-xs sm:max-w-none input-bordered"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="btn btn-square btn-sm" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateTodo;
