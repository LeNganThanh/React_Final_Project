import React, { useContext, useState } from "react";
import { TableContext } from "../components/TableContext";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

import PirateAlbum from "./PirateAlbum";
import News1 from "../components/News1";
import News2 from "../components/News2";
import News3 from "../components/News3";

export const newsArr = [<News1 />, <News2 />, <News3 />];
export default function News() {
  const { state, dispatch } = useContext(TableContext);
  const isShow = state.isShow;

  //using i to set the component shows
  const [i, setI] = useState(0);
  const nextSlide = () => {
    setI(i === newsArr.length - 1 ? 0 : i + 1);
    dispatch({
      type: "NEWS_COUNT",
      count: newsArr.length,
    });
  };

  const preSlide = () => {
    setI(i === 0 ? newsArr.length - 1 : i - 1);
  };
  if (!isShow) {
    return (
      <div>
        <BsArrowBarLeft
          onClick={preSlide}
          className="absolute top-[50%] text-3xl text-blue-800 cursor-pointer left-10 z-10"
          size={40}
        />
        <h1 className="text-center text-blue-600 underline underline-offset-4 pt-24 font-semibold">
          NEWS
        </h1>
        {newsArr[i]}
        <BsArrowBarRight
          onClick={nextSlide}
          className="absolute top-[50%] text-3xl text-blue-800 cursor-pointer right-10"
          size={40}
        />
      </div>
    );
  } else {
    return <PirateAlbum />;
  }
}
