import { useState, useEffect } from "react";
import { FETCH_RES_URL } from "../configs/config";

const useRestaurant = (id) => {
  //Get data from server api

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const details = await fetch(FETCH_RES_URL + id);
    const detailsJson = await details.json();
    setRestaurant(detailsJson.data);
    console.log(detailsJson.data);
  }

  // Return the data
  return restaurant;
};

export default useRestaurant;
