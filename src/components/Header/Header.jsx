import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = (props) => {
    return (
        props.user ?
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <Link to='/replay' className="navbar-item">Replay It</Link> 
            <span className='navbar-item'>Welcome, {props.user.name}</span>
            <Link to='' onClick={props.handleLogout} className="navbar-item">Log Out</Link>
        </nav>
        :
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <Link to='/replay' className="navbar-item">Replay It</Link> 
            <Link to='/login' className="navbar-item">Log In</Link>
            <Link to='/signup' className="navbar-item">Sign Up</Link>
        </nav>
    )
}

export default Header
