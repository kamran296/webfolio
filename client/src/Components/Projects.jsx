// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import project from "../Data/project";
// const Projects = () => {
//   const [option, setOption] = useState(1);
//   const handleClick = (val) => {
//     setOption(val);
//   };
//   useEffect(() => {
//     console.log(option);
//   }, [option]);

//   const getProjectsForTab = () => {
//     const startIndex = (option - 1) * 6;
//     return project.Project.slice(startIndex, startIndex + 6);
//   };

//   const renderRows = () => {
//     const projects = getProjectsForTab();
//     const rows = [];
//     for (let i = 0; i < projects.length; i += 3) {
//       rows.push(projects.slice(i, i + 3));
//     }
//     return rows;
//   };
//   return (
//     <>
//       <div className="h-[240vh] md:h-[125vh] bg-gray-200 ">
//         <div className="flex flex-col items-center  justify-center">
//           <p className="text-gray-700 text-lg flex md:mt-2">Browse my</p>
//           <p className="text-black font-semibold text-3xl mt-[2px] font-[poppins]">
//             Projects
//           </p>
//         </div>

//         {/* Creating tabs for multiple projects */}
//         <div className="flex item-center justify-center md:mt-6">
//           <div className="tabs h-12 w-72 bg-blue-300 rounded-2xl flex flex-row items-center justify-around">
//             <div
//               className={`cursor-pointer p-3 rounded-lg transition-all duration-500 transform ${
//                 option === 1
//                   ? "bg-black text-white  scale-110 shadow-lg"
//                   : "hover:bg-blue-400"
//               }`}
//               onClick={() => {
//                 handleClick(1);
//               }}
//             >
//               tab1
//             </div>
//             <div className="h-6 w-[2px] bg-black"></div>
//             <div
//               className={`cursor-pointer p-3 rounded-lg transition-all duration-500 transform ${
//                 option === 2
//                   ? "bg-black text-white  scale-110 shadow-lg"
//                   : "hover:bg-blue-400"
//               }`}
//               onClick={() => {
//                 handleClick(2);
//               }}
//             >
//               tab2
//             </div>
//             <div className="h-6 w-[2px] bg-black"></div>
//             <div
//               className={`cursor-pointer p-3 rounded-lg transition-all duration-500 transform ${
//                 option === 3
//                   ? "bg-black text-white  scale-110 shadow-lg"
//                   : "hover:bg-blue-400"
//               }`}
//               onClick={() => {
//                 handleClick(3);
//               }}
//             >
//               tab3
//             </div>
//           </div>
//         </div>

//         {/* project cards */}
//         <div className="flex flex-col items-center justify-center">
//           {/* <div className=" flex flex-col  items-start justify-around">
//             <Card />
//             <Card />
//             <Card />
//           </div> */}
//           {/* <div className="m-4 flex flex-row  items-start justify-around">
//             <Card />
//             <Card />
//             <Card />
//           </div> */}
//           {renderRows().map((row, rowIndex) => (
//             <div
//               key={`""${rowIndex}`}
//               className="flex flex-col items-start justify-around md:flex md:flex-row md:items-start md:justify-around mb-4"
//             >
//               {row.map((proj, index) => (
//                 <Card
//                   key={index}
//                   title={proj.title}
//                   live={proj.live}
//                   github={proj.github}
//                   image={proj.image}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Card from "./Card";
import project from "../Data/project";

const Projects = () => {
  const [option, setOption] = useState(1);
  const isMediumOrLarger = useMediaQuery({ query: "(min-width: 768px)" });

  const handleClick = (val) => {
    setOption(val);
  };

  useEffect(() => {
    console.log(option);
  }, [option]);

  const getProjectsForTab = () => {
    const itemsPerTab = isMediumOrLarger ? 6 : 4;
    const startIndex = (option - 1) * itemsPerTab;
    return project.Project.slice(startIndex, startIndex + itemsPerTab);
  };

  const renderRows = () => {
    const projects = getProjectsForTab();
    const itemsPerRow = isMediumOrLarger ? 3 : 2;
    const rows = [];
    for (let i = 0; i < projects.length; i += itemsPerRow) {
      rows.push(projects.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  return (
    <>
      <div className="h-[240vh] md:h-[125vh] bg-gray-200">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-700 text-lg flex mt-3">Browse my</p>
          <p className="text-black font-semibold text-3xl mt-[2px] font-[poppins]">
            Projects
          </p>
        </div>

        {/* Creating tabs for multiple projects */}
        <div className="mt-4 flex items-center justify-center md:mt-6">
          <div className="tabs h-12 w-80 bg-blue-300 rounded-2xl flex flex-row items-center justify-around">
            <div
              className={`cursor-pointer p-3 rounded-lg transition-all duration-500 transform ${
                option === 1
                  ? "bg-black text-white scale-110 shadow-lg"
                  : "hover:bg-blue-400"
              }`}
              onClick={() => handleClick(1)}
            >
              Projects
            </div>
            <div className="h-6 w-[2px] bg-black"></div>
            <div
              className={`cursor-pointer p-3 rounded-lg transition-all duration-500 transform ${
                option === 2
                  ? "bg-black text-white scale-110 shadow-lg"
                  : "hover:bg-blue-400"
              }`}
              onClick={() => handleClick(2)}
            >
              Experience
            </div>
            <div className="h-6 w-[2px] bg-black"></div>
            <div
              className={`cursor-pointer p-3 rounded-lg transition-all duration-500 transform ${
                option === 3
                  ? "bg-black text-white scale-110 shadow-lg"
                  : "hover:bg-blue-400"
              }`}
              onClick={() => handleClick(3)}
            >
              Certificates
            </div>
          </div>
        </div>

        {/* project cards */}
        <div className="flex flex-col items-center justify-center">
          {renderRows().map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="flex flex-col items-center justify-around md:flex md:flex-row md:items-start md:justify-around mb-4"
            >
              {row.map((proj, index) => (
                <Card
                  key={index}
                  title={proj.title}
                  live={proj.live}
                  github={proj.github}
                  image={proj.image}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
