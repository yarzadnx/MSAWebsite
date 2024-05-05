import React from "react";
import newImage from "../images/praying_hands.png";
import newImage2 from "../images/quran.png";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-purple-900 mb-4">
                <img
                  src={newImage}
                  alt="Description of the image"
                  width="72"
                  height="72"
                  className="fill-current"
                />
              </div>
              <h3
                className="text-3xl  text-purple-900 
                            font-bold"
              >
                <span className="font-black">Dua of the Month</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-purple-900 font-semibold">
                  اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ
                  عِبَادَتِكَ
                </p>
                <p className="my-3 text-grey-900 font-semibold">
                  O Allah, help me remember You, to be grateful to You, and to
                  worship You in an excellent manner”
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-purple-900 mb-4">
                <img
                  src={newImage2}
                  alt="Description of the image"
                  width="72"
                  height="72"
                  className="fill-current"
                />
              </div>
              <h3
                className="text-3xl  text-purple-900 
                            font-bold"
              >
                <span className="font-black">Quran Verse of The Month</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-purple-900 font-semibold">
                  إِن يَنصُرْكُمُ ٱللَّهُ فَلَا غَالِبَ لَكُمْ ۖ وَإِن
                  يَخْذُلْكُمْ فَمَن ذَا ٱلَّذِى يَنصُرُكُم مِّنۢ بَعْدِهِۦ ۗ
                  وَعَلَى ٱللَّهِ فَلْيَتَوَكَّلِ ٱلْمُؤْمِنُونَ
                </p>
                <p className="my-3 text-grey-900 font-semibold">
                  If Allah helps you, none can overcome you: If He forsakes you,
                  who is there, after that, that can help you? in Allah, then,
                  Let believers put their trust. [3:160]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
