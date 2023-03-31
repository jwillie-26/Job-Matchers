import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const Navbar = ({ setUser, user }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        window.location = "/log-in";
      }
    });
  }

  return (
    <div>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/jobs-page">Jobs</NavLink>
          {/* <NavLink to="/contact">Contact Us</NavLink> */}

          {user ? (
            <div>
              <NavLink to="/post-job">Post Job</NavLink>
            </div>
          ) : (
            <hr></hr>
          )}
        </NavMenu>

        <NavBtn>
          {user ? (
            <div>
              <NavBtnLink
                to="/logout"
                className="btn btn-primary btn-sm active"
                onClick={() => handleLogoutClick()}
              >
                Logout
              </NavBtnLink>
            </div>
          ) : (
            <div>
              <NavBtnLink to="/log-in" className="btn btn-primary btn-sm active">
                Login
              </NavBtnLink>
              <NavBtnLink
                to="/sign-up"
                className="btn btn-primary btn-sm active"
              >
                Sign Up
              </NavBtnLink>
            </div>
          )}
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;
