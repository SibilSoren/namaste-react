const RestaurantCard = (props) => {
  return (
    <div id="restaurantCard" className="restaurantCard">
      <img
        className="restro-img"
        alt="restro-img"
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
      />
      <div className="restaurantName">
        <h3>{props.restaurantName}</h3>
      </div>
      <div className="restaurantAddress">
        <h4>{props.restaurantAddress}</h4>
      </div>
      <div className="restaurantRating">
        <h4>{props.restaurantRating} ⭐️</h4>
      </div>
      <div className="deliveryTime">
        <h4>{props.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
