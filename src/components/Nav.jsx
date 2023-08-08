import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
// import Icons from "../icons";
// import Settings from "./Settings";
// import { UserContext, MenuContext } from "../Context";

import "../assets/styles/Nav.css";

// const menuItems = [
//   { key: "accounts", name: "Accounts", link: "/accounts" },
//   { key: "transactions", name: "Transactions", link: "/transactions" },
//   { key: "settings", name: "Settings", link: "/settings" },
// ];

Nav.propTypes = {
  menuContent: PropTypes.array,
};

export default function Nav({ menuContent }) {
  // const user = useContext(UserContext);
  // const menu = useContext(MenuContext);
  // const [visible, setVisible] = useState(false);

  // const handleClick = () => {
  //   setVisible(!visible);
  // };

  // const showMenu = () => {
  //   setMenu(!menu);
  // };

  return (
    <>
      <nav className="nav">
        <Link className="logo" to="/">
          <FontAwesomeIcon icon={faScaleBalanced} />
        </Link>

        <ul className="nav-menu">
          {menuContent.map((item) => (
            <Link className="nav-menu-item" key={item.settings} to={item.link}>
              {item.name}
            </Link>
          ))}
          {/* <li className="menu">
            {user ? (
              <button className="icon-menu" onClick={showMenu}>
                <img className="icon" src={Icons.menu} alt="menu" />
              </button>
            ) : null}
          </li> */}
          {/* <li className="settings">
            <button onClick={handleClick}>
              <img className="icon" src={Icons.settings} alt="settings" />
            </button>
          </li> */}
        </ul>
      </nav>

      {/* {visible ? (
        <Settings
          setSettings={setVisible}
          setMenu={setMenu}
          setUser={setUser}
          user={user}
        />
      ) : null} */}
    </>
  );
}
