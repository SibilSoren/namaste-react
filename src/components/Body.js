import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { resData } from "../utils/constants";
const Body = () => {
  const [restaurantData, setRestaurantData] = useState(resData);
  function filterRestaurant() {
    let filteredData = restaurantData.filter(
      (item) => item.restaurantRating > 4
    );
    console.log(filteredData);
    setRestaurantData(filteredData);
  }
  return (
    <div id="body" className="body">
      {/* <div id="searchBar">Search</div> */}
      <button type="button" className="filterBtn" onClick={filterRestaurant}>
        Filter Top Restro
      </button>
      <div className="restaurantCard-container">
        {restaurantData.map((item) => {
          return (
            <RestaurantCard
              key={item.id}
              restaurantName={item.restaurantName}
              restaurantAddress={item.restaurantAddress}
              restaurantRating={item.restaurantRating}
              deliveryTime={item.deliveryTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
