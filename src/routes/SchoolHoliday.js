import React from "react";

export default function SchoolHoliday() {
  return (
    <div className="w-full h-full relative z-1 ">
      <div className="absolute w-full h-full top-0 left-0 flex justify-center bg-slate-300/100 text-gray-800">
        <div>
          <h1 className="py-8 tracking-widest text-center text-blue-600 underline underline-offset-4 my-20 font-semibold">
            SCHOOL HOLIDAY
          </h1>
        </div>
        <div className="absolute top-40 flex md:block mt-4">
          <div className="flex flex-wrap justify-evenly gap-16 p-8">
            <div className="w-max-[600px] p-6 bg-green-300/80 ">
              <h3>Niedersachsen-School Holiday 2022:</h3>
              <ul>
                <li>Winterferien/Zeugnisferien: 31.01.2022 – 01.02.2022 </li>
                <li>Osterferien: 04.04.2022 – 19.04.2022</li>
                <li>Zusäzlicher Ferientag: 27.05.2022</li>
                <li>Pfingstferien: 07.06.2022</li>
                <li>Sommerferien: 14.07.2022 – 24.08.2022</li>
                <li>Herbstferien: 17.10.2022 – 28.10.2022</li>
                <li>Weihnachtsferien: 23.12.2022 – 06.01.2023</li>
              </ul>{" "}
            </div>
            <div className="w-max-[600px]  bg-orange-300/80 p-6">
              <h3> Niedersachsen-School Holiday 2023:</h3>
              <ul>
                <li>Osterferien: 27.03.2023 – 11.04.2023</li>
                <li>Zusäzlicher Ferientag: 19.05.2023</li>
                <li>Pfingstferien: 30.05.2023</li>
                <li>Sommerferien: 06.07.2023 – 16.08.2023</li>
                <li>Zusätzlicher Ferientag: 02:10.20232</li>
                <li>Herbstferien: 16.10.2023 – 30.10.2023</li>
                <li>Weihnachtsferien: 27.12.2023 – 05.01.2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
