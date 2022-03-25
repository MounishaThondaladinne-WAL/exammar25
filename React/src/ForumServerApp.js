import { useFormik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
const ForumServerApp = () => {
  let [forum, setForums] = useState([]);
  useEffect(() => {
    getForums();
  }, []);
  const getForums = () => {
    axios
      .get("/forums")
      .then((res) => {
        setForums(res.data);
      })
      .catch((error) => console.log(error));
  };
  const deleteForum = (indexToDelete) => {
    axios
      .delete("/forums/" + indexToDelete)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    getForums();
  };
  const deleteAll = () => {
    axios
      .get("/forums/clearall")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getForums();
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      doc: "",
      body: "",
      author: "",
    },
    onSubmit(values) {
      let forumObj = {
        title: values.title,
        doc: values.doc,
        body: values.body,
        author: values.author,
      };
      axios.post("/forums", forumObj).then((res) => {
        console.log(res.data);
        getForums();
      });
      axios.get("/forums").then((res) => console.log(res));
    },
    validate() {
      const errors = {};
      if (formik.values.title.length < 10 || formik.values.title.length > 100) {
        errors.title = "Title should have 10-100 chars";
      }
      if (formik.values.body.length < 50 || formik.values.body.length > 500) {
        errors.body = "Description should have 50-500 chars";
      }
      if (formik.values.author.length < 5 || formik.values.author.length > 50) {
        errors.author = "Author name should have  5-50 chars";
      }
      if (!formik.values.author.match(/^[0-9a-zA-Z]+$/)) {
        errors.author = "Only Alpha Numerics";
      }
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} noValidate className="Forum-Form">
        <h1 className="heading">Forum App</h1>
        <label className="label">Forum Title</label>
        <input
          type="text"
          name="title"
          onChange={formik.handleChange}
          className="form-element"
        />
        <div className="Forum-Error">
          {formik.errors.title ? formik.errors.title : null}
        </div>
        <label className="label">Date of Creation</label>
        <input
          type="date"
          name="doc"
          onChange={formik.handleChange}
          className="form-element"
        />
        <label className="label">Forum Description</label>
        <textarea
          type="text"
          name="body"
          onChange={formik.handleChange}
          className="form-element description"
        ></textarea>
        <div className="Forum-Error">
          {formik.errors.body ? formik.errors.body : null}
        </div>
        <label className="label">Author</label>
        <input
          type="text"
          name="author"
          onChange={formik.handleChange}
          className="form-element "
        />
        <div className="Forum-Error">
          {formik.errors.author ? formik.errors.author : null}
        </div>
        <div>
          <button className="Forum-Button">Submit</button>
        </div>
      </form>
      <div className="Container">
        {forum.map((val, index) => {
          return (
            <div className="Div">
              <h3>Forum {index + 1}</h3>
              <p>
                <b>Forum Title : </b>
                {val.title}
              </p>
              <p>
                <b>Date of Creation: </b>
                {val.doc}
              </p>
              <div className="Forum-Description ">
                <b>Forum Description : </b>
                {val.body}
              </div>
              <p>
                <b>Forum Author : </b>
                {val.author}
              </p>
              <button
                onClick={() => deleteForum(index)}
                className="Forum-Button"
              >
                Delete Product
              </button>
            </div>
          );
        })}
        <button onClick={deleteAll} className="Forum-Button">
          Delete All Products
        </button>
      </div>
    </div>
  );
};
export default ForumServerApp;
