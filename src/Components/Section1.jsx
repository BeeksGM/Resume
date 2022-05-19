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
                Having been always interested in Game Design and Web
                Development, C# allowed me to pursue both my loves at once. C#
                is used in Unity3d for Game Development and .NET for Web &amp;
                App Development and while I still have much to learn. I am
                pursuing my passion in both Web and Game Development using my
                new favorite language C#.
              </p>
              
              <p className="lead">
                I am an experienced Digital Media Manager and Systems Admin with
                a background in Web Development with frameworks like .Net,
                React.js, and more! Additional skills in Digital Marketing, SEO,
                Web Design, UI/UX Design and Popular Web Analytic Softwares and
                still growing!
              </p>
              <hr/>
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
