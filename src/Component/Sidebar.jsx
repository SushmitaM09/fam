import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { FaXmark } from "react-icons/fa6";
import './Sidebar.css';

  const Sidebar = ({ onClickHandler }) => {
    const navLinkItems = [
      {
        idx: 1,
        title: "Dashboard",
        linkTo: "/home/dashboard",
        icon: MdDashboard
      },
    
 {
  idx: 2,
  title: "My Profile",
  linkTo: "/home/profile",
  icon:ImProfile,
 },
  {
    idx:3,
    title: "Change Password",
    linkTo: "/home/password",
    icon:  TbPasswordUser,
  },
{
  idx:4,
  title: "My Family",
  linkTo: "/home/family",
  icon:MdFamilyRestroom,
},

    ];

    return (
      <>
        <aside className="sidebar">
          <div className="sidenav-header d-flex py-2 pe-3">
            <Link className="side-text" to="/Component/Signin" target="_blank">
              <span className="ms-1 fw-bold">LOG IN</span>
            </Link>
            <div onClick={onClickHandler} className="xmark cursor-pointer">
              <FaXmark />
            </div>
            </div>
            <hr className="horizontal-divider mx-5" />
            <nav className=" navbar-nav">
              <ul className="nav-list lis-unstyled">
                {navLinkItems.map((items) => (
                  <li key={items.idx} className="nav-item">
                    <Link
                      to={items.linkTo}
                      onClick={onClickHandler}
                      className="nav-link mouse-pointer"
                    >
                      {items.icon && (
                        <div className="shadow  sidebar-icon icon-shape icon-sm shadow border-radius-md bg-whitr text-center me-2 d-flix align-items-center justify-content-center ">
                          {React.createElement(items.icon )}
                        </div>
                      )}
                      {items.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
        </aside>
      </>
    );
  };
  export default Sidebar;
