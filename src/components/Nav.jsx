import React from "react";
import Icons from "../icons";

export default function Nav() {
  return (
    <>
      <nav>
        <button className="icon-menu">
          <img className="icon" src={Icons.menu} alt="menu" />
        </button>
        <ul>
          <li>
            <img className="icon" src={Icons.settings} alt="settings" />
          </li>
        </ul>
      </nav>
    </>
  );
}
