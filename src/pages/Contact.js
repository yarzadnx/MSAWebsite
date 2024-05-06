import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";

const Contact = () => {
  useDocTitle("JMU MSA");

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
          <form name="contact" netlify>
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
