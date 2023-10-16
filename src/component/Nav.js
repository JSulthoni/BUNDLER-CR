import React from 'react'

const LoginTab = function() {
    return (
        <>
            <div className='log-panel'>
                <form className='flexcol log-form'>
                    <input type='text' value='username'/>
                    <input type='password'/>
                    <button className='button'>Sign In</button>
                    <div className='separator'></div>
                    <a>Sign Up</a>
                </form>
            </div>
        </>
    )
}

export const Nav = function() {
    return (
        <>
            <nav className='nav'>
                    <ul className='nav-m flexrow'>
                        <div className='nav-m-i'>About</div>
                        <div className='nav-m-i'>Get Started</div>
                        <div className='nav-m-i'>Sign In</div>
                    </ul>
                    <LoginTab />
            </nav>
        </>
    )
}