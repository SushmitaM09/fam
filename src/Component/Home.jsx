import React, { useState } from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [userName] = useState('Gabimaru');
  
  return (
    <div className="container2">

      <div className="header d-flex align-items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&s"
          alt="Avatar"
          className="nav-photo"
          style={{ marginRight: "10px" }}
        />
        <div className="dropdown">
          <a
            className="btn fs-4 dropdown-toggle"
            id="dropdownMenuButton"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-label="User options"
          >
            User
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownMenuButton"
          >
            <li>
              <a className="dropdown-item" href="#">
                Setting
              </a>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </div>

   

      {/* Pass the userName to child routes */}
      <Outlet context={{ userName }} />

      <Sidebar />
    </div>
  );
};

export default Home;
