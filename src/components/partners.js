import React from "react";
import IASV from "../images/clients/IASV2.png";
import alAkram from "../images/clients/alAkram.png";
import CharityWeek from "../images/clients/charityweek.png";

const clientImage = {
  height: "10rem",
  width: "auto",
  mixBlendMode: "colorBurn",
};

const Clients = () => {
  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Community Partners
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Supporting Local Mosques and Communities
          </h2>
        </div>

        <div className="p-16" data-aos="fade-in" data-aos-delay="600">
          <div className="grid sm:grid-cols-3 lg:grid-cols-3">
            <a href="https://iasv.info/" alt="IASV Website">
              <div
                style={clientImage}
                className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6"
              >
                <img src={IASV} alt="client" />
              </div>
            </a>
            <a href="https://charityweek.com/" alt="Charity Week Website">
              <div
                style={clientImage}
                className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
              >
                <img src={CharityWeek} alt="client" />
              </div>
            </a>
            <a href="https://valleymuslimfoundation.org/masjid/" alt="AlAkram">
              <div
                style={clientImage}
                className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
              >
                <img src={alAkram} alt="client" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
