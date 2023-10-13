import React, {useState} from 'react'
import carticon from '../image/carticon.svg'

import { SearchBar } from './SearchBar'
import { SearchResult } from './SearchResult'


export const Search = function() {

    // Initial State
    const [result, setResult] = useState([])

    return (
        <div className='search'>
            <h1 className='search-t'>BUNDLER</h1>
            <div className='search-cont'>
                <SearchBar setResult={setResult} />
                <img className='search-cart' src={carticon} alt='shopcart' aria-label='gotoshopcart'/>
            </div>
                {result.length > 0 && <SearchResult result={result} />}
        </div>
    )
}