import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div >
      {items?.map((item, index) => {
        const { id, name, description, price, defaultPrice, imageId } =
          item?.card?.info || {};

        const uniqueKey = id ? `${id}-${index}` : `item-${index}`;

        return (
          <div data-testid="foodItems" key={uniqueKey}
     className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
>
            <div className="w-9/12">
              <div className="py-2">
                <span>{name}</span>
                <span> - ₹ {(price ?? defaultPrice) / 100}</span>
              </div>
              <p className="text-xs">{description}</p>
            </div>

       
            <div className="w-3/12 p-4 relative">
              <button
                className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
              
              {imageId && (
                <img
                  src={CDN_URL + imageId}
                  className="w-full mt-8"
                  alt={name}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
