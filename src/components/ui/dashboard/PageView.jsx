import React from "react";
import { Link } from "react-router-dom";

export default function PageView() {
  return (
    <div className="bg-[#E4E4E4]">
      {/* header */}

      <div>logo</div>

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
