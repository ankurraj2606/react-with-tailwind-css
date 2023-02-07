import { useState, useEffect } from "react";
import { FETCH_RES_LIST } from "../configs/config";

const useRestaurantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

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

  return [allRestaurants, setAllRestaurants];
};

export default useRestaurantList;
