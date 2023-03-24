import React from "react";
import Icons from "../icons";
import { NavLink } from "react-router-dom";

export default function MenuList() {
  return (
    <>
      <aside>
        <ul>
          <li>
            <NavLink to="/accounts">
              <img className="icon" src={Icons.dashboard} alt="dashboard" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/balances">
              <img className="icon" src={Icons.accounts} alt="accounts" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions">
              <img
                className="icon"
                src={Icons.transactions}
                alt="transactions"
              />
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}
