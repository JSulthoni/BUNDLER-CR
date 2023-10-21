import React from 'react'


export const SearchResult = function({result, dispatch}) {
    return (
        <div className='flexcol src-res'>
            {
                result.map((result) => {
                    return <span 
                        key={result.id}
                        className="src-res-list"
                        onClick={()=>dispatch({type:'getid', payload:{id:result.id}})}
                        >{result.title}</span>
                })
            }
        </div>
    )
}
