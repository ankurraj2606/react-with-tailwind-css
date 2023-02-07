import { IMG_CDN_URL } from "../../configs/config";
import { FaPercent, FaStar } from "react-icons/fa";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  totalRatings,
  deliveryTime,
  costForTwoString,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="restaurant-container">
      <div className="restaurant-card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h4>{name}</h4>
        <p className="cuisines-para">{cuisines.join(",")}</p>
        <div className="rating-time-cost">
          <div className={avgRating >= 4 ? "green-rating" : "orange-rating"}>
            <span>
              <FaStar />
              {avgRating}
            </span>
            <span> | {deliveryTime} mins</span>|<span>{costForTwoString}</span>
          </div>
          <div className="separator"></div>
          <p className="offer-para">
            <span className="offer-span">
              <FaPercent className="offer-icon" />
              {aggregatedDiscountInfo.shortDescriptionList[0].meta}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

/**
 * const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${RestaurantList[1].data?.cloudinaryImageId}`}
      />
      <h2>{props.restaurant.data?.name}</h2>
      <p>{props.restaurant.data?.cuisines.join(",")}</p>
      <p>
        {props.restaurant.data?.avgRating} (
        {props.restaurant.data?.totalRatings})
      </p>
    </div>
  );
};

 */

// props --> properties passed from parent to child --> normal JS object
//props.restaurant can be destructured like {restaurant}

// no key (not acceptable)  << index key (okay way) <<<< unique key (best practice)

// It is adviced not to use the index of an item as its key when they render a list. Because in case of sorting or some other thing
// index can change and it can show wrong data in UI, or can even break our app.
