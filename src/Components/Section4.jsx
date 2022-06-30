import React from "react";
import image1 from "./Images/image1.png";
import image2 from "./Images/typescripts.png";
import image3 from "./Images/mwhbooks.PNG";
import image4 from "./Images/rocklegal.PNG";
import image6 from "./Images/thissite.PNG"
import downloads from "./Images/Website Cloud.xd"

const Section4 = (primaryColor, secondaryColor) => {
  return (
    <section className="mt-3" id="Section4">
      <div className="row">
        <h1 className="m-3" style={{secondaryColor}}>Projects</h1>
        {/* 
        First Card
        */}
        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
          <div className="card -rem">
            <img src={image1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <u>Web Based ScoreBoard</u>
              </h5>
              <p className="card-text">
                I designed this web based scoreboard to help non profit sports
                programs project their game scores on Screens/TVs/Projectors
                without having to buy expensive equipment or Scoreboards. This
                application is created entirely of React.js and I have also a
                backend created using C# that allows customers to save there
                games and even have additional functionality coming.
              </p>
              <a
                href="https://github.com/BeeksGM/Scoreboard-MockUp"
                className="btn btn-primary p-2 m-2"
              >
                Github Project Code
              </a>
              <a
                href="https://beeksgm.github.io/Scoreboard-MockUp/"
                className="btn btn-warning p-2 m-2"
              >
                Live Demo Site
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
          <div className="card -rem">
            <img src={image3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <u>Author's Site</u>
              </h5>
              <p className="card-text">
                This was a freelance opportuinity where I built this site for an
                Author. I really believe in his vision and together we designed
                a great site. Mainly using Wix.com to create the designs with
                some custom Html/CSS and JS. I also provided SEO and Digital
                Marketing Services as well as assisted with written content for
                the site.
              </p>
              <a
                href="https://www.markwilliamhammond.com/"
                className="btn btn-primary"
              >
                Take A Look!
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
          <div className="card -rem">
            <img src={image2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <u>Vacation and Time Automation Scripts</u>
              </h5>
              <p className="card-text">
                These scripts were build. Unfortunately the software is
                proprietary however the scripts are written in Typescript and
                created using Excel api's you can see the scripts in the link
                below and see how the scripts manipulate Excel sheets.
              </p>
              <a
                href="https://github.com/BeeksGM/PIX-Vacation-Automation"
                className="btn btn-primary m-2"
              >
                Github Source Excel Scripts v2.0
              </a>
              <a
                href="https://github.com/BeeksGM/Time-Off-Automation"
                className="btn btn-outline-danger m-2"
              >
                Github Source Excel Scripts v1.0
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
          <div className="card -rem">
            <img src={image4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <u>Rock Legal Non-Profit</u>
              </h5>
              <p className="card-text">
                I worked on this Website with a Non Profit Legal Client. Here I
                designed the website according to specifications provided and
                had some creative freedoms to use custom Html/CSS. I also
                provided SEO and Digital Marketing work as well as managed
                content on the site for some time.
              </p>
              <a
                href="https://www.rocklegal.org/"
                className="btn btn-primary m-2"
              >
                Take A Look!
              </a>
            </div>
          </div>
        </div>
  
        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
          <div className="card -rem">
            <img src={image6} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <u>This Site</u>
              </h5>
              <p className="card-text">
                Interested how I did this site? Check out the Github and you can
                even download the Adobe XD Project here! I create websites using custom code, and Wix/Wordpress. My specialty is SEO/Digital Marketing and Simple Modern Design
              </p>
              <p>All Graphics we created by me using Adobe Creative Suite.</p>
              <a
                href="https://github.com/BeeksGM/Resume"
                className="btn btn-primary m-2"
              >
                Github Source Code
              </a>
              <a
                href={downloads}
                className="btn btn-warning m-2"
                download
              >
                Download XD Files
              </a>
            </div>
          </div>
        </div>
        <p className="text-white">
          <a className="btn btn-outline-dark m-2" href="#Header">
            Back to Top
          </a>
        </p>
      </div>
    </section>
  );
};

export default Section4;
