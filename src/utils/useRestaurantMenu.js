import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        console.log("Full API response:", json);  

  
        setResInfo(json?.data);
      } catch (err) {
        console.error("Menu fetch failed", err);
      }
    };

    fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
