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
        className="btn sort-btn-rating"
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
      <button className="btn sort-btn-time">Delivery Time</button>
      <button className="btn sort-btn-cost">Cost</button>
    </div>
  );
};

export default Sort;
