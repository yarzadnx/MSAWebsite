import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const DemoProduct = () => {
  return (
    <>
      <NavBar />
      <div
        id="demo"
        className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24"
      >
        <div
          className="container mx-auto my-8 px-4 lg:px-20"
          data-aos="zoom-in"
        >
          <form name="contact" netlify>
            <p>
              <label>
                Name <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Email <input type="email" name="email" />
              </label>
            </p>
            <p>
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DemoProduct;
