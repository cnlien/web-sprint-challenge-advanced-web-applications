import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem,
  } from 'reactstrap';

import '../styles/navigation.scss'

const Navigation = () => {  

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('token')){
            setLoggedIn(true)
        }
    })

    const handleLogout = (e) => {
        localStorage.removeItem('token')
        setLoggedIn(false)
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar>
            <Nav>
                <NavItem>
                    {loggedIn ? <Link to='/bubbles-page'>Bubbles</Link> : <Link to="/"></Link>}
                </NavItem>

                <NavItem>
                    {loggedIn ? <Link to='/sprint-questions'>Sprint Answers</Link> : <Link to="/"></Link>}
                </NavItem>

                <NavItem>
                    {!loggedIn ? <Link to="/">Login</Link> : <Link to="/" onClick={handleLogout}>Logout</Link>}
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Navigation