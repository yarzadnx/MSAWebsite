import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import Notiflix from "notiflix";

const DemoProduct = () => {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const clearErrors = () => {
    setErrors([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        Notiflix.Report.success("Success", "Form submitted successfully", "OK");
        form.reset();
      })
      .catch((error) => {
        Notiflix.Report.failure("Error", "Failed to submit form", "OK");
        console.error("Error submitting form:", error);
      });
  };

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
          <form onSubmit={handleSubmit} netlify>
            <input type="hidden" name="form-name" value="demo-product" />
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                Demo our products
              </h1>
              {/* Checkbox inputs */}
              {/* Your existing checkbox inputs */}
              {/* Input fields */}
              {/* Your existing input fields */}
              {/* Textarea */}
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              {/* Submit button */}
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
          {/* Additional content */}
          <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
            {/* Your additional content */}
            {/* ... */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DemoProduct;
