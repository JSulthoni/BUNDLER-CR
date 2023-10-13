import React, {useState, useEffect} from 'react'
import { Card } from './Card'

export const Main = function() {


    // Fetch data
    const [carousel, setCarousel] = useState([])
    useEffect( () => {
        async function getData() {
            const database = await fetch('https://fakestoreapi.com/products')
            const data = await database.json()
            setCarousel(data)
        }
        getData()
        return () => {}
    }, [0] )


    // Filter function
    const filterAndMapByCategory = function(arr, ...filters) {
        return arr
        .filter(c => filters
            .some(filter => c.category.toLowerCase()
            .includes(filter.toLowerCase())))
        .map(c => (
            <Card key= {c.id} card={c} />
        ))
    }

    // Display featured data
    const featuredCard = carousel
    .map(c => {
        return <Card 
            key = {c.id}
            card = {c}
        />
    })

    // Display fashion
    const fashionCard = filterAndMapByCategory(carousel, 'cloth')

    // Display fashion
    const electronicCard = filterAndMapByCategory(carousel, 'electronic')
    

    return (
        <div className='main'>
            <div className='main-sub'>
                <h1 className='main-subt'>Featured Items</h1>
                <div className='carousel'>
                {featuredCard}
                </div>
            </div>
            <div className='main-sub'>
                <h1 className='main-subt'>Fashion</h1>
                <div className='carousel'>
                    {fashionCard}
                </div>
            </div>
            <div className='main-sub'>
                <h1 className='main-subt'>Electronics</h1>
                <div className='carousel'>
                {electronicCard}
                </div>
            </div>
        </div>
    )
}