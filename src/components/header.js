import React from "react";
import NavBar from "./Navbar/NavBar";
import heroImg from "../images/jmuMSANEW.svg";
import { HashLink } from "react-router-hash-link";
const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div>
          <NavBar />
        </div>

        <div
          className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
          data-aos="zoom-in"
        >
          <div
            id="hero"
            className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left"
          >
            <div
              className="lg:w-1/2 flex flex-col justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-purple-900">
                JMU - Muslim Student Association
              </h1>
              <div className="text-xl font-semibold tracking-tight mb-5 text-purple-500">
                Click below to view our events our Calendar!
              </div>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <HashLink
                  to="/calendar"
                  className="text-white bg-purple-900 hover:bg-purple-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  Find Our Next Event
                </HashLink>
              </div>
            </div>
            <div
              className="flex lg:justify-end w-full lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img
                alt="card img"
                className="lg:w-3/4 rounded-t float-right duration-1000 w-full"
                src={heroImg}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
