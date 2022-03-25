import { useState, useEffect } from "react";
import axios from "axios";
const TodoSqlApp = () => {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = () => {
    axios
      .get("/todosql")
      .then((res) => {
        setTodos(res.data.results);
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
      .post("/todosql", todoObject)
      .then((res) => {
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteTodoOb = (item) => {
    axios
      .delete("/todosql/" + item)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getTodos();
  };
  let deleteAll = () => {
    axios.delete("/todosql").then((res) => {
      console.log(res.data);
    });
    getTodos();
  };
  return (
    <div>
      <form onSubmit={addTodo} className="Form">
        <h1 className="Heading">TODOS APP</h1>
        <input
          type="text"
          name="item"
          className="form-element"
          Placeholder="Enter Todo item"
          required
        />
        <select name="status" className="form-element" required>
          <option>status</option>
          <option value="compelete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button className="Button">Add Todo</button>
      </form>
      <div className="Container">
        {todos.map((val, index) => {
          return (
            <div className="Div">
              <b>Todo:</b>
              {val.item}
              <br />
              <b>Status:</b>
              {val.status}
              <button
                className="Button2"
                onClick={() => {
                  deleteTodoOb(val.item);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button className="Button" onClick={deleteAll}>
          Delete All Todos
        </button>
      </div>
    </div>
  );
};
export default TodoSqlApp;
