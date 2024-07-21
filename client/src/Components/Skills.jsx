import React, { useState, useEffect } from "react";
import data from "../Data/data.js";
const Skills = () => {
  const [option, setOption] = useState("Frontend");

  const handleClick = (opt) => {
    setOption(opt);
    // console.log(option, "option");
  };
  useEffect(() => {
    console.log(option, "option");
  }, [option]);
  return (
    <>
      <div className="h-screen bg-gray-200">
        <div className="heading flex flex-col items-center justify-center">
          <p className="text-gray-700 text-lg flex md:mt-2">Explore my</p>
          <p className="text-black font-semibold text-3xl mt-[2px] font-[poppins]">
            Skills
          </p>
        </div>
        <div className="container flex  flex-col-reverse items-center justify-center md:flex md:flex-row md:items-center md:justify-evenly ">
          <div className="left mt-3 rounded-3xl bg-white border-2 h-72 w-72 shadow-lg shadow-blue-400 md:ml-32 md:mt-12 md:h-80 md:w-[390px] md:flex md: flex-col md:items-start md:justify-between">
            <div className="row1 flex flex-row items-center justify-between">
              <div
                className="1 h-32 w-32 rounded-2xl border border-gray-300 flex items-center justify-center md:ml-4 md:mt-4 md:mr-12 hover:bg-blue-600 hover:text-white"
                onClick={() => handleClick("Frontend")}
              >
                Frontend
              </div>
              <div
                className="2 h-32 w-32 rounded-2xl border border-gray-300 flex items-center justify-center md:ml-12 md:mt-4 hover:bg-blue-600 hover:text-white"
                onClick={() => handleClick("Backend")}
              >
                Backend
              </div>
            </div>
            <div className="row2 flex flex-row items-center justify-between mb-4 ">
              <div
                className="3 rounded-2xl h-32 w-32 border border-gray-300 flex items-center justify-center md:ml-4 md:mt-4 md:mr-12 hover:bg-blue-600 hover:text-white"
                onClick={() => handleClick("Tools")}
              >
                Tools
              </div>
              <div
                className="4 rounded-2xl h-32 w-32 border border-gray-300 flex items-center justify-center md:ml-12 md:mt-4 hover:bg-blue-600 hover:text-white"
                onClick={() => handleClick("Ai/Ml")}
              >
                AI/ML
              </div>
            </div>
          </div>
          <div className="right rounded-xl bg-white md:h-96 w-72 border-2  shadow-lg  md:mt-12 md:mr-32 md:w-96">
            <div className="flex items-center justify-center mt-1  ">
              {option}
            </div>
            <div className="mt-1 h-[2px] md:w-96 bg-gray-400"></div>
            <div className="list w-[370px] h-[340px] overflow-y-auto p-4">
              {data[option]?.map((item, index) => (
                <div key={index} className="m-1 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-6 w-6 inline-block mr-2"
                  />
                  <div>
                    <div className="ml-2 text-lg">{item.name}</div>
                    <div className="ml-4 text-gray-600">{item.experience}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
