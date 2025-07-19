import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "./UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const{loggedInUser}=useContext(UserContext);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData.info;

  return (
    <div  data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg ">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>User:{loggedInUser}</h4>
    </div>
  );
};


export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs rounded shadow-md z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};




export default RestaurantCard;