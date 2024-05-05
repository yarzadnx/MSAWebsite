import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import Notiflix from "notiflix";
import axios from "axios";

const Contact = () => {
  useDocTitle("JMU MSA");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const clearInput = () => {
    setName("");
    setEmail("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // Disabling the submit button and showing loading state
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Loading...";

    const formData = {
      name: name,
      email: email,
    };

    axios
      .post(process.env.REACT_APP_CONTACT_API, formData)
      .then(function (response) {
        // Re-enable the submit button and clear input fields
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "Subscribe!";
        clearInput();
        // Handle success
        Notiflix.Report.success("Success", response.data.message, "Okay");
      })
      .catch(function (error) {
        // Re-enable the submit button and show error message
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "Subscribe!";
        const { response } = error;
        if (response && response.status === 500) {
          Notiflix.Report.failure(
            "An error occurred",
            response.data.message,
            "Okay"
          );
        }
      });
  };

  return (
    <>
      <NavBar />
      <div
        id="contact"
        className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 "
      >
        <div
          className="container mx-auto my-8 px-4 lg:px-20"
          data-aos="zoom-in"
        >
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={sendEmail}
          >
            <div className="form-example">
              <label htmlFor="name">Enter your name: </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-example">
              <label htmlFor="email">Enter your email: </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-example">
              <input type="submit" id="submitBtn" value="Subscribe!" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
