import useLocalStorage from "use-local-storage";
import {Outlet} from "react-router-dom"
function MyComponent() {
      const [name, setName] = useLocalStorage("name", "");
      const show = () => {
        alert(localStorage.getItem("name"));
      };
      return (
        
        <div className="item">
            <Outlet/>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setName(event.target.name.value);
            }}
          >
            <input name="name" type="text" placeholder="enter Name" />
            <br />
            <button type="submit">Submit</button>
            <br />
            <button onClick={show}>Show User Name</button>
            <br />
          </form>
        </div>
      );
    };
export default MyComponent;

