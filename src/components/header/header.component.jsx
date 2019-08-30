import React from "react";
import './header.style.scss';
import { withRouter, Link } from 'react-router-dom';
import { ReactComponent as Logo} from './crown.svg'


const Header = ({history}) => (
    <div className='header'>
        <div className="logo-container">
            <Logo onClick={() => history.push('/')} />
        </div>
        <div className="options pointer">
            <div className="option" onClick={() => history.push('/shop')}>SHOP</div>
            <div className="option" onClick={() => history.push('/contact')}>CONTACT</div>
            <div className="option" onClick={() => history.push('/signin')} >SIGN IN</div>
            <div className="option" onClick={() => history.push('/cart')} ></div>
        </div>
    </div>
)

export default withRouter(Header);