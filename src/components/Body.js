import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "./UserContext.js";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:3000/api/restaurants");
      
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      
      const json = await data.json();

      const restaurantData = json?.data?.cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurants =
        restaurantData?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      // ✅ Optional: force first restaurant to be promoted for testing
      if (restaurants.length > 0) {
        restaurants[0].info.ribbon = { text: "PROMOTED" };
      }

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      // You could set an error state here or show a user-friendly message
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) 
    return (
      <h1>
        Looks like you're offline!! Please check your Internet Connection.
      </h1>
    );

const { loggedIn, setUserName } = useContext(UserContext);


  if (!listOfRestaurants || listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
          <button
  className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
  onClick={() => {
    const filtered = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurants(filtered);
  }}
>
  Top Rated Restaurants
</button>
        </div  >
        <div className="search m-4 p-4 flex items-center">
          <label>UserName:</label>
          <input className="border border-black p-2" 
          value={loggedIn}
          onChange={(e)=>setUserName(e.target.value)}/>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.ribbon?.text === "PROMOTED" ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
