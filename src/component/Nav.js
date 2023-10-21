import { useState, useEffect, useRef } from "react"
import React from 'react'

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
    const navRef = useRef()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handler = (e) => {
            if (!navRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    return (
        <>
            <nav className='nav'>
                <ul ref={navRef} className='nav-m flexrow'>
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