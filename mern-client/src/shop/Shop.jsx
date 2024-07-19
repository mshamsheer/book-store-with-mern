import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8081/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {books.map((book) => (
          <Card key={book.id}>
            <div className="p-4"> 
              <img src={book.imageURL} alt={book.bookTitle} className="h-50 w-full object-cover" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
                {book.bookTitle}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="w-full bg-blue-700 font-semibold text-white py-2 px-2 rounded mt-4">
                Buy Now
              </button>
            </div>
            
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
