import React, {useRef, useState} from 'react'


export const SearchBar = ({ref, setSearch}) => {
    const [input, setInput] = useState('')
    
    const getData = (value) => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
            const result = json.filter((product) => {
                return value && product && product.title && product.title.toLowerCase().includes(value)
            })
            setSearch(result)
        }) 
    }

    const handleClick = (value) => {
        setInput(value)
        getData(value)
    }

    return (
        <div className='src-bar'>
            <input 
            ref={() => useRef}
            type='text' 
            placeholder='find product/bundle' 
            value={input}
            onChange={e => handleClick(e.target.value)}></input>
            </div>
    )   
}