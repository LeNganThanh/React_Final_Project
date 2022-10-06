import React, { useState, useContext } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import { TableContext } from "../components/TableContext";
import "../App.css";

export default function Navbar() {
  const [searchParam, setSearchParam] = useSearchParams(); //return array of 2 values likes useState

  const { state, dispatch } = useContext(TableContext); //to loose the focus on weekday
  const newsCount = state.newsCount; //counting the news

  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setLogo(!logo);
    setNav(!nav);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-6 absolute z-10 bg-slate-400/70">
      <nav>
        <NavLink to="/">
          <h1
            className={
              logo
                ? "hidden text-blue-900 font-semibold"
                : "block text-blue-900"
            }
            onClick={() => dispatch({ type: "DAY_CLICK", isDay: false })}
          >
            CLASS5e.
          </h1>
        </NavLink>
      </nav>
      <ul className="hidden md:flex font-semibold text-blue-800 gap-2">
        <NavLink to="/">
          <li
            className=" hover:text-white font-bold"
            onClick={() => dispatch({ type: "DAY_CLICK", isDay: false })}
          >
            HOME
          </li>
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <li className="hover:text-white ">About</li>
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <li className="hover:text-white">Contact</li>
        </NavLink>
        <NavLink
          to="news"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <li
            className="hover:text-white flex"
            onClick={() => dispatch({ type: "SHOW_ALBUM", show: false })}
          >
            News
            <span className={newsCount === 0 ? "hidden" : "newsCount"}>
              {newsCount}
            </span>
          </li>
        </NavLink>
        <NavLink
          to="holiday"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <li className="hover:text-white">Holiday</li>
        </NavLink>
        <li className="flex justify-between relative">
          <input
            value={searchParam.get("filter") || ""}
            placeholder="Search"
            className="font-[1rem] px-2 py-[2px] w-[9rem] rounded-[10px]"
            onChange={event => {
              let filter = event.target.value;
              if (filter) {
                setSearchParam({ filter }); //{filter:filter}
              } else {
                setSearchParam({ filter: "" }); //filter is ""
              }
              dispatch({
                type: "SEARCH",
                param: filter,
              });
            }}
          />
          <AiOutlineSearch className="absolute top-3 right-6" />
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="text-blue-800 " />
        ) : (
          <AiOutlineMenu size={20} className="text-blue-800 " />
        )}

        {/* Mobile menu dropdown */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "absolute text-amber-800 left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col ease-in-out duration-500"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="border-b font-bold text-2xl ">CLASS5e.</li>

            <NavLink to="/">
              <li className="border-b hover:bg-slate-300 hover:text-white">
                HOME
              </li>
            </NavLink>
            <NavLink to="about">
              <li className="border-b hover:bg-slate-300 hover:text-white">
                ABOUT
              </li>
            </NavLink>
            <NavLink to="contact">
              <li className="border-b hover:bg-slate-300 hover:text-white">
                CONTACT
              </li>
            </NavLink>
            <NavLink to="news">
              <li
                className="border-b hover:bg-slate-300 hover:text-white"
                onClick={() => dispatch({ type: "SHOW_ALBUM", show: false })}
              >
                NEWS
              </li>
            </NavLink>
            <NavLink to="holiday">
              <li className="border-b hover:bg-slate-300 hover:text-white">
                HOLIDAY
              </li>
            </NavLink>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
