import React from "react";
import star from '../image/star.svg'


export const Card = function(prop) {
    return(
        <div className="card">
            <img className="card-img" src={prop.card.image} alt='card preview'/>
            <div className="card-prod">
                <h4 className="card-t">{prop.card.title}</h4>
                <div className="card-i">
                    <div className='card-price'>{prop.card.price}</div>
                    <div className='card-i1'>
                        <img className='card-star' src={star} alt='cardrating'/>
                        <div className='card-rate'>{prop.card.rating.rate}</div>
                        <p>500+ sold</p>
                    </div>
                </div>
            </div>
        </div>
    )
}