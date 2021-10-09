import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
// import imgba from './bimage.jpg'

function Header() {
    return (
        <div className="header">
          <Link to="/Checkbox">
          <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
         </Link>
          <div className="header_search">
          <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
          </div>  

          <div className="header_nav">
            <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">Sign In</span>
            </div>

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
          <ShoppingCartOutlined className="C_icon" fontSize="large" />
          <span className='header_basketcount'>0</span>
          </div>

        </div>
    )
}

export default Header;