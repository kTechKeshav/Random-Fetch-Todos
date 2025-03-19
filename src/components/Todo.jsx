import React, { useEffect, useState } from "react";

const Todo = (props) => {
  const [priorityColor, setPriorityColor] = useState("white");

  useEffect(() => {
    let temp =
      props.priority === "High"
        ? "orange"
        : props.priority === "Low"
        ? "cyan"
        : "yellow";
    setPriorityColor(temp);
  }, [props.priority]);

  // const getPriorityColor = (type)=>{
  //   if(type === "High")
  //     return "red";
  //   if(type === "Medium")
  //     return "cyan";
  //   return "yellow";
  // }

  return (
    <div
      className="w-56 h-80 m-1 p-2 rounded-md flex justify-start gap-1 flex-col border-black border-2"
      style={{ backgroundColor: priorityColor }}
    >
      {props.priority + ""}
      <ul className="w-full h-1/6 rounded-full border-2 px-3 flex items-center justify-between bg-white">
        <li className="border w-7 text-center p-1 rounded-full text-sm font-semibold border-black bg-black text-white">
          {props.id}
        </li>
        <li className="text-sm font-semibold">{props.category}</li>
      </ul>
      <div className="w-full h-2/3  bg-lime-200 text-black font-mono p-1 border-black rounded overflow-auto text-sm">
        {props.task}
      </div>
      <ul className="w-full h-1/6 p-2 text-xs font-extrabold flex items-center justify-between">
        <li>{props.dueDate}</li>
        <button className="border p-1 border-black rounded hover:text-white hover:bg-black">
          {props.completed === true ? "Done" : "Not Done"}
        </button>
      </ul>
    </div>
  );
};

export default Todo;
