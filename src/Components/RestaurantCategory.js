import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ resData, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); // This should be setShowIndex(!showItems)
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {resData?.title} ({resData?.itemCards?.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems && <ItemList items={resData?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
