import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutProfile = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="35"
          viewBox="0 0 49 35"
          fill="none"
        >
          <rect y="15" width="20" height="20" rx="10" fill="#9C69E2" />
          <rect x="29" width="20" height="35" rx="10" fill="#F063B8" />
        </svg>
        <ul className="nav-link">
          <li>
            <Link className="post-link" to={"/post"}>
              Posts
            </Link>
            <div className="btn-logout-profile">Logout</div>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default LayoutProfile;
