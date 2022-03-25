import { useState, useEffect } from "react";
import axios from "axios";
const Usersql = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    axios
      .get("/usersql")
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const createUser = (event) => {
    event.preventDefault();
    let userOb = {
      email: event.target.email.value,
      password: event.target.password.value,
      userinfo: event.target.userinfo.value,
      dob: event.target.dob.value,
    };
    axios
      .post("/usersql", userOb)
      .then((res) => {
        getUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteUser = (id) => {
    axios
      .delete("/usersql/" + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getUsers();
  };
  let deleteAll = () => {
    axios.delete("/usersql").then((res) => {
      console.log(res.data);
    });
    getUsers();
  };
  return (
    <div>
      <form onSubmit={createUser} className="Form">
        <h1 className="Heading">USERS APP</h1>
        <input
          type="email"
          name="email"
          className="form-element"
          Placeholder="Enter Your Email"
          required
        />
        <input
          type="password"
          name="password"
          className="form-element"
          Placeholder="Enter Password"
          required
        />
        <textarea
          name="userinfo"
          className="form-element description"
          Placeholder="Enter userInformation"
          required
        ></textarea>
        <input type="date" name="dob" className="form-element" required />
        <button className="Button">Add USER</button>
      </form>
      <div className="Container">
        {users.map((val, index) => {
          return (
            <div className="Div">
              <p>
                <b>User Email: </b>
                {val.email}
              </p>
              <p>
                <b>User Password: </b>
                {val.password}
              </p>
              <div className="Description ">
                <b>User Info : </b>
                {val.userinfo}
              </div>
              <p>
                <b>Date of Birth: </b>
                {val.dob}
              </p>
              <button onClick={() => deleteUser(val.id)} className="Button2">
                Delete User
              </button>
            </div>
          );
        })}
        <button onClick={deleteAll} className="Button">
          Delete All Users
        </button>
      </div>
    </div>
  );
};
export default Usersql;
