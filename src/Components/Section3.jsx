import React from "react";

const Section3 = (primaryColor, secondaryColor) => {
  return (
    <section
      className="m-3 p-3"
      style={{ backgroundColor: secondaryColor }}
      id="Section3"
    >
      <h1 className="p-3">Skills</h1>
      <img src="https://via.placeholder.com/1200x600"></img>
      <p className="text-white">
        <a className="btn btn-outline-primary m-2" href="#Header">
          Back to Top
        </a>
      </p>
    </section>
  );
};

export default Section3;
