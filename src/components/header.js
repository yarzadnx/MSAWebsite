import React from "react";
import NavBar from "./Navbar/NavBar";
import heroImg from "../images/jmuMSANEW.svg";

const Hero = () => {
  const redirectToGoogleDocs = () => {
    document.getElementById("googleDocsForm").submit();
  };

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
                <button
                  onClick={redirectToGoogleDocs}
                  className="text-white bg-purple-900 hover:bg-purple-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  Find Our Next Event
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <form
                  id="googleDocsForm"
                  action="https://docs.google.com/document/d/1yeGeq6gp9mf-OJ2ndcaOmYv15ai2iEY_6-ooLat5rRU/edit?usp=sharing"
                  method="get"
                  target="_blank"
                  style={{ display: "none" }}
                >
                  {/* Optional hidden input fields if needed */}
                </form>
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
