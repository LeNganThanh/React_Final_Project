import React, { useState, useEffect } from "react";
import ImageUnsplash from "./ImageUnsplash";

export default function FetchImage() {
  //fetch data to get Pirate images from Unsplash
  const [images, setImages] = useState([]);

  useEffect(() => {
    let controller = new AbortController();

    let fetchUrl =
      "https://api.unsplash.com/search/photos?query=pirate&page=3&client_id=uN7PFK__ic30ImJoTZOLW4lLrhitj-t690JgBAnvZew";

    const fetchImage = async () => {
      try {
        const response = await fetch(fetchUrl);
        if (!response.ok) throw new Error("Data is not found");
        const data = await response.json();
        const dataArr = await data.results;
        setImages(dataArr);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchImage();
    return () => controller?.abort();
  }, []);
  return (
    <div>
      {!images ? (
        <h3 className="flex items-cent justify-center  ">Loading....</h3>
      ) : (
        <section>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
            {images.map(image => (
              <ImageUnsplash key={image.id} {...image} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
