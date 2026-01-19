'use client'

import { useState, useRef } from "react";
import  useTodo  from "../todo/useTodo";

interface Todo {
  id: string;
  title: string;
  description: string;
  status: string;
}

export default function Todo() {

  const [add, setAdd] = useState(false)

  const toggleModal = () => setAdd(!add);

  return (
    <div className="flex flex-col w-full p-4 relative min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <header className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 p-4 mb-4 w-full shadow-sm">
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          Task Manager App
        </h1>
        <button 
          onClick={() => setAdd(true)} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-md"
        >
          + {" "} Add Task
        </button>
      </header>

      {add && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={toggleModal}
          ></div>

          <div className="relative z-50 w-full max-w-md mx-4 p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">Create Task</h2>
              <button 
                onClick={toggleModal}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 text-2xl font-bold"
              >
                x
              </button>
            </div>
            
            <TodoForm />
          </div>
        </div>
      )}

      <section className="w-full max-w-7xl">
        <TodoList />
      </section>
    </div>
  );
}

export function TodoForm({id}: {id?: string}) {

  const { addTodo, todos, updateTodo, deleteTodo } = useTodo()

  const todo = todos.find((todo) => todo.id === id)
    const [title, setTitle] = useState(todo ? todo.title : "")
    const [description, setDescription] = useState(todo ? todo.description : "")
    const [status, setStatus] = useState(todo ? todo.status : "todo")
    const [eror, setError] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        try {
          if(id) {
            updateTodo(id, title, description, status)
          } else {
            addTodo(title, description, status)
          }
            setTitle("")
            setDescription("")
            setStatus("todo")
          }catch (error) {
            setError(error as string)
          }finally {
            window.location.reload()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
          {eror && <p className="text-red-500">{eror}</p>}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Title:
                </label>
                <input 
                    id="title" 
                    type="text" 
                    value={title}
                    ref={inputRef} 
                    onChange={e => setTitle(e.target.value)} 
                    required 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                /> 
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description:
                </label>
                <textarea 
                    id="description"
                    value={description} 
                    onChange={e => setDescription(e.target.value)} 
                    required 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                    Status:
                </label>
                <select 
                      id="status" 
                      value={status} 
                      onChange={e => setStatus(e.target.value)} 
                      required 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    >
                    <option disabled>Select status</option>
                    <option value="todo">Todo</option>
                    <option value="pending">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <div className="flex items-center justify-between">
                <button 
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >{id ? "Update" : "Create"}</button>
                {id && <button 
                    onClick={() => deleteTodo(id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >Delete</button>
                }
            </div>
        </form>
    )
}

export function TodoList() {

    const { todos } = useTodo()
    const [status, setStatus] = useState("all")
    const [search, setSearch] = useState("")

    const filteredTodos = todos.filter((todo) => {
        if (status === "all") {
            return todo.title.toLowerCase().includes(search.toLowerCase())
        } else {
            return todo.status === status && todo.title.toLowerCase().includes(search.toLowerCase())
        }
    })
    
    return (
      <>
        <div className="flex mb-4 justify-between">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
                Search:
            </label>
            <input 
                id="search" 
                type="text" 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                Filter by Status:
            </label>
            <select 
                  id="status" 
                  value={status} 
                  onChange={e => setStatus(e.target.value)} 
                  required 
                  className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                >
                <option value="all">All</option>
                <option value="todo">Todo</option>
                <option value="pending">In Progress</option>
                <option value="done">Done</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            {filteredTodos.length === 0 ? (
                <p className="text-center text-2xl font-bold">
                  {todos.length === 0 ? "No todos yet" : "No matching todos"}
                </p>
            ) : (
                filteredTodos.map((todo) => (
                    <div key={todo.id} className="bg-white p-4 rounded shadow-md">
                        
                      <div className="gap-2 space-x-2">
                        <TodoForm id={todo.id} />
                      </div>
                    </div>
                ))
            )}
        </div>
        </>
    )
}
