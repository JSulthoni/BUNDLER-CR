import React, {useState, useEffect} from 'react'

import star from '../image/star.svg'
import arrowleft from '../image/arrow-left.svg'
// import cart from '../image/carticon.svg'

const Preview = ({prodId, dispatch, dispatchId}) => {
    const [prevData, setPrevData] = useState(null)
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${prodId}`)  
                .then(res=>res.json())
                .then(json=>{
                    setPrevData(json)
                    setLoading(false)
                })
    return () => {}
    }, [prodId])

    useEffect(() => {
        if (prevData) {
            setOpen(true)
        }
        return () => {}
    }, [prodId, open])

    function closeButton() {
        setOpen(false)
        dispatch({type: 'close'})
        setPrevData('')
    }

    return (
        <div className={`prw-main ${open ? 'active' : 'inactive'}`}>
            {loading ? 
            'loading....' : 
            <>
            <img className='prw-icon clickable' src={arrowleft} onClick={() => closeButton()} alt='prwicon' aria-label='backbutton'/>
            <div className='flexcol prw-img'>
                <img src={prevData.image !== null ? prevData.image : 'https://placehold.co/600x400'} alt={prevData.title}/>
            </div>
            <div className='flexcol prw-head'>
                <div className='flexrow prw-info'>
                <span>{prevData.price}</span><span>product count</span>
                </div>
                <div className='prw-buttons'>
                    <button className='btn prw-rating'><img className='prw-icon' src={star} alt='rating icon'/>product rate</button>
                    <button className='btn prw-cart'>ADD TO FAV</button>
                    <button onClick={() => dispatchId({type : 'add', payload : {id : prevData.id}})} className='btn prw-bundler'>ADD TO BUNDLE</button>
                </div>
            </div>
            <div className='prw-details'>
                <p className='prw-title'>{prevData.title}</p>
                <p>{prevData.description}</p>
            </div>
            </>}
        </div>
    )
}

export default Preview;