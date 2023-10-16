import React from "react";


export const SearcResultList = function({result}) {
    return (
        <div 
        className="src-res-list"
        onClick={
            (e) => alert(`You clicked on ${result.title}`)
        }
        >{result.title}</div>
    )
}