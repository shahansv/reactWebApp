import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";

const Home = () => {
  useGSAP(() => {
    gsap.to("#logo", {
      rotation: 360,
      duration: 12,
      ease: "linear",
      repeat: -1,
    });
  });
  return (
    <>
      <div className="bg-dark vh-100 text-light pt-5 d-flex align-items-center justify-content-center flex-column">
        <img
          src={reactLogo}
          alt="React Logo"
          height={"100px"}
          className="m-3"
          id="logo"
        />
        <h1 className="fw-semibold">React</h1>
        <h4 className="m-2 text-center">
          The library for web and native user interfaces
        </h4>
        <button
          className="m-4 p-3 rounded-5 px-4 border-0 fw-bold"
          style={{ backgroundColor: "#00D8FF" }}
          id="learn-react-btn"
        >
          <Link
            className="mx-2 my-auto text-dark link-underline link-underline-opacity-0"
            to={"/docs"}
          >
            Get started
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
