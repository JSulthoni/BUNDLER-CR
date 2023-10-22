import React, {useRef, useState} from 'react'
import useClickOutside from './customHook/useClickOutside'
import carticon from '../image/carticon.svg'

import { SearchBar } from './SearchBar'
import { SearchResult } from './SearchResult'


const Search = ({dispatch}) => {
    const [search, setSearch] = useState([])
 
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    useClickOutside(ref, ()=> setOpen(false))
    // className={`log-panel ${open ? 'active' : 'inactive'}`}

    return (
        <div className='src'>
        <h2 className='src-t'>BUNDLER</h2>
            <div className='flexrow src-cont'>
                <SearchBar 
                    ref={ref}
                    setSearch={setSearch} />
                <img className='src-cart clickable' src={carticon} alt='shopcart' aria-label='gotoshopcart'/>
            </div>
                {search.length > 0 && <SearchResult result={search} dispatch={dispatch}/>}
        </div>
    )}

export default Search;