import logo from './logo.svg';
import './App.css';
import BetterCounter from './BetterCounter';
import MyComponent from './UseLocalStorage';
import Add from './Add';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import ShowNameAndAge from './ShowNameAndAge';
import TodoApp from './TodoAppCustomHooks';
import ShowHobbies from './ShowHobbies';
import Todos from './AssignmentMarch1/Todoapp';
import './AssignmentMarch1/Todo.css'
import TodoCount from "./Tutorials/TodoCount";
import TodoList from './Tutorials/TodoList';
import AddTodo from './Tutorials/AddTodo';
import { useState } from "react";
import Employee from './ExamMarch2/EmployeeRouter';
import AllProducts from './ExamMarch2/AllProducts';
import AddProducts from './ExamMarch2/AddProduct';
import TotalProducts from './ExamMarch2/TotalProducts';
import ProtectedRoute from './ProtectedRouter';
import Login from './Login';
import RegisterRouter from './AssignmentMarch2/RegisteRouter';
import LoginRouter from './AssignmentMarch2/LoginRouter';
import MembersRouter from './AssignmentMarch2/MembersRouter';
import './AssignmentMarch2/RegisterApp.css'
import Hobbies from './ExamMarch3/Hobby';
import ReduxCounter from './March3/ReduxCounter';
import TodoMainApp from './AssignmentMarch3/TodoMainApp';
function App() {
  //const [todos, setTodos] = useState(["item 1", "item 2", "item 3"]);
  const [product,setProduct] = useState(["Chocolate","Lays"])
  return (
    <div className="App">
      {/*<BrowserRouter>
    <a href="/bettercounter">BetterCounter</a><br/>
    <Link to ="/bettercounter">BetterLinkCounter</Link><br/>
    <Link to="/uselocalstorage">LinkLocalStorage</Link><br/>
    <Link to="/show/Mounisha/21">show name and age</Link><br/>
    <Link to="/bettercounter/todo">Todo as a child</Link>
    <Routes>
      <Route path="/bettercounter" element={<BetterCounter/>}>
      <Route path="todo" element={<TodoApp/>}/>
      </Route>
      <Route path="/uselocalstorage" element={<MyComponent/>}/>
      <Route path="/show/:name/:age" element={<ShowNameAndAge/>}/>
    </Routes>
    </BrowserRouter>
   <BrowserRouter>
   <Link to="/uselocalstorage">LinkLocalStorage</Link><br/>
   <Link to="/uselocalstorage/counter">LinkCounter</Link><br/>
   <Routes>
   <Route path="/uselocalstorage" element={<MyComponent/>}>
   <Route path="counter" element={<BetterCounter/>}/>
   </Route>
   </Routes>
   </BrowserRouter>
    <TodoApp/>
    <BrowserRouter>
    <Link to ="/hobbylist/Gardening/Driving/Cooking/Coding/Reading">All Hobbies</Link>
    <Routes>
    <Route path="/hobbylist/:hobby1/:hobby2/:hobby3/:hobby4/:hobby5" element={<ShowHobbies/>}/>
    </Routes>
    </BrowserRouter>
    <Todos/>
      < TodoCount todos={todos} />
      < TodoList todos={todos} />
      < AddTodo setTodos={setTodos} />
      <BrowserRouter>
      <Link to="/employee/James/23/Mumbai/Joe/21/Banglore">Employee Link</Link>
      <Routes>
        <Route path="/employee/:name1/:age1/:city1/:name2/:age2/:city2" element={<Employee/>}/>
      </Routes>
      </BrowserRouter>
      < TotalProducts product={product} />
      < AddProducts setProduct={setProduct} />
      < AllProducts product={product} />
      <BrowserRouter>
      <Link to="/login">login</Link>
      <Link to="/hobbies">Better Link Hobbies</Link><br />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route element={<ProtectedRoute />}>
            <Route path="hobbies" element={<ShowHobbies />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
      <div className='App'>
      <h1>Registration App</h1>
      < Link to="/register" className="Link">Register</Link>
      <Link to="/login" className="Link">Login</Link>
      <Link to="/members" className="Link">Show Members</Link>
      </div>
      <Routes>
        <Route path = "/register" element = {<RegisterRouter/>}/>
        <Route path = "/login" element = {<LoginRouter/>}/>
        <Route path = "/members" element = {<MembersRouter/>}/>
      </Routes>
      </BrowserRouter>
      <Hobbies/>*/}
      <BrowserRouter>
      <Link to ="/reduxcounter">ReduxCounter</Link>
      <Routes>
      <Route path = "/reduxcounter" element = {<ReduxCounter/>}/>
      </Routes>
      </BrowserRouter>
      <TodoMainApp/>
    </div>
  );
}

export default App;
