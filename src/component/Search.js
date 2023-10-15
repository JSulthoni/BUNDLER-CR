import React, {useState} from 'react'
import carticon from '../image/carticon.svg'

import { SearchBar } from './SearchBar'
import { SearchResult } from './SearchResult'


export const Search = function() {

    // Initial State
    const [search, setSearch] = useState([])
    return (
        <div className='search'>
            <h1 className='search-t'>BUNDLER</h1>
            <div className='search-cont'>
                <SearchBar 
                    setSearch={setSearch} />
                <img className='search-cart' src={carticon} alt='shopcart' aria-label='gotoshopcart'/>
            </div>
                {search.length > 0 && <SearchResult result={search} />}
        </div>
    )
}