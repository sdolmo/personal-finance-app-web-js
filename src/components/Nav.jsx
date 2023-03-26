import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Icons from "../icons";
import Settings from "./Settings";
import { UserContext, MenuContext } from "../Context";

Nav.propTypes = {
  setMenu: PropTypes.func,
  setUser: PropTypes.func,
};

export default function Nav({ setUser, setMenu }) {
  const user = useContext(UserContext);
  const menu = useContext(MenuContext);
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav>
        {user ? (
          <button className="icon-menu" onClick={showMenu}>
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
      {visible ? (
        <Settings
          setSettings={setVisible}
          setMenu={setMenu}
          setUser={setUser}
          user={user}
        />
      ) : null}
    </>
  );
}
