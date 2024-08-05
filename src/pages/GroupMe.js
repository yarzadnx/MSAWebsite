import React, { useState } from "react";
import img from "./GroupMe.JPG";
import Confetti from "react-confetti";

const JoinGroupMePage = () => {
  const [email, setEmail] = useState("");
  const [showLink, setShowLink] = useState(false);
  const [error, setError] = useState("");
  const [confettiVisible, setConfettiVisible] = useState(false); // State to manage confetti visibility

  const groupMeLink = "https://groupme.com/join_group/101004628/pf0u7kAZ"; // Replace with your actual GroupMe link

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.endsWith("@dukes.jmu.edu")) {
      try {
        setShowLink(true);
        setError("");
        setConfettiVisible(true); // Show confetti

        // Hide confetti after 5 seconds
        setTimeout(() => {
          setConfettiVisible(false);
        }, 5200);
      } catch (error) {
        console.error("Error submitting email:", error);
        setError("An error occurred. Please try again.");
      }
    } else {
      setError("Invalid Dukes email address");
      setShowLink(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Join Our 2024-2025 MSA GroupMe!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Enter your Dukes email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="yourname@dukes.jmu.edu"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Join GroupMe
          </button>
        </form>
        {error && <div className="mt-4 text-center text-red-500">{error}</div>}
        {showLink && (
          <div className="mt-6 text-center">
            {confettiVisible && (
              <Confetti width={window.innerWidth} height={window.innerHeight} />
            )}

            <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                GroupMe Guidelines
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Relevant Topics:</strong> Only discuss topics related
                  to MSA activities and events.
                </li>
                <li>
                  <strong>Respectful Communication:</strong> Avoid debates and
                  arguments. Keep conversations respectful and on-topic.
                </li>
                <li>
                  <strong>Islamic Questions:</strong> For Islamic-related
                  questions, please contact our chaplain directly rather than
                  using the chat.
                </li>
                <li>
                  <strong>Rule Enforcement:</strong> If you deliberately break
                  the rules, you will receive a warning for the first offense. A
                  second deliberate breach will result in removal from the
                  group.
                </li>
              </ul>
            </div>
            <p className="text-lg font-semibold text-gray-800 mt-4">
              Ready to join the GroupMe Group?
            </p>
            <a
              href={groupMeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-700 text-lg font-semibold"
            >
              Click here to join
            </a>
            <div className="mt-6">
              <img
                src={img}
                alt="GroupMe QR Code"
                className="mx-auto w-48 h-48 object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinGroupMePage;
