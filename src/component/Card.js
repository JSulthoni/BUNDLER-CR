import React from "react";
import star from '../image/star.svg'


export const Card = function({card, onClick}) {
    return(
        <div className="flexcol card" onClick={onClick}>
            <img className="card-img" src={card.image ? card.image : 'https://placehold.co/400' } alt='card preview'/>

            <div className="card-prod">
                <h4 className="card-t">{card.title}</h4>
                <div className="card-i">
                    <div className='card-price'>{card.price}</div>
                    <div className='flexrow'>
                        <img className='card-star' src={star} alt='cardrating'/>
                        <div className='card-rate'>{card.rating.rate}</div>
                        <p>500+ sold</p>
                    </div>
                </div>
            </div>
        </div>
    )
}