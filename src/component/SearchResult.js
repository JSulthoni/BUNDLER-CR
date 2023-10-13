import React from 'react'
import { SearcResultList } from './SearchResultList'


export const SearchResult = function({result}) {
    return (
        <div className='search-res'>
            {
                result.map((result, id) => {
                    return <SearcResultList 
                        result = {result}
                        key={id}
                    />
                })
            }
        </div>
    )
}
