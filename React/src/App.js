import "./App.css";
import TodoMainApp from "./AssignmentMarch3/TodoMainApp";
import "./AssignmentMarch3/TodoApp.css";
import Product from "./ExamMarch4/Product";
import ShowProducts from "./ExamMarch4/ShowProducts";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ForumComponent from "./AssignmentMarch7/ForumComponent";
import Todos from "./AssignmentMarch1/Todoapp";
import MyComponent from "./Table";
import SortTable from "./SortTable";
import PaginationTable from "./PaginationTable";
import Registration from "./RegistrationHome";
import "./RegistrationHome.css";
import Scroll from "./Scroll";
import axios from "axios";
import "./Scroll.css";
import { useEffect, useState } from "react";
import LoginHome from "./LoginHome";
import "./LoginHome.css";
import Footer from "./Footer";
import "./Footer.css";
import RegistrationHome from "./RegistrationHome2";
import Login from "./LoginHome2";
import TodoServerApp from "./TodoServerApp";
import ProductServer from "./ProductServerapp";
import ForumServerApp from "./ForumServerApp";
import "./productserver.css";
import "./ForumServer.css";
import HobbyServer from "./HobbyServer";
import "./Hobbyserver.css";
import TwitterServer from "./TwitterServer";
import "./Twitter.css";
import HobbyServermongoose from "./Hobbiesmongoose";
import TodoSqlApp from "./Todosql";
import AuthorSqlApp from "./AuthorSql";
import Usersql from "./UserSql";
function App() {
  return (
    <div>
      {/*<BrowserRouter>
        <div className="link-div">
          <Link to="/todos" className="link">
            Todos App
          </Link>
          <Link to="/authors" className="link">
            Authors App
          </Link>
        </div>
        <Routes>
          <Route path="/todos" element={<TodoSqlApp />} />
          <Route path="/authors" element={<AuthorSqlApp />} />
        </Routes>
      </BrowserRouter>*/}
      <Usersql />
    </div>
  );
}
export default App;
