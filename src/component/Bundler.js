import React from 'react'
import cross from '../image/cross-circle.svg'

export const Bundler = function() {
    return (
        <div className='flexcol bdl'>
            <h2 className='bdl-t'>YOUR BUNDLE :</h2>
            <div className='bdl-cont'>
                <div>
                    <img className='x-button' src={cross} alt='crossbutton' aria-label='removeitem'/>
                    <p className='bdl-item'>ITEM NAME</p>
                </div>
                <div>
                    <p className='bdl-item'>ITEM NAME</p>
                </div>
                <div>
                    <p className='bdl-item'>ITEM NAME</p>
                </div>
                <div>
                    <p className='bdl-item'>ITEM NAME</p>
                </div>
                <div>
                    <p className='bdl-item'>ITEM NAME</p>
                </div>
            </div>
            <div>
                <input className='button bdl-btn' type='button' value='GET STORE' onChange=''/>
            </div>
        </div>
    )
}