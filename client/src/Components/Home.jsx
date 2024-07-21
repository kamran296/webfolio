import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import boy4 from "./../assets/boy4.png";
import { BsDownload } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const portfolioRef = useRef(null);
  const imageRef = useRef(null);
  const circleRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    if (
      !introRef.current ||
      !portfolioRef.current ||
      !imageRef.current ||
      !circleRef.current
    ) {
      return;
    }

    // Initial animations during page load
    gsap.fromTo(
      introRef.current.querySelectorAll("h1"),
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      portfolioRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power1.in",
      }
    );

    gsap.fromTo(
      imageRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      circleRef.current,
      { scale: 0 },
      { scale: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" }
    );

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: portfolioRef.current,
      start: "top center",
      end: "bottom top",
      onEnter: () =>
        gsap.to(portfolioRef.current, {
          y: "-20px",
          opacity: 0.2,
          scale: 0.8,
          duration: 1,
          ease: "power2.inOut",
        }),
      onLeaveBack: () =>
        gsap.to(portfolioRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.inOut",
        }),

      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top center",
      end: "bottom top",
      onEnter: () =>
        gsap.to(imageRef.current, {
          y: -50,
          opacity: 0.5,
          duration: 1,
          ease: "back.out",
        }),
      onLeaveBack: () =>
        gsap.to(imageRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        }),
    });

    ScrollTrigger.create({
      trigger: circleRef.current,
      start: "top center",
      end: "bottom top",
      onEnter: () =>
        gsap.to(circleRef.current, {
          scale: 0.75,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        }),
      onLeaveBack: () =>
        gsap.to(circleRef.current, {
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        }),

      toggleActions: "play none none reverse",
    });
  }, []);

  return (
    <div className="h-screen bg-gray-200 items-center justify-between pt-12">
      {/* INTRODUCTION */}
      <div
        ref={introRef}
        className="flex flex-col items-center text-2xl pt-2 justify-center "
      >
        <h1>
          I'm <span className="text-blue-800 font-bold">Kamran,</span>
        </h1>
        <h1 className="text-black">Full Stack Developer</h1>
      </div>

      {/* TEXT INFORMATION */}
      <div className="flex items-center justify-between">
        {/* TEXT LEFT */}
        <div className="ml-4  mt-8 md:mt-32 md:ml-8 ">
          <p className="md:text-2xl">
            <RiDoubleQuotesL className="text-blue-800 text-2xl flex" />
            Nice to meet you, I'm Kamran
          </p>
          <p className="md:text-2xl">{"  "} I'm full stack developer</p>
          <p className="md:text-2xl">working for the </p>
          <p className="font-bold font-poppins flex items-center justify-between md:text-2xl">
            betterment of world.
            <RiDoubleQuotesR className="text-blue-800 text-2xl flex" />
          </p>
        </div>
        {/* TEXT RIGHT */}
        <div className="flex items-center">
          <div className="flex flex-col mt-12 mr-4 space-y-2 md:flex-row md:space-y-0 md:space-x-4 md:mr-24 md:mt-48 text-2xl items-center">
            <a
              href="https://github.com/kamran296"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="md:text-3xl text-2xl cursor-pointer" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="md:text-3xl text-2xl cursor-pointer" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="md:text-3xl text-2xl cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* Semicircle  */}
      <div className="absolute -bottom-0 left-0 right-0 text-center">
        <div className="relative flex items-center justify-center px-2">
          <div
            ref={portfolioRef}
            className="text-6xl md:text-9xl -mt-20 absolute -z-1 opacity-50"
          >
            PORTFOLIO
          </div>
          <div className="flex items-center absolute -z-1">
            <img
              ref={imageRef}
              src={boy4}
              alt=""
              className="flex items-center h-400px md:h-500px mb-52 z-10"
            />
          </div>
          <div
            ref={circleRef}
            className=" relative rounded-full  bg-blue-700  md:h-500px mix-blend-multiply md:w-500px flex items-center h-96 w-96 overflow-hidden z-0"
          >
            <div className="bg-white bottom-0 absolute  w-full h-12"></div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-12 flex items-center justify-center">
            <div className="mb-24  rounded-lg bg-slate-400 flex items-center justify-evenly w-60 h-12 border-black ">
              <button className="flex items-center hover:text-white">
                Resume
                <span className="ml-2">
                  <BsDownload />
                </span>
              </button>
              <span>
                <button className="flex items-center">
                  Connect
                  <span className="ml-2">
                    <FaLongArrowAltRight />
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
