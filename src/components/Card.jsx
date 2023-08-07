import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faMoneyBill,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  iconImg: PropTypes.string,
};

const icons = { lock: faLock, bill: faMoneyBill, check: faMoneyCheck };

export default function Card({ title, content, iconImg }) {
  return (
    <>
      <section className="card">
        {/* <FontAwesomeIcon icon="fa-solid fa-check-square" /> */}
        <FontAwesomeIcon className="icon" icon={icons[iconImg]} />
        <h3 className="title">{title}</h3>
        <p className="text">{content}</p>
      </section>
    </>
  );
}
