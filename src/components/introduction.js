import React from "react";
import img from "../images/msaFestivalPhoto.svg";

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-3/4 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right" src={img} />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl  text-purple-900 font-bold ">
              Welcome to the James Madison University Muslim Student Association
              (JMU MSA)!
            </h3>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                We are a welcoming community dedicated to fostering unity and
                understanding among Muslim students at JMU.
              </p>
            </div>

            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                Our mission is to provide a supportive platform for students to
                connect, learn, and engage with their faith and culture.
                Throughout the year, we organize weekly halaqas, social
                gatherings, community service projects, and interfaith
                initiatives. Whether you're a Muslim student seeking a
                supportive community or interested in learning more about Islam,
                we invite you to join us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
