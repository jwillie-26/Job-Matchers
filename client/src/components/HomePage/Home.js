import React, {  } from "react";
import image from "./home-image1.svg";
import { Link } from "react-router-dom";
export default function Home({user}) {

  const txt = {
    color: "#0D7CAC",
    fontWeight: "bold",
  };
  const colorTxt = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <div className="container-fluid my-1  p-5 ">
        <div className="row">
          <div className="col-12 col-lg-6 pt-3">
            <div className="mb-3">
              <h3 style={txt} className="">
                WELCOME {user ? user.username : ""} TO MY JOB Matchers
                
              </h3>
            </div>
            <div className="font-weight-normal ">
              <h1 className="display-6 pt-3" style={{ fontWeight: "bolder" }}>
                Lets Connect You To Your <span style={txt}>Dream Job</span>.
                Don't be afraid to join <span style={txt}>Today</span>
              </h1>
            </div>
            <div className="">
              <p className="py-3">
                MY JOB IS A LEADING JOB SITE. ARE YOU LOOKING FOR YOUR NEXT JOB?
                REGISTER TODAY FOR FREE JOB ALERTS. LOOKING TO HIRE THE BEST?
                ITS FREE. POST YOUR VACANCY & REACH OVER 500,000 PROFESSIONALS.
              </p>
            </div>
            <div className="my-4">
              <button
                type="button"
                className="btn btn-lg"
                style={{
                  border: "none",
                  color: "white",
                  backgroundColor: "#0D7CAC",
                  fontSize: "15px",
                  fontWeight: "900",
                }}
              >
                <Link to="/jobs-page" style={colorTxt}>
                  Explore Jobs
                </Link>
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-3 pt-xs-4">
            <img src={image} className="img-fluid" alt="meet -up" />
          </div>
        </div>
      </div>
    </div>
  );
}
