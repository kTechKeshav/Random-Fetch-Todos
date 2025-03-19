import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const RandomTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(()=>{
        fetch("https://random-fetch-todos.onrender.com/todosRandom").then(async (response) => {
          const finalRes = await response.json();
          setTodos(() => finalRes.newTodos);
        });
    }, 5000)

    // axios.get("http://127.0.0.1:7000/todos4").then((response) => {
    //   setTodos(() => response.data.newTodos);
    // });
  }, []);

  return (
    <div className="bg-gray-800 p-4 h-screen flex flex-col items-center gap-3">
      <h2 className="text-white capatalize text-3xl text-center font-mono font-semibold">
        Random Todos fetching from Backend
      </h2>
      <div className="rounded-2xl w-full p-1 h-full py-4 bg-black flex justify-center flex-wrap overflow-auto">
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}

        <button>Get Random Todos</button>
      </div>
    </div>
  );
};

export default RandomTodos;
