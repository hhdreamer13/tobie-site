"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";

const NewsDisplay = ({ news }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col justify-center items-center w-2/3">
      <ul className="flex flex-col sm:grid-cols-2 gap-6 p-2">
        {currentItems.map((newsItem) => (
          <div key={newsItem._id}>
            <NewsCard post={newsItem} />
          </div>
        ))}
      </ul>
      <div className="flex gap-3 justify-center items-center flex-wrap">
        {[...Array(Math.ceil(news.length / itemsPerPage)).keys()].map((num) => (
          <button
            key={num}
            className={`w-10 py-2 rounded-lg transition-all duration-75 border ${
              currentPage === num + 1
                ? "font-bold border-emerald-400 border-2"
                : "font-light"
            }`}
            onClick={() => paginate(num + 1)}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsDisplay;
