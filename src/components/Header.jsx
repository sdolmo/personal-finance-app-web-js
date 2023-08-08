import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/Header.css";

Header.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default function Header({ heading, subHeading }) {
  return (
    <>
      <header className="header">
        <div className="header__text-box">
          <div className="header">
            <h1>
              <span className="header__main">{heading}</span>
              <span className="header__sub">{subHeading}</span>
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}
