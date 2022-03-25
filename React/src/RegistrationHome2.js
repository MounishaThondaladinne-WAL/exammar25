import { useFormik } from "formik";
import axios from "axios";
const RegistrationHome = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit(values) {
      axios
        .post("http://localhost:1337/api/auth/local/register", {
          username: values.username,
          email: values.email,
          password: values.password,
          phone: values.phone,
        })
        .then((response) => {
          localStorage.setItem("regtoken", JSON.stringify(response.data.jwt));
          console.log("User profile", response.data.user);
          console.log("User token", response.data.jwt);
        })
        .catch((error) => {
          console.log("An error occurred:", error.response);
        });
    },
    validate() {
      const errors = {};
      if (formik.values.username.length < 7) {
        errors.username = `" Username must be greater than 7 digits "`;
      }
      if (formik.values.password.length < 6) {
        errors.password = `" Password must be greater than 6 digits "`;
      }
      return errors;
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="Registration-Form"
        noValidate
      >
        <h1 className="heading">Create account</h1>
        <label className="label">Username</label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          className="form-element"
        />
        <p className="message">
          {formik.errors.username ? formik.errors.username : null}
        </p>
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="form-element"
        />
        <label className="label">Mobile number</label>
        <input
          type="tel"
          name="phone"
          pattern="[0-9]{10}"
          className="form-element"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="form-element"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <p className="message">
          {formik.errors.password ? formik.errors.password : null}
        </p>
        <button className="Registration-Button">Register</button>
      </form>
    </>
  );
};
export default RegistrationHome;
