import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div id="body" className="body">
      <div id="searchBar">Search</div>
      <div className="restaurantCard-container">
        <RestaurantCard
          restaurantName={"KFC"}
          restaurantAddress={"Noida"}
          restaurantRating={"4.2"}
          deliveryTime={"38"}
        />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
