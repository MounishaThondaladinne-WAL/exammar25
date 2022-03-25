import { useState, useEffect } from "react";
import axios from "axios";
const AuthorSqlApp = () => {
  let [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors();
  }, []);
  const getAuthors = () => {
    axios
      .get("/authorsql")
      .then((res) => {
        setAuthors(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addAuthor = (event) => {
    event.preventDefault();
    let authorObject = {
      first_name: event.target.firstName.value,
      last_name: event.target.lastName.value,
      dob: event.target.dob.value,
      dod: event.target.dod.value,
    };
    axios
      .post("/authorsql", authorObject)
      .then((res) => {
        getAuthors();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteAuthorOb = (name) => {
    axios
      .delete("/authorsql/" + name)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getAuthors();
  };
  let deleteAll = () => {
    axios.delete("/authorsql").then((res) => {
      console.log(res.data);
    });
    getAuthors();
  };
  return (
    <div>
      <form onSubmit={addAuthor} className="Form">
        <h1 className="Heading">AUTHORS APP</h1>
        <input
          type="text"
          name="firstName"
          className="form-element"
          Placeholder="Enter Author's First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          className="form-element"
          Placeholder="Enter Author's Last Name"
          required
        />
        <input type="date" name="dob" className="form-element" required />
        <input type="date" name="dod" className="form-element" required />
        <button className="Button">Add Author</button>
      </form>
      <div className="Container">
        {authors.map((val, index) => {
          return (
            <div className="Div">
              <b>Author First Name:</b>
              {val.first_name}
              <br />
              <b>Author Last Name:</b>
              {val.last_name}
              <br />
              <b>Author DOB:</b>
              {val.dob}
              <br />
              <b>Author DOD:</b>
              {val.dod}
              <br />
              <button
                className="Button2"
                onClick={() => {
                  deleteAuthorOb(val.first_name);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button className="Button" onClick={deleteAll}>
          Delete All Authors
        </button>
      </div>
    </div>
  );
};
export default AuthorSqlApp;
