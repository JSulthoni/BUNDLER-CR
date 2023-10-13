import React, {useState} from 'react'
import star from '../image/star.svg'
import arrowleft from '../image/arrow-left.svg'
import cart from '../image/carticon.svg'

export const Preview = function() {

    // Back button
    const [show, setShow] = useState(false)
    function closePrev() {
        setShow(prevShow => !prevShow)
    }


    return (
        <div className='preview-main'>
            <img className='preview-icon' src={arrowleft} alt='previewicon' aria-label='backbutton'/>
            <div className='preview-img'>
                <img src='https://placehold.co/600x400' alt='product main preview'/>
            </div>
            <div className='preview-head'>
                <div className='preview-price'>
                    <p>1000</p>
                </div>
                <div className='preview-buttons'>
                    <p>5K SOLD</p>
                    <div className='preview-rating'>
                        <img className='preview-icon' src={star} alt='rating icon'/>
                        <p>RATING COUNT</p>
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
                <h1 className='preview-t'>HELLOW FRIENDS!</h1>
                <p className='preview-desc'>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
            </div>
        </div>
    )
}