import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { bookTitle, imageURL, authorName } = useLoaderData();

  return (
    <div className="mt-28 ml-10 px-4 lg:px-24 flex flex-col md:flex-row gap-[5rem]">
      <div className="flex  flex-col items-center md:items-start">
        <img src={imageURL} alt="" className="h-96 rounded-sm" />
        <button className="w-full bg-blue-700 font-semibold text-white py-2 px-2 rounded-full mt-4 md:[1]">
          Want to read
        </button>
        <button className="w-full bg-yellow-50 blue-border font-semibold rounded-full mt-4 py-2 px-2 md:w-auto]">
          Kindle $4.00
        </button>
      </div>
      <div>
        <h2 className="text-5xl font-medium">{bookTitle}</h2>
        <h2 className="text-2xl font-medium  mt-2 text-gray-500">
          {authorName}
        </h2> 
        <div className=" md:w-[40rem]">
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempora
            ab, ratione dolores consequatur cupiditate commodi accusantium,
            culpa provident ullam laudantium autem sint quas assumenda, nisi
            voluptatem debitis minus in.
          </p>
        </div>
        <p className="mt-5">291 Pages, Paperback</p>
        <p className="mt-2">First Published July 01,2024</p>
      </div>
    </div>
  );
};

export default SingleBook;
