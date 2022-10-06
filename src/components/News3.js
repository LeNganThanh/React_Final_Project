import React, { useContext } from "react";
import { TableContext } from "./TableContext";

import Pirate from "../images/pirate.jpg";

export default function News3() {
  const { dispatch } = useContext(TableContext);
  return (
    <div className="w-full h-full relative z-1 ">
      <div className="absolute w-full h-full top-0 left-0 flex justify-center bg-slate-300/100 text-gray-800">
        <div className="absolute top-4 flex md:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 md-full p-6 mx-20 my-2 rounded-[15px] bg-yellow-100/80 ">
            <div>
              <h3 className="font-semibold pb-4">PIRATENCAMP 2022 – AHOI!</h3>
              <img src={Pirate} alt="/" className="h-42 md:h-[28rem]" />
            </div>
            <div className="pr-4">
              <h3 className="font-semibold pb-4">
                Was wollt ihr werdern? PIRATEN!!
              </h3>
              <p>
                Laut und weithin vernehmbar konnte man in der zweiten Schulwoche
                diese Frage von Kapitän Säbelzahn und die Antwort von bis zu 90
                Schüler*innen über das YouZe-Outdoor-Gelände schallen hören.
                Eine Woche nach Schulbeginn durften auch in diesem Jahr wieder
                alle Fünftklässer*innen bei Kapitän Säbelzahn und seiner Crew
                anheuern und ihre Piratenqualitäten unter Beweis stellen.
              </p>
              <br />
              <p>
                Das Sozialtraining der 5.Klassen umfasst zwei ganze Tage und
                jede Menge Aufgaben, Rätsel, Spiele und Wettkämpfe. Mit
                Geschick, Ausdauer, Konzentration und guten Einfällen müssen
                sich die Schülerinnen und Schüler den unterschiedlichsten
                Anforderungen stellen.
              </p>
              <br />
              <p
                className="underline text-blue-400 cursor-pointer"
                onClick={() => dispatch({ type: "SHOW_ALBUM", show: true })}
              >
                Pirate Photos Album
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
