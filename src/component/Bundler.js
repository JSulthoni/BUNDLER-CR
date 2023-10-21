import React, {useEffect, useState} from 'react'
import cross from '../image/cross-circle.svg'


const BundleItem = ({e, dispatch, dispatchId}) => {

    function clearItem() {
        dispatchId({type : 'remove', payload: {id: e.id}})
    }
    
    return (
        <div className='clickable' onClick={() => dispatch({type: 'getid', payload: {id : e.id}})}>
            <img onClick={clearItem} 
                className='x-button clickable' 
                src={cross} 
                alt='crossbutton' 
                aria-label='removeitem'/>
            <p className='bdl-item'>{e.title}</p>
        </div>
    )
}

const Bundler = ({arrayId, dispatch, dispatchId}) => {
    const [bundleList, setBundleList] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                const filteredProduct = json.filter(j => arrayId.includes(j.id))
                setBundleList(filteredProduct)
            })
    }, [arrayId, dispatchId])

    function handleClear() {
        dispatchId({type:'clearlist'})
        setBundleList([])
    }

    return (
        <div className='flexcol bdl'>
            <p className='bdl-t'>IN YOUR BUNDLER :</p>
            <div className='bdl-cont'>
                {bundleList.map(e => <BundleItem key={e.id} e={e} dispatch={dispatch} dispatchId={dispatchId}/>)}
            </div>
            <button className='btn' type='button'>CHECK OUT</button>
            <span className='clickable' onClick={handleClear}>clear bundle</span>
        </div>
    )
}

export default Bundler;