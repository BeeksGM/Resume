import React from "react";

const Job = ({ jobState, startDate, endDate, Title, Company, desc, imgLink }) => {
  let itemState;
  if (jobState % 2 === 0) {
    itemState = false;
  }
  if (jobState % 2 < 0) {
    itemState = true;
  }

  return (
    <>
      {itemState === false ? (
        <div className="row">
          <div className="col-lg-8 bg-white rounded">
            <div className="p-3">
              <h4 className="">
                {Title}, {startDate} - {endDate}
              </h4>
              <h5 className="">
                <i>{Company}</i>
              </h5>
            </div>
            <ul className="">
              {desc.map((d) => (
                <li>{d}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4">
            <img src={imgLink} width="100%" alt="PlaceHolder" />
          </div>
        </div>
      ) : (
        <div className="row p-5">
          <div className="col-lg-4">
            <img src={imgLink} width="100%" alt="PlaceHolder"  />
          </div>
          <div className="col-lg-8 bg-white rounded">
            <div className="p-3">
              <h4 className="">
                {Title}, {startDate} - {endDate}
              </h4>
              <h5 className="">
                <i>{Company}</i>
              </h5>
            </div>
            <ul className="">
              {desc.map((d) => (
                <li>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Job;
