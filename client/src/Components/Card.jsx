// import React from "react";
// import coder from "../assets/coder.png";
// import { FiExternalLink } from "react-icons/fi";
// const Card = () => {
//   return (
//     <div className="h-[270px] w-72 bg-white rounded-xl flex flex-col items-center justify-around">
//       {/* image container */}
//       <div className="  h-40 w-56 rounded-xl ">
//         <img
//           src={coder}
//           alt="coder"
//           className="h-40 w-56 rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
//         />
//       </div>
//       <p className="-mt-2">To do App</p>

//       <div className="  flex flex-row items-start justify-center md:-ml-24">
//         <button className="ml-4 w-24 flex items-center justify-center rounded-2xl border-2 border-black hover:bg-blue-300  bg-white p-2">
//           <FiExternalLink />
//           Live
//         </button>
//         <button className="ml-2 w-24 flex items-center justify-center rounded-2xl border-2 border-black hover:bg-blue-300  bg-white p-2">
//           <FiExternalLink />
//           GitHub
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import coder from "../assets/coder.png";
import { FiExternalLink } from "react-icons/fi";

const Card = () => {
  return (
    <div className="m-4 h-[340px] w-72 bg-white rounded-2xl flex flex-col items-center justify-around group border-2  shadow-lg transition-shadow duration-500 ease-in-out hover:shadow-blue-500">
      {/* image container */}
      <div className="h-40 w-56 rounded-xl overflow-hidden">
        <img
          src={coder}
          alt="coder"
          className="h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        />
      </div>
      <p className="-mt-2">To do App</p>

      <div className="flex flex-row items-center justify-center md:flex md:flex-row md:items-start md:justify-center md:-ml-24">
        <button className="md:ml-6 w-24 flex items-center justify-center rounded-2xl border-2 border-black hover:bg-blue-300 bg-white p-2">
          <FiExternalLink />
          Live
        </button>
        <button className="ml-2 w-24 flex items-center justify-center rounded-2xl border-2 border-black hover:bg-blue-300 bg-white p-2">
          <FiExternalLink />
          GitHub
        </button>
      </div>
    </div>
  );
};

export default Card;
