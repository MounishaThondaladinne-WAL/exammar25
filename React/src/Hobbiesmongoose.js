import { useState, useEffect } from "react";
import axios from "axios";
const HobbyServermongoose = () => {
  let [hobbies, setHobbies] = useState([
    {
      hobby: "coding",
      description: "Coding is a good skill.",
      doc: "12 - 3 - 2022",
    },
  ]);
  useEffect(() => {
    getHobby();
  }, []);
  const getHobby = () => {
    axios
      .get("/hobby")
      .then((res) => {
        setHobbies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let addHobby = (event) => {
    event.preventDefault();
    let hobbyObject = {
      hobby_name: event.target.hobby_name.value,
      doc: event.target.doc.value,
      description: event.target.description.value,
    };
    console.log(hobbyObject);
    axios
      .post("/hobby", hobbyObject)
      .then((res) => {
        getHobby();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteHobby = (indexToDelete) => {
    axios
      .delete("/hobby/" + indexToDelete)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getHobby();
  };
  return (
    <div>
      <h1>Hobbies</h1>
      <form onSubmit={addHobby}>
        <input type="text" name="hobby_name" placeholder="Hobby" />
        <br />
        <input type="date" name="doc" placeholder="Date" />
        <br />
        <textarea name="description" placeholder="Description"></textarea>
        <br />
        <button>Add</button>
      </form>
      {hobbies.map(function (val, index) {
        return (
          <div>
            Hobby : {val.hobby_name}
            <br />
            description: {val.description}
            <br />
            date of creation: {val.doc}
            <br />
            <button
              onClick={() => {
                deleteHobby(val._id);
              }}
            >
              {" "}
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default HobbyServermongoose;
