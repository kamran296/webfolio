import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile1 from "../assets/profile1.png";
import { useRef, useEffect } from "react";
import { BsDownload } from "react-icons/bs";
import Animation from "../assets/Animation.gif";
import profile from "../assets/profile1.png";
import game from "../assets/game.png";
import { FaAward } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import "./about.css";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    // gsap.from(titleRef.current, {
    //   opacity: 0,
    //   y: 100,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: titleRef.current,
    //     start: "top 80%",
    //     end: "bottom 20%",
    //     toggleActions: "play none none reverse",
    //     markers: true,
    //   },
    // });
  }, []);

  return (
    <>
      <div className="h-screen text-black bg-gray-200">
        <div className="flex flex-col items-center  justify-center">
          <p className="text-gray-700 text-lg flex md:mt-2">Get to know more</p>
          <p className="text-black font-semibold text-3xl mt-[2px] font-[poppins]">
            About Me
          </p>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center md:flex-row  md:items-center md:justify-evenly">
            <div className="left md:ml-24 md:mt-12 ">
              <img
                src={profile}
                alt=""
                className="h-60 w-48 mt-2   rounded-3xl  flex-col items-center justify-center md:h-96 md:w-80 md:flex-row  md:items-center md:justify-between"
              />
            </div>
            <div className="right flex-col items-center justify-start md:-ml-20 ">
              <div className=" top  flex flex-col items-center justify-center md:flex md:flex-row md:items-center md:justify-center md:mt-16 md:pt-12 ">
                <div className="left  mt-4 border-2 border-gray-700 h-32 w-72  md:mr-12 md:h-48 md:w-96 rounded-3xl">
                  <div className="flex flex-col items-center justify-center">
                    <FaAward className="text-black mt-2 text-2xl" />
                    <p className="text-2xl text-black font-semibold">
                      Experience
                    </p>
                    <p className="text-gray-700 md:mt-4">1+ years</p>
                    <p className="text-gray-700">Software Developer</p>
                  </div>
                </div>
                <div className="right mt-4 border-2 border-gray-700 h-32 w-72 md:mr-12 md:h-48 md:w-96 rounded-3xl">
                  <div className="flex flex-col items-center justify-center">
                    <FaGraduationCap className="text-black text-2xl mt-2" />
                    <p className="text-2xl text-black font-semibold">
                      Education
                    </p>
                    <p className="text-gray-700 md:mt-4">B.Tech</p>
                    <p className="text-gray-700">
                      Electronics and Telecommunication
                    </p>
                  </div>
                </div>
              </div>
              <div className="bottom text-gray-600 mt-1 ml-3 mr-3 md:mt-12  h-48 md:w-[600px] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                expedita illum non sequi nobis porro quam blanditiis dolor.
                Reprehenderit accusamus nam laboriosam ?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
