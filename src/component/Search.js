import React, {useState} from 'react'
import carticon from '../image/carticon.svg'

import { SearchBar } from './SearchBar'
import { SearchResult } from './SearchResult'


const Search = ({dispatch}) => {
    const [search, setSearch] = useState([])
    return (
        <div className='src'>
        <h2 className='src-t'>BUNDLER</h2>
            <div className='flexrow src-cont'>
                <SearchBar 
                    setSearch={setSearch} />
                <img className='src-cart clickable' src={carticon} alt='shopcart' aria-label='gotoshopcart'/>
            </div>
                {search.length > 0 && <SearchResult result={search} dispatch={dispatch}/>}
        </div>
    )}

export default Search;