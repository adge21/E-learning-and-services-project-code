import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { GlobalContext } from "./context/GlobalState";
import { toast } from "react-hot-toast";

function Navigation() {
  const navigate = useNavigate();
  const { loggedin, changeit, firstname } = useContext(GlobalContext);
  return (
    <>
      {/* <Navbar bg="light" variant="light" style={{boxShadow: "20px 2px 28px 2px #888888"}}> */}
      <Navbar
        bg="light"
        variant="light"
        style={{
          boxShadow: "0px -5px 15px #999",
        }}
      >
        <Container>
          <Nav className="me-auto mx-4">
            <Navbar.Brand
              href="/"
              style={{ fontSize: "1.9rem", fontFamily: "DM Sans" }}
            >
              eShiksha
            </Navbar.Brand>
            <ul className="list-unstyled d-flex mt-4 ">
              <li className="mx-5">
                <NavLink
                  className="text-decoration-none  text-black"
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-decoration-none text-black"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className=" mx-5">
                <NavLink
                  className="text-decoration-none text-black"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none text-black"
                  to="/courses"
                >
                  Courses
                </NavLink>
              </li>
            </ul>
          </Nav>
          {!loggedin ? (
            <div>
              <button
                className="button is-info is-outlined mt-2 mr-2"
                onClick={() => navigate("/signin")}
              >
                Sign up
              </button>
              <button
                className="button is-link mt-2"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <h2
                className="is-size-5 is-capitalized"
                style={{ marginRight: "1rem" }}
              >
                {firstname && `hello, ${firstname}`}
              </h2>
              <button
                className="button is-link"
                onClick={() => {
                  changeit(false);
                }}
              >
                Logout
              </button>
            </div>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
