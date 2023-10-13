import React from 'react'
import cross from '../image/cross-circle.svg'

export const Bundler = function() {
    return (
        <div className='bundler'>
            <h2 className='bundler-t'>YOUR BUNDLE :</h2>
            <div className='bundler-container'>
                <div>
                    <img className='x-button' src={cross} alt='crossbutton' aria-label='removeitem'/>
                    <p className='bundler-item'>ITEM NAME</p>
                </div>
                <div>
                    <p className='bundler-item'>ITEM NAME</p>
                </div>
                <div>
                    <p className='bundler-item'>ITEM NAME</p>
                </div>
                <div>
                    <p className='bundler-item'>ITEM NAME</p>
                </div>
                <div>
                    <p className='bundler-item'>ITEM NAME</p>
                </div>
            </div>
            <div>
                <input className='bundler-button' type='button' value='GET STORE' onChange=''/>
            </div>
        </div>
    )
}