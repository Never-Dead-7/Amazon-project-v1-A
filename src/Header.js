import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { StateValue } from "./Stateprovider.js";
import { auth } from './dbfirebase.js'

function Header() {
  const [{ cart, user }, dispatch] = StateValue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut()
    }
  }
  return (
    <div className="header">
      <span>E-commerce</span>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={user ? "/Login" : "/Login"} className="link" >
          <div className="header_option" onClick={handleAuthentication}>
            <span className="header_optionLineOne">Hello {user ? user?.email : "Guest"}</span>
            <span className="header_optionLineTwo">{user ? 'Sign out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">& Order</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>

      <div className="header_optionBasket">
        <Link to="/Checkbox">
          <ShoppingCartOutlined className="C_icon" fontSize="large" />
          <span className="header_basketcount">{cart.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
