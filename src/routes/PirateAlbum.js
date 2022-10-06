import React from "react";
import FetchImage from "../components/FetchImage";

export default function PirateAlbum() {
  return (
    <div className="w-full h-full relative z-1 bg-gray-400/70">
      <div className="absolute w-full h-full top-20 left-0 flex justify-center bg-slate-300/100 text-gray-800">
        <div className="w-full px-14 ">
          <FetchImage />
        </div>
      </div>
    </div>
  );
}
