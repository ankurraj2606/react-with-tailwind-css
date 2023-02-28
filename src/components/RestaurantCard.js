import { IMG_CDN_URL } from "../configs/config";
import { FaPercent, FaStar } from "react-icons/fa";

// const colors = {
//   orange:
// }

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
    <div className="border-collapse">
      <div className="mx-auto">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          className="text-center py-2"
        />
        <h4 className="font-semibold">{name}</h4>
        <p className="break-all text-sm">{cuisines.join(",")}</p>
        <div className="">
          <div className="">
            <span className="text-xs pr-1">
              <FaStar className="inline pr-1 text-xl pb-1 stroke-orange-400" />
              {avgRating}
            </span>
            <span className="text-xs px-1"> | {deliveryTime} mins</span>|
            <span className="text-xs px-1">{costForTwoString}</span>
          </div>
          <div className="">
            <p className="text-sm">
              <span className="text-xs pr-1">
                <FaPercent className="inline text-[10px]" />
                <span className="pl-2 text-xs px-1">
                  {aggregatedDiscountInfo.shortDescriptionList[0].meta}
                </span>
              </span>
            </p>
          </div>
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
