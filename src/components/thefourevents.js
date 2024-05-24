import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl text-purple-900 uppercase font-bold">
          Activities
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
        </div>

        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Weekly Meetings
                </h4>
                <p className="text-md font-medium leading-5 h-auto md:h-48 text-center">
                  Join us every Tuesday at 7 PM for our engaging JEM (JMU
                  Engaging Muslims) meetings, where we bring together a vibrant
                  community for an enriching experience. Our gatherings feature
                  captivating speakers, enlightening country showcases, and
                  interactive Islamic trivia sessions. Each week, we delve into
                  topics that celebrate our faith and shared experiences.
                </p>
                <div className="flex justify-center my-4">
                  <Link
                    to="https://www.instagram.com/p/C0lAaPvryuD/?img_index=1"
                    className="text-white bg-purple-900 hover:bg-purple-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    View Past Meetings{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Social Gatherings{" "}
                </h4>

                <p className="text-md font-medium leading-5 h-auto md:h-48 text-center">
                  We regularly host social events where both brothers and
                  sisters participate in activities like hiking, apple picking,
                  DC trips, and more. Additionally, we organize separate
                  gatherings for brothers and sisters. Join us for a fun time!
                </p>
                <div className="flex justify-center my-4">
                  <Link
                    to="https://www.instagram.com/p/Cxnns4TLSv9/?img_index=1"
                    className="text-white bg-purple-900 hover:bg-purple-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    View Past Socials
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Banquets
                </h4>
                <p className="text-md font-medium leading-5 h-auto md:h-48 text-center">
                  We regularly host vibrant banquets where we come together to
                  support those in need and make a positive impact in our
                  community. Join us for our special events and be part of our
                  charitable efforts!
                </p>
                <div className="flex justify-center my-4">
                  <Link
                    to="https://www.instagram.com/p/C5Ch1v4rjle/?img_index=1"
                    className="text-white bg-purple-900 hover:bg-purple-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    View Past Banquets
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Donations
                </h4>
                <p className="text-md font-medium leading-5 h-auto md:h-48 space-y-36 text-center">
                  Support our mission to promote the goals of the MSA by
                  contributing to our fundraising campaign. Your generous
                  donations enable us to organize events and initiatives that
                  foster community engagement. No matter the size, every
                  donation makes a significant impact in advancing our shared
                  objectives.
                </p>
                <div className="flex justify-center my-4">
                  <a
                    href="https://cash.app/$msajmu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-green-500 hover:bg-green-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    <span className="mr-2">Cash App:</span>
                    <span className="font-bold">$msajmu</span>
                  </a>
                </div>
                <div className="flex justify-center my-4">
                  <a
                    href="https://venmo.com/Jmu_msa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-500 hover:bg-blue-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    <span className="mr-2">Venmo:</span>
                    <span className="font-bold">Jmu_msa</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
