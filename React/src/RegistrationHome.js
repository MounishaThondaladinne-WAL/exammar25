import axios from "axios";
const Registration = () => {
  const Submit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:1337/api/auth/local/register", {
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
        phone: event.target.phone.value,
      })
      .then((response) => {
        localStorage.setItem("regtoken", JSON.stringify(response.data.jwt));
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <form onSubmit={Submit} className="Registration-Form">
      <p className="Registration-Error"></p>
      <h1 className="heading">Create account</h1>
      <label className="label">Username</label>
      <input type="text" name="username" className="form-element" />
      <label className="label">Email</label>
      <input type="email" name="email" className="form-element" />
      <label className="label">Mobile number</label>
      <input
        type="tel"
        name="phone"
        pattern="[0-9]{10}"
        className="form-element"
      ></input>
      <label className="label">Password</label>
      <input
        type="password"
        name="password"
        className="form-element"
        placeholder="At least 6 Characters"
      />
      <button className="Registration-Button">Register</button>
    </form>
  );
};
export default Registration;
