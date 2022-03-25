import { useState, useEffect } from "react";
import axios from "axios";
const TodoServerApp = () => {
  let [todos, setTodos] = useState([
    { item: "Cook Break", status: "Complete" },
    { item: "coding", status: "incomplete" },
  ]);

  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = () => {
    axios
      .get("/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addTodo = (event) => {
    event.preventDefault();
    let todoObject = {
      item: event.target.item.value,
      status: event.target.status.value,
    };
    axios
      .post("/todos", todoObject)
      .then((res) => {
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteTodoOb = (indexToDelete) => {
    axios
      .delete("/todos/" + indexToDelete)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getTodos();
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" name="item" />
        <select name="status">
          <option value="compelete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button>Add</button>
      </form>
      {todos.map((val, index) => {
        return (
          <div className="App">
            Status:{val.status}
            <br />
            Todo:{val.item}
            <button
              onClick={() => {
                deleteTodoOb(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoServerApp;
