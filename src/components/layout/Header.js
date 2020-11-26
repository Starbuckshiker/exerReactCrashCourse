import React from 'react'
import { Link } from 'react-router-dom';

 function Header() {
    return (
        <header style={headerStyle}>
            <h1> Christmas List </h1>
            <Link style={linkStyle} to="/"> Home </Link> | <Link style={linkStyle} to="/about"> About </Link>
        </header>
        
    )
}

const headerStyle = {
    background: 'red',
    color: 'green',
    textAlign: 'center',
    fontStyle: 'bold',
    padding: '10px'
}

const linkStyle = {
    color: 'green',
    textDecoration: 'none'
}

export default Header;