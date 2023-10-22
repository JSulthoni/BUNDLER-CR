import { useState, useEffect, useRef } from "react"
import React from 'react'
import useClickOutside from "./customHook/useClickOutside"

const LoginTab = function() {
    return (
        <>
            <form className='flexcol log-form'>
                <input name='username' type='text' value='username'/>
                <input name='password' type='password'/>
                <button className='btn'>Sign In</button>
                <a href='#' className="clickable">Sign Up</a>
            </form>
        </>
    )
}

const Nav = function() {
    const ref = useRef(null)
    const [open, setOpen] = useState(false)

    useClickOutside(ref, () => setOpen(false))


    return (
        <>
            <nav className='nav'>
                <ul ref={ref} className='nav-m flexrow'>
                    <li className='nav-m-i clickable'><a href='#about'>About</a></li>
                    <li className='nav-m-i clickable'><a href='#main'>Get Started</a></li>
                    <li className='nav-m-i clickable'><span onClick={() => setOpen(!open)}>Sign In</span></li>
                </ul>
                <div className={`log-panel ${open ? 'active' : 'inactive'}`}>
                    <LoginTab />
                </div>
            </nav>
        </>
    )
}

export default Nav;