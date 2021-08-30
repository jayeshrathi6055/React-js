import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import loginImage from './login.png';

export default function navbar() {
    return (
        <div>
            <nav className = 'container1'>
                <h1>Recipe Store</h1>
                <div className = "container7">
                    <span className = 'home'><Link to = '/'>Home</Link></span>
                    <span className = 'recipes'><Link to = '/recipes'>Recipes</Link></span>
                </div>
                <div>
                <Link to ='/signup' ><img src={loginImage} alt="Sign Up" /></Link> 
                {/* <Link to ='/login' ><img src={loginImage} alt="Login" /></Link> */}
                </div>
            </nav>
        </div>
    )
}
