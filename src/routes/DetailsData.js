import React from "react";
import { useParams } from "react-router-dom";

import { getDayDetail } from "../data/detailsData";
import { handleDayClick } from "../data/data";

export default function DetailsData() {
  const weekday = useParams();
  const dayMethod = handleDayClick(weekday.detail);

  //get details data for each method of the day
  let detailsArr = getDayDetail(dayMethod);

  return (
    <div className="w-full flex flex-wrap justify-evenly gap-0">
      {React.Children.toArray(
        detailsArr.map(mon => (
          <div className="max-w-[1240px] grid ">
            <div className="w-full shadow-xl flex flex-col p-4 px-8 my-6 bg-green-200/80 rounded-lg hover:scale-105 duration-300">
              <img
                className="w-[300px] h-[200px] mx-auto mt-[1.5rem] object-fill bg-white"
                src={mon.src}
                alt="/"
              />
              <p className="mt-8 text-center text-4xl font-bold">{mon.name}</p>
              <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">Teacher</p>
                <p className="py-2 border-b mx-8">{mon.teacher}</p>
                <p className="py-2 border-b mx-8 mb-7">{mon.room}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
