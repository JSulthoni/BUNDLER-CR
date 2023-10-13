import React, {useState, useEffect} from 'react'


export const SearchBar = function ({setResult}) {

    // Initial State
    const [input, setInput] = useState('')

    // Fetching Data
    const getData = function(value) {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
            const result = json.filter((product) => {
                return value && product && product.title && product.title.toLowerCase().includes(value)
            })
            setResult(result)
        }) 
    }

    // Event Handler
    const handleClick = function(value) {
        setInput(value)
        getData(value)
    }

    // Return
    return (
        <div className='search-bar'>
            <input 
            type='text' 
            placeholder='find product/bundle' 
            value={input}
            onChange={e => handleClick(e.target.value)}></input>
            </div>
    )   
}