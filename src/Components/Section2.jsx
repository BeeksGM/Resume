import React from "react";
import Job from "./Job";
import pixlogo from "./Images/PIX11Logo.png";
import teklogo from "./Images/TekLogo.png";
import dblogo from "./Images/dblogo.png";

const Section2 = ({ primaryColor, secondaryColor }) => {
 
  const pixDesc = [
    "Designed React Application that utilized APIs to handle time and attendance",
    "Automated Excel functions with Typescript",
    "Designed Media Management Tools using WPF & .NET utilizing APIs and Google Firebase & AWS Platforms",
    "Automated licensing & digital content workflows with Selenium inside of .NET applications",
    "Designed and Created Internal Web Applications using React & Bootstrap for internal analytics",
    "Leveraged Google Analytics & Social Media analytics to enhance web traffic & open new revenue opportunities",
    "Implemented Responsive design patterns to increase mobile web traffic of external websites",
    
  ]; 
  const tekDesc = [
    "Project manager for all user system implementations",
    "Designed application in C# with ASP.net & SQL for AECOM students pick up & drop off on campus",
    "Created custom Powershell & C# scripts to facilitate easier PC deployment and maintenance",
    "Provided level 3 desktop support for advanced application/desk issues",    
  ];
  const dbDesc = [
    "Troubleshoot and support ATMs Software & Hardware",
    "Provided maintenance to minimize ATM and cash systems downtime",
    "Handled software and hardware updates to machines",
  ];

  return (
    <section
      className="Section"
      id="Section2"
      style={{ backgroundColor: secondaryColor, color: secondaryColor }}
    >
      <div className="container">
        <h1 className="pt-3 text-center" style={{ color: primaryColor }}>
          Experience
        </h1>
        <Job
          jobState={1}
          startDate="2019"
          endDate="2022"
          Title="Digital Media Systems Manager"
          Company="PIX11"
          desc={pixDesc}
          imgLink={pixlogo}
        ></Job>

        <Job
          jobState={2}
          startDate="2017"
          endDate="2018"
          Title="IT Systems Administrator / Team Lead"
          Company="Teksystems - AECOM"
          desc={tekDesc}
          imgLink={teklogo}
        ></Job>

        <Job
          jobState={1}
          startDate="2015"
          endDate="2017"
          Title="Senior First-Line Technician"
          Company="Diebold"
          desc={dbDesc}
          imgLink={dblogo}
        ></Job>

        <p className="text-white text-center">
          <a className="btn btn-outline-light m-2" href="#Header">
            Back to Top
          </a>
        </p>
      </div>
    </section>
  );
};

export default Section2;
