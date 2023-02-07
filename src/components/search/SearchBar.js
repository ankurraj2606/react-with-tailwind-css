import React, { useState } from "react";
import { useEffect } from "react";
import Sort from "../sort/Sort";
import { filterData } from "../../utils/helpers";

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
    <div className="search-container">
      <input
        placeholder="Search for restaurants, dishes, cuisines, ....."
        type="text"
        className="search-input"
        value={searchText}
        onChange={(e) => {
          //e.target.value --> whatever we are writing in input field.
          setSearchText(e.target.value);
        }}
      />
      <button
        className="btn search-btn"
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
