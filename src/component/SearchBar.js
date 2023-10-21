import React, {useState} from 'react'


export const SearchBar = ({setSearch}) => {

    // Initial State
    const [input, setInput] = useState('')

    // Fetching Data
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

    // Event Handler
    const handleClick = (value) => {
        setInput(value)
        getData(value)
    }

    // Return
    return (
        <div className='src-bar'>
            <input 
            type='text' 
            placeholder='find product/bundle' 
            value={input}
            onChange={e => handleClick(e.target.value)}></input>
            </div>
    )   
}