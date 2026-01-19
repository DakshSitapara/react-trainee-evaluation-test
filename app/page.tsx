"use client";

import { getUser, averageAge, format , fetchUsers } from "@/js/js";
import Todo from "../todo/todo";

export default function Home() {
  getUser();
  averageAge();
  format();
  fetchUsers();
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Todo />
    </div>
  );
}

