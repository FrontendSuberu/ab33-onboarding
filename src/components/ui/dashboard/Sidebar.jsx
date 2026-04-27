import React from "react";
import { Link } from "react-router-dom";
import Logo from "/logoMain.svg";

export default function Sidebar() {
  return (
    <div className="bg-white w-75 relative">
      {/* button toggle to close and open component */}
      <button className="absolute h-screen right-[-40px]">
        <span className="bg-gray-400">toggle</span>
      </button>

      {/* header */}
      <div>
        <img src={Logo} alt="ab33" />
      </div>

      <nav>
        <ul>
          <li>
            <Link to="#">Campaigns</Link>
          </li>
          <li>
            <Link to="#">Analytics</Link>
          </li>
          <li>
            <Link to="#">Messaging</Link>
          </li>
          <li>
            <Link to="#">Notifications</Link>
          </li>
        </ul>
      </nav>

      <div>
        <div></div>
        <div>
          <p>Joseph Suberu</p>
          <p>joeysuberu@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
