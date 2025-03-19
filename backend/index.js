const todos = require("./todoData.js");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("You are at root route.");
});

app.get("/todosRandom", (req, res) => {
  const val = Math.floor(Math.random() * 25) + 1;
  let newTodos = todos.slice(0, val);
  res.status(200).json({ newTodos });
});

app.get("/todos:count", (req, res) => {
  const val = parseInt(req.params.count);
  let newTodos = val >= 1 ? todos.slice(0, val) : [];
  res.status(200).json({ newTodos });
});

app.get("/todo:id", (req, res) => {
  const searchID = parseInt(req.params.id);
  const getTodo = todos.find((todo) => todo.id === searchID);
  if (!getTodo)
    res.json({
      msg: "No todo is there with the provided ID",
    });
  else {
    res.json({
      getTodo,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Port is running at ${PORT}`);
});
