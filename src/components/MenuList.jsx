import React from "react";
import Icons from "../icons";

export default function MenuList() {
  return (
    <>
      <aside>
        <ul>
          <li>
            <img className="icon" src={Icons.dashboard} alt="dashboard" />
          </li>
          <li>
            <img className="icon" src={Icons.accounts} alt="accounts" />
          </li>
          <li>
            <img className="icon" src={Icons.transactions} alt="transactions" />
          </li>
        </ul>
      </aside>
    </>
  );
}
