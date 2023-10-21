import React from "react";
import star from '../image/star.svg'


export const Card = function({card, dispatch}) {
    // const rating = card.rating.rate
    // const fillColor =  
    //             rating >= 4.5 ? '#4ade80' : 
    //             rating >= 4 ? '#16a34a' : 
    //             rating >= 3.5 ? '#166534' : '#94a3b8'
    // const fillStyle = {backgroundColor : fillColor}

    return(
        <div className="flexcol card clickable" onClick={() => dispatch({type: 'getid', payload: {id : card.id}})}>
            <img className="card-img" src={card.image ? card.image : 'https://placehold.co/400' } alt='card preview'/>
            <div className="flexcol">
                <h3 className="card-t">{card.title}</h3>
                <div className="flexcol">
                    <span className='card-price'>{card.price}</span>
                    <div className='flexrow'>
                        <img className='card-star' src={star} alt='cardrating'/>
                        <span className='card-rate'>{card.rating.rate}</span>
                        <span className="card-count">{card.rating.count}+ sold</span>
                    </div>
                </div>
            </div>
        </div>
    )
}