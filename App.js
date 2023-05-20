import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Icons/logo.jpeg";

const Header = () => {
  return (
    <div id="header" className="header">
      <div className="logoContainer">
        <img src={Logo} className="logo" />
        <h3>My Foodies</h3>
      </div>
      <div id="navItem" className="navItem">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
        <h4>{props.restaurantRating}</h4>
      </div>
      <div className="deliveryTime">
        <h4>{props.deliveryTime}</h4>
      </div>
    </div>
  );
};

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

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
