import React, { useState } from 'react';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import './NavBar.css'

const NavBar = () => {
    const [underline, setUnderline] = useState('shop');

    return (
        <div className='Nav'>
            <div className="nav-logo">
                <img className='logo' src={logo} alt="" />
                <h4 className='p-nav'>Dodddle</h4>
            </div>
            <ul>
                <li onClick={() => { setUnderline("shop") }}>Shop {underline === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setUnderline("men") }}>Men {underline === "men" ? <hr /> : <></>}</li>
                <li onClick={() => { setUnderline("women") }}>Women {underline === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setUnderline("kids") }}>Kids{underline === "kids" ? <hr /> : <></>}</li>

            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="cart-counter">0</div>
            </div>

        </div>
    );
}

export default NavBar;
