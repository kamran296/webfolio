import React from "react";
import coder from "../assets/coder.png";
const Contact = () => {
  return (
    <>
      <div className="h-[110vh] md:h-screen bg-gray-300">
        <div className="heading flex flex-col items-center justify-center">
          <p className="text-gray-700 text-lg flex md:mt-2">Get in touch</p>
          <p className="text-black font-semibold text-3xl mt-[2px] font-[poppins]">
            Contact Me
          </p>
        </div>

        <div className="container mt-4 flex flex-col items-center justify-center md:flex md:flex-row md:items-center md:justify-around md:mt-20">
          <div className="left ">
            <img src={coder} alt="" className="h-72 w-72 md:h-96 md:w-96" />
          </div>
          <div className="right mt-4 md:mt-0">
            <form action="">
              <div className="flex flex-row items-center justify-center ">
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-xl  border-2 border-gray-700 h-16 w-32 md:w-52 text-center  "
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="rounded-xl ml-4 border-2 border-gray-700 md:ml-9 h-16 md:w-52 w-32 text-center "
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <input
                  type="email"
                  placeholder="email"
                  className="mt-4 rounded-xl  border-2 border-gray-700 h-16 md:w-52 w-32 text-center"
                />
                <input
                  type="number"
                  placeholder="phone number"
                  className="mt-4 rounded-xl ml-4 border-2 border-gray-700 md:ml-9 h-16 md:w-52 w-32 text-center"
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <textarea
                  name="message"
                  id=""
                  placeholder="Write Message"
                  className="mt-4 rounded-xl w-64 h-32 border-2 border-gray-700  md:h-40 md:w-full text-justify"
                ></textarea>
              </div>
              <div className="flex flex-row items-center justify-center">
                <button className="mt-4 rounded-xl  border-2 border-gray-700  h-12 w-20 text-center">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
