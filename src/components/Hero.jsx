import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/Hero.css";

Hero.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default function Hero({ heading, subHeading }) {
  return (
    <>
      <header className="hero">
        <div className="hero__text-box">
          <div className="heading">
            <h1>
              <span className="heading__main">{heading}</span>
              <span className="heading__sub">{subHeading}</span>
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}
