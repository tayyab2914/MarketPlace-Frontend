import React, { useState } from "react";

const ServiceSearchComponent = ({ setFilters }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    setFilters({ keyword, location, category });
  };

  return (
    <div className="col-span-12 lg:col-span-4">
      <div className="rounded-xl border border-n30 px-6 py-8">
        <h5 className="heading-5">Filter by</h5>
        <div className="flex flex-col gap-6 pt-8">
          <div className="rounded-xl bg-n10 p-6">
            <p className="pb-3 text-lg font-semibold">Keyword</p>
            <input
              type="text"
              className="w-full rounded-xl border border-n40 bg-transparent px-4 py-3 outline-none"
              placeholder="What are you looking for?"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <div className="rounded-xl bg-n10 p-6">
            <p className="pb-3 text-lg font-semibold">Location</p>
            <input
              type="text"
              className="w-full rounded-xl border border-n40 bg-transparent px-4 py-3 outline-none"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="rounded-xl bg-n10 p-6">
            <p className="pb-3 text-lg font-semibold">Categories</p>
            <input
              type="text"
              className="w-full rounded-xl border border-n40 bg-transparent px-4 py-3 outline-none"
              placeholder="Categories"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button
            onClick={handleSearch}
            className="relative flex items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-2 font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
          >
            <span className="relative z-10">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSearchComponent;
