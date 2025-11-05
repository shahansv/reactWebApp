import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="position-fixed w-100">
        <Container>
          <Navbar.Brand className="fs-3">
            <Link
              className="text-light my-auto link-underline link-underline-opacity-0 fw-semibold"
              to={"/"}
            >
              <img
                alt=""
                src={reactLogo}
                width="40"
                height="40"
                className="d-inline-block align-top mx-2 my-auto"
              />
              React
            </Link>
          </Navbar.Brand>
          <Nav>
            <Link
              className="mx-1 my-auto link-underline link-underline-opacity-0 fw-semibold p-2 px-3 rounded-5 nav-btn"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="mx-1 my-auto link-underline link-underline-opacity-0  fw-semibold p-2 px-3 rounded-5 nav-btn"
              to={"/learn"}
            >
              Learn
            </Link>
            <Link
              className="mx-1 my-auto link-underline link-underline-opacity-0  fw-semibold p-2 px-3 rounded-5 nav-btn"
              to={"/community"}
            >
              Community
            </Link>
            <Link
              className="mx-1 my-auto link-underline link-underline-opacity-0  fw-semibold p-2 px-3 rounded-5 nav-btn"
              to={"/blog"}
            >
              Blog
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
