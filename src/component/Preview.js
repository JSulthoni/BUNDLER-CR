import React from 'react'


import star from '../image/star.svg'
import arrowleft from '../image/arrow-left.svg'
import cart from '../image/carticon.svg'

export const Preview = function({data, onClose}) {


    return (
        <div className='prw-main'>
            <img className='prw-icon back' src={arrowleft} alt='prwicon' aria-label='backbutton' onClick={onClose}/>
            <div className='flexcol prw-img'>
                <img src={data.image !== null ? data.image : 'https://placehold.co/600x400'} alt={data.title}/>
            </div>
            <div className='flexcol prw-head'>
                <div className='flexrow prw-price'>
                    <p>{data.price}</p>
                </div>
                <div className='prw-buttons'>
                    <p>{data.rating.count}</p>
                    <div className='button prw-rating'>
                        <img className='prw-icon' src={star} alt='rating icon'/>
                        <p>{data.rating.rate}</p>
                    </div>
                    <div className='button prw-cart'>
                        <p>ADD TO CART</p>
                    </div>
                    <div className='button prw-bundler'>
                        <p>ADD TO BUNDLE</p>
                    </div>
                </div>
            </div>
            <div className='prw-details'>
                <h1 className='prw-t'>{data.title}</h1>
                <p className='prw-desc'>{data.description}</p>
            </div>
        </div>
    )
}