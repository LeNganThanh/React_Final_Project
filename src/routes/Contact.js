import React from "react";
import FrauMueller from "../images/mueller_sek.jpg";
import FrauAhrens from "../images/ahrens_sek.jpg";

export default function SchoolHoliday() {
  return (
    <div className="w-full h-full relative z-1 ">
      <div className="absolute w-full h-full top-0 left-0 flex justify-center bg-slate-300/100 text-gray-800">
        <div>
          <h1 className="py-6 tracking-widest text-center text-blue-700 underline underline-offset-4 my-24 font-semibold ">
            CONTACT US
          </h1>
        </div>
        <div className="absolute top-40 flex md:block mt-8">
          <div className="flex flex-wrap justify-evenly gap-16 p-2">
            <div className=" p-8 bg-yellow-300/80 rounded-[15px] ">
              <h3 className="pb-4 font-semibold">Mrs. Müller - Secretariat</h3>
              <img src={FrauMueller} alt="/" />
            </div>
            <div className=" bg-purple-300/80 p-8 rounded-[15px]">
              <h3 className="pb-4 font-semibold"> Mrs. Ahrens - Secretariat</h3>
              <img src={FrauAhrens} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
