import { useFormik } from "formik";
import axios from "axios";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit(values) {
      axios
        .post("http://localhost:1337/api/auth/local", {
          identifier: values.username,
          password: values.password,
        })
        .then((response) => {
          localStorage.setItem("regtoken", JSON.stringify(response.data.jwt));
          console.log("User token", response.data.jwt);
          console.log(response.data);
        })
        .catch((error) => {
          console.log("An error occurred:", error.response);
        });
    },
    validate() {},
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="Login-Form" noValidate>
        <h1 className="heading">Login In</h1>
        <label className="label">Username</label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          className="form-element"
        />
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="form-element"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button className="Login-Button">Login In</button>
      </form>
    </>
  );
};
export default Login;
