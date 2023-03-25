import React, { useState, useContext } from "react";
import Icons from "../icons";
import Settings from "./Settings";
import { UserContext } from "../Context";

export default function Nav() {
  const user = useContext(UserContext);
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <nav>
        {user ? (
          <button className="icon-menu">
            <img className="icon" src={Icons.menu} alt="menu" />
          </button>
        ) : null}
        <ul>
          <li>
            <button onClick={handleClick}>
              <img className="icon" src={Icons.settings} alt="settings" />
            </button>
          </li>
        </ul>
      </nav>
      {visible ? <Settings user={user} /> : null}
    </>
  );
}
