'use client';

import React from "react";

interface todoData {
  id: number;
  title: string;
  complete: boolean;
  createAt: Date;
  updateAt: Date;
  todoToggle: (id: number, complete: boolean) => void;
}

const TodoElement = (todo: todoData) => {
  return (
    <div key={todo.id} className="text-2xl">
      <input
        type="checkbox"
        id={todo.id.toString()}
        className="cursor-pointer peer mx-4"
        defaultChecked={todo.complete}
        onChange={(e) => todo.todoToggle(todo.id, e.target.checked)}
      />
      <label
        htmlFor={todo.id.toString()}
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-600"
      >
        {todo.title}
      </label>
    </div>
  );
};

export default TodoElement;
