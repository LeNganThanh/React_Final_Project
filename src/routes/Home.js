import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { handleDayClick } from "../data/data";

import { getWeekday } from "../data/data";
import { TableContext } from "../components/TableContext";

export default function Home() {
  const [idx, setIdx] = useState(0);
  const { state, dispatch } = useContext(TableContext);
  const isDay = state.isDay;

  function getIdx(index) {
    setIdx(index);
  }

  const weekday = getWeekday();

  return (
    <div className="flex flex-col justify-center">
      <nav className="weekday grid-cols-2 md:grid-cols-3 mx-auto">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 font-semibold">
          {weekday.map((day, id) => (
            <NavLink to={`/${day}`} key={id} onClick={() => getIdx(id)}>
              <li
                key={idx}
                className="day"
                onClick={() => {
                  handleDayClick(day);
                  dispatch({
                    type: "DAY_CLICK",
                    isDay: true,
                  });
                }}
                style={{
                  color: idx === id && isDay === true ? "white" : "darkblue",
                }}
              >
                {day.charAt(0).toUpperCase()}
                {day.substring(1)}
              </li>
            </NavLink>
          ))}
        </ul>{" "}
      </nav>
      <Outlet />
    </div>
  );
}
