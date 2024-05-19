"use client";

import { Button, Input } from "antd";
import { useEffect, useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("初期値");
  const [todos, setTodos] = useState([""]);

  useEffect(() => {
    const getTodosFromLocalStorage = localStorage.getItem("todos");
    const todoList = JSON.parse(getTodosFromLocalStorage || "[]");
    setTodos(todoList);
  },[])

  const handleSubmit = () => {
    console.log(value)
    setTodos([...todos, value]);
    localStorage.setItem("todos", JSON.stringify(todos));
    setValue("");
  }

  return (
    <div className="">
      <div className="flex">

      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button disabled={value === ""} onClick={handleSubmit}>決定</Button>
      </div>
      {
        todos.map((todo, index) => (
          <div className="flex border rounded-xl border-fuchsia-900 shadow p-3 mt-3 justify-between" key={index}>
            <h2 className="text-lg text-red-500">
            {todo}
            </h2>
            <Button onClick={() => setTodos(todos.splice(0, index))}>削除</Button>
          </div>
        ))
      }
    </div>
  )
}

export default Todo;