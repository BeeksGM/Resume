import React from "react";
import resume from "./Images/Resume.pdf";
import image1 from "./Images/logo.png";

const Section1 = ({ primaryColor, secondaryColor }) => {
  return (
    <section className="p-3" id="Section1" style={{ color: primaryColor }}>
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="container">
            <div className="inner cover">
              <h1 className="cover-heading mb-3">
                Web Developer &amp; Digital Media Strategist
              </h1>
              <p className="lead">
                Digital Media Expert with a background in Web Development. Deep
                knowledge of popular frameworks such as: React.js, Angular,
                .NET. Understanding of User Interface &amp; Experience design and
                common core Web practices. Experience in Software development
                cycles &amp; Agile work enviroments.
              </p>

              <hr />
              <div className="row">
                <div className="col col-lg-6 col-sm-12">
                  <p className="lead">
                    <a
                      href="#Section2"
                      class="btn btn-lg btn-outline-secondary"
                    >
                      Learn More!
                    </a>
                  </p>
                </div>
                <div className="col col-lg-6 col-sm-12">
                  <p className="lead">
                    <a
                      href={resume}
                      download
                      class="btn btn-lg btn-outline-secondary"
                    >
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
