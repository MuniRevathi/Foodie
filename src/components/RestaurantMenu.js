import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex,setShowIndex]=useState(0);

  if (!resInfo) return <Shimmer />;

  const restaurantInfo = resInfo?.cards?.find(
    (c) => c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  )?.card?.card?.info;

  const name = restaurantInfo?.name || "Restaurant";
  const cuisines = restaurantInfo?.cuisines?.join(", ") || "-";
  const costForTwo = restaurantInfo?.costForTwoMessage || "";

  const regularCards =
    resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCards = regularCards
    ?.map((c) => c.card?.card?.itemCards)
    ?.filter(Boolean)
    ?.flat();
  
 const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
  (c) => c.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines} - {costForTwo}
        </p>
{categories.map((category,index) => (
 <RestaurantCategory
  key={category.card.card.title}
  data={category.card.card}
  showItems={index === showIndex}
  setShowIndex={() =>
    setShowIndex(index === showIndex ? null : index)
  }
/>

))}



      


    </div>
  );
};

export default RestaurantMenu;
