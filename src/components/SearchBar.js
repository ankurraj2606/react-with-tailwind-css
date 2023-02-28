import React, { useState } from "react";
import { useEffect } from "react";
import Sort from "./Sort";
import { filterData } from "../utils/helpers";

const SearchBar = (props) => {
  const {
    allRestaurants,
    setAllRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  } = props;

  //searchText is a local state variable.
  //We can't directly modify the variable in react, we can only modify it using a function --> setSearchText

  const [searchText, setSearchText] = useState(""); //returns an array [variable-name, fn to modify the variable]

  return (
    <div className="py-2 px-4">
      <input
        placeholder="Search for restaurants, dishes, cuisines, ....."
        type="text"
        className="w-80 py-2 px-4 border border-orange-400 mr-8 focus:border focus:border-orange-600 focus:outline-none"
        value={searchText}
        onChange={(e) => {
          //e.target.value --> whatever we are writing in input field.
          setSearchText(e.target.value);
        }}
      />
      <button
        className="border px-4 py-2 mx-4 border-orange text-white bg-orange-600 hover:bg-white  hover:border-orange-600 hover:text-orange-600"
        onClick={() => {
          // need to filter the data and update the state --- restaurants
          const data = filterData(searchText, allRestaurants);
          //update the states ---> restaurants
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
