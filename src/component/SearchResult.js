import React from 'react'
import { SearcResultList } from './SearchResultList'


export const SearchResult = function({result}) {
    return (
        <div className='flexcol src-res'>
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
