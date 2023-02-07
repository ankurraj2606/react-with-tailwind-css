import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Body } from "./components/body/Body";

/**
 * AppLayout
 *
 *  -Header
 *      -Logo
 *      -Nav Items
 *      -Cart
 *  -Body
 *     - Search Bar
 *     - Restaurant List
 *     - Restaurant Card (many)
 *          - Name
 *          - Image
 *          - Ratings
 *          - Cuisines
 *   -Footer
 *      -CopyRights
 *      -Links
 *
 */

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

// Config-driven UI

const config = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "No Delivery Charge",
      },
    ],
  },
  {
    type: "restaurants",
    cards: [
      {
        name: "Burger King",
        image:
          "https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg",
        cusines: ["Burger", "American"],
        ratings: "4",
      },
    ],
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
