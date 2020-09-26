import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ cart }, dispatch] = useStateValue()

    return (
        <nav className="header">
            {/* Logo on left */}
            <Link to="/">
                <img

                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="" />
            </Link>

            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 Links */}
            <div className="header__nav">
                {/* Link 1 - SignIn/SignOut */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Yashvi</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* Link 2 - Return Order */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* Link 3 - Prime */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* Basket*/}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* Shopping Basket Icon*/}
                        <ShoppingCartIcon />
                        {/* Number of items in basket */}
                        <span className="header__optionLineTwo basket__count">{cart?.length}</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header
