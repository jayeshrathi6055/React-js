import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>Text Methods</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}
