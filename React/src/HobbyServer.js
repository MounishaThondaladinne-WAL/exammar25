import { useState, useEffect } from "react";
import axios from "axios";
const HobbyServer = () => {
  const [hobbies, setHobbies] = useState([]);
  useEffect(() => {
    getHobbies();
  }, []);
  const getHobbies = () => {
    axios
      .get("/hobbies")
      .then((res) => {
        setHobbies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const hobbySubmit = (event) => {
    event.preventDefault();
    let hobbyOb = {
      hobby: event.target.hobby.value,
      description: event.target.hobbyDescription.value,
      doc: event.target.doc.value,
    };
    axios
      .post("/hobbies", hobbyOb)
      .then((res) => {
        getHobbies();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteProduct = (indexToDelete) => {
    axios
      .delete("/hobbies/" + indexToDelete)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getHobbies();
  };
  const deleteAll = () => {
    axios
      .get("/hobbies/clearall")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getHobbies();
  };
  return (
    <div>
      <form onSubmit={hobbySubmit} className="Hobby-Form">
        <h1 className="hobby-Heading">Hobbies</h1>
        <input
          type="text"
          name="hobby"
          placeholder="Mention ur Hobby"
          className="form-element"
        />
        <textarea
          name="hobbyDescription"
          placeholder="Hobby Description"
          className="form-element description"
        ></textarea>
        <input type="date" name="doc" className="form-element" />
        <button className="Hobby-Button">Add Hobby</button>
      </form>
      <div className="Hobby-Container">
        {hobbies.map((val, index) => {
          return (
            <div className="Hobby-Div">
              <h3>Hobby {index + 1}</h3>
              <p>
                <b>Hobby: </b>
                {val.hobby}
              </p>
              <div className="Hobby-Description ">
                <b>Hobby Description : </b>
                {val.description}
              </div>
              <p>
                <b>Date of Creation : </b>
                {val.doc}
              </p>
              <button
                onClick={() => deleteProduct(index)}
                className="Hobby-Button"
              >
                Delete Product
              </button>
            </div>
          );
        })}
        <button onClick={deleteAll} className="Hobby-Button">
          Delete All Products
        </button>
      </div>
    </div>
  );
};
export default HobbyServer;
