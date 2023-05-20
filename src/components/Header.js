import Logo from "../../Icons/logo.jpeg";
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

export default Header;
