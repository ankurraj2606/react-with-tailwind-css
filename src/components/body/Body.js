import { useState, useEffect } from "react";
import RestaurantCard from "../restaurantCard/RestaurantCard";
import { FETCH_RES_LIST, RestaurantList } from "../../configs/config";
import SearchBar from "../search/SearchBar";
import Shimmer from "../shimmer/Shimmer";
import Sort from "../sort/Sort";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
export const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RES_LIST);
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  //Conditional Rendering
  // If restaurants is empty, load shimmer UI
  // If restaurants have data, load actual data UI

  //Early return(Not render component)

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴Seems you are offline</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-and-sort">
        <SearchBar
          allRestaurants={allRestaurants}
          setAllRestaurants={setAllRestaurants}
          filteredRestaurants={filteredRestaurants}
          setFilteredRestaurants={setFilteredRestaurants}
        />
        <Sort
          allRestaurants={allRestaurants}
          setAllRestaurants={setAllRestaurants}
          filteredRestaurants={filteredRestaurants}
          setFilteredRestaurants={setFilteredRestaurants}
        />
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length === 0 ? (
          <>
            <h1 className="no-results-class">
              No results found for this search......
            </h1>
          </>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
                className="card"
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
