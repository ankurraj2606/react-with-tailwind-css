import React from "react";

const Sort = (props) => {
  // function filterData(searchText, restaurants) {
  //     const filteredData =  restaurants.filter((restaurant) =>
  //       restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
  //     return filteredData
  //   }

  function sortByRating(restaurants) {
    return restaurants.sort((a, b) => {
      return b?.data?.avgRating - a?.data?.avgRating;
    });
  }

  const {
    allRestaurants,
    setAllRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  } = props;
  console.log(allRestaurants, setAllRestaurants);
  return (
    <div className="sort-container">
      <span className="sort-text">Sort By</span>
      <button
        className="border px-4 py-2 mx-4 border-orange text-white bg-orange-600 hover:bg-white hover:border-1  hover:border-orange-600 hover:text-orange-600"
        onClick={() => {
          console.log("sort by rating clicked");
          const sortedRating = sortByRating(allRestaurants);
          setFilteredRestaurants(sortedRating);
          console.log(
            filteredRestaurants[0]?.data?.avgRating,
            filteredRestaurants[1]?.data?.avgRating,
            filteredRestaurants[2]?.data?.avgRating,
            filteredRestaurants[3]?.data?.avgRating
          );
        }}
      >
        Rating
      </button>
      <button className="border px-4 py-2 mx-4 border-orange text-white bg-orange-600 hover:bg-white  hover:border-orange-600 hover:text-orange-600">
        Delivery Time
      </button>
      <button className="border px-4 py-2 mx-4 border-orange text-white bg-orange-600 hover:bg-white  hover:border-orange-600 hover:text-orange-600">
        Cost
      </button>
    </div>
  );
};

export default Sort;
