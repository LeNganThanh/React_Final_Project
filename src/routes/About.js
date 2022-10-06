import React from "react";
import Ballon from "../images/ballon.jpg";

export default function SchoolHoliday() {
  return (
    <div className="w-full h-full relative z-1 ">
      <div className="absolute w-full h-full top-0 left-0 flex justify-center bg-slate-300/100 text-gray-800">
        <div>
          <h1 className="py-6 tracking-widest text-center text-blue-700 underline underline-offset-4 my-20 font-semibold">
            ABOUT US
          </h1>
        </div>
        <div className="absolute top-40 flex md:block">
          <div className="flex flex-wrap justify-evenly gap-16 p-2">
            <div className=" p-6 bg-orange-400/60 rounded-[15px] ">
              <h3 className="font-semibold pb-4">
                Our first day 24 August 2022
              </h3>
              <img src={Ballon} alt="/" style={{ height: "28rem" }} />
            </div>
            <div className="w-max-[600px]  bg-blue-300/80 p-6 rounded-[10px]">
              <h3 className="font-bold pb-4">Our class</h3>
              <p>
                Klassensprecher: <span className="font-semibold">Philip</span>
              </p>
              <p>
                Vertretung: <span className="font-semibold">Caylan</span>
              </p>
              <br />
              <p>
                Klassensprecherin:{" "}
                <span className="font-semibold">Marieke</span>
              </p>
              <p>
                Vertretung: <span className="font-semibold">Alina</span>
              </p>
              <br />
              <p> KonferenzvertreterInnen:</p>{" "}
              <p className="font-semibold px-4"> Martha, Laya, Jana </p>
              <br />
              <p> Vertretungen:</p>{" "}
              <p className="font-semibold px-4">
                Jakob (Hestermann), Sinavera, Mia{" "}
              </p>
              <br />
              <p>Klassenleitung 5e </p>
              <p className="font-semibold px-4"> Judith Denda, StR'</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
