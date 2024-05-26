import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/v1/image/getAll"
        );
        console.log(res.data.foodImage);
        setImages(res.data.foodImage);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImg();
  }, []);
  return (
    <>
      <div className=" container mx-auto md:px-24 px-4 my-4 h-screen">
        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-left text-center">
            What's on your mind
          </h1>
          <div className="">
            <div className="carousel carousel-center  rounded-2xl space-x-4">
              {images.map((image, index) => (
                <div className="carousel-item" key={index}>
                  <div className="space-y-3 text-center ">
                    <img
                      src={image.imageUrl}
                      alt={image.title || "Food Image"}
                      className="h-40 w-40 rounded-full object-cover"
                    />
                    <p className="text-xl font-bold">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-bold md:text-left text-center">
            Top restaurant chains
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
