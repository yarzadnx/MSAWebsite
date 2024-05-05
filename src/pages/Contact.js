import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import Notiflix from "notiflix";

const Contact = () => {
  useDocTitle("JMU MSA");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const clearInput = () => {
    setName("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Disabling the submit button and showing loading state
    e.target.elements.submitBtn.disabled = true;
    e.target.elements.submitBtn.innerHTML = "Loading...";

    // Simulate sending email (replace with actual code to send email)
    setTimeout(() => {
      e.target.elements.submitBtn.disabled = false;
      e.target.elements.submitBtn.innerHTML = "Send";
      clearInput();
      Notiflix.Notify.success("Email sent successfully!");
    }, 2000);
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
          <form name="contact" method="POST" netlify>
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{" "}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
