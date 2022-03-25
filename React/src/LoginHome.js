import axios from "axios";
const LoginHome = () => {
  const Submit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: event.target.username.value,
        password: event.target.password.value,
      })
      .then((response) => {
        localStorage.setItem("regtoken", JSON.stringify(response.data.jwt));
        console.log("User token", response.data.jwt);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <form onSubmit={Submit} className="Login-Form">
      <h1 className="heading">Sign In</h1>
      <label className="label">Username</label>
      <input type="text" name="username" className="form-element" />
      <label className="label">Password</label>
      <input type="password" name="password" className="form-element" />
      <button className="Login-Button">Sign In</button>
    </form>
  );
};
export default LoginHome;
