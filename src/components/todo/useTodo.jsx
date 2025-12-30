import { useState } from "react";

export function useTodo(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  const changeStatus = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== id) return todo;

        if (todo.status === "pending") {
          return {
            ...todo,
            status: "processing",
            startedAt: new Date().toISOString().slice(0, 16),
          };
        }
        if (todo.status === "processing") {
          return {
            ...todo,
            status: "done",
            finishedAt: new Date().toISOString().slice(0, 16),
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, changeStatus, deleteTodo };
}
