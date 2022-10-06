import React from "react";

export default function ImageUnsplash(props) {
  return (
    <div className="mt-8">
      <article className="shadow-md bg-white rounded-[10px] p-2 ">
        <img
          src={props.urls.regular}
          alt={props.user.name}
          loading="lazy"
          className="h-42 w-full object-cover rounded-[12px] md:h-60"
        />
      </article>
    </div>
  );
}
