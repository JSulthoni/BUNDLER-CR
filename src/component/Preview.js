import React from 'react'


import star from '../image/star.svg'
import arrowleft from '../image/arrow-left.svg'
import cart from '../image/carticon.svg'

export const Preview = function({data, onClose}) {
    console.log(data)
    return (
        <div className='preview-main'>
            <img className='preview-icon back' src={arrowleft} alt='previewicon' aria-label='backbutton' onClick={onClose}/>
            <div className='preview-img'>
                <img src={data.image !== null ? data.image : 'https://placehold.co/600x400'} alt={data.title}/>
            </div>
            <div className='preview-head'>
                <div className='preview-price'>
                    <p>{data.price}</p>
                </div>
                <div className='preview-buttons'>
                    <p>{data.rating.count}</p>
                    <div className='preview-rating'>
                        <img className='preview-icon' src={star} alt='rating icon'/>
                        <p>{data.rating.rate}</p>
                    </div>
                    <div className='preview-cart'>
                        <img className='preview-icon' src={cart} alt='cart icon'/>
                        <p>ADD TO CART</p>
                    </div>
                    <div className='preview-bundler'>
                        <p>ADD TO BUNDLE</p>
                    </div>
                </div>
            </div>
            <div className='preview-details'>
                <h1 className='preview-t'>{data.title}</h1>
                <p className='preview-desc'>{data.description}</p>
            </div>
        </div>
    )
}