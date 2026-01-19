import { useState, useEffect, useCallback } from "react";


interface Todo {
  id: string;
  title: string;
  description: string;
  status: string;
}

const useTodo = () => {

    const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem("todos") || "[]"));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const addTodo = useCallback(( title: string, description: string, status: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      description,
      status,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const updateTodo = useCallback((id: string, title: string, description: string, status: string) => {
    if(!id) return
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title, description, status };
        }
        return todo;
      })
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodo;
