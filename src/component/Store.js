import React, {useState, useEffect} from 'react'
import { Card } from './Card'

// Main
const Store = ({dispatch}) => {
    // Fetch data
    const [mainData, setMainData] = useState([])
    useEffect( () => {
        async function getData() {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setMainData(data) }
            getData()
            return () => {}
        }, [] )

    // Display featured data
    const featuredCard = 
        mainData
        .map(c => {
            return <Card 
                key = {c.id}
                card = {c}
                dispatch = {dispatch}
                />})


    // Render
    return (
        <div className='str'>
            {/* <p className='str-subt'>Featured Items</p> */}
            <div className='carousel'>
            {featuredCard}
            </div>
        </div>
    )
}

export default Store;

// const FashionSub = function() {
//     // Fetch data
//     const [mainData, setMainData] = useState([])
//     useEffect( () => {
//         async function getData() {
//             const res = await fetch('https://fakestoreapi.com/products')
//             const data = await res.json()
//             setMainData(data) }
//             getData()
//             return () => {}
//         }, [0] )
//     // Display card preview
//     const [data, setdata] = useState({})
//     const [previewVis, setPreviewVis] = useState(false)
//     const handleCardClick = (c) => {
//         setdata(c);
//         setPreviewVis(true)
//     }
//     const handleCloseButton = () => {
//         setPreviewVis(prev => !prev)
//     }
//     // Filter function
//     const filterAndMapByCategory = function(arr, ...filters) {
//         return arr
//         .filter(c => filters
//             .some(filter => c.category.toLowerCase()
//             .includes(filter.toLowerCase())))
//         .map(c => (
//             <Card 
//             key= {c.id} 
//             card={c}
//             onClick={() => handleCardClick(c)}/>
//         ))}
//     // Display fashion
//     const fashionCard = filterAndMapByCategory(mainData, 'cloth')    

//     return (
//         <div className='main-sub'>
//             {previewVis && 
//             (<Preview 
//                 key={data.id} 
//                 id={data.id} 
//                 data={data} 
//                 onClose={handleCloseButton}
//             />)}
//             <h1 className='main-subt'>Fashion Items</h1>
//             <div className='carousel'>
//             {fashionCard}
//             </div>
//         </div>
//     )
// }
