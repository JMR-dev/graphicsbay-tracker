import React from "react"
import { Link } from "react-router-dom"
import {
    Route
} from "react-router-dom/cjs/react-router-dom.min"
import {
    useState,
    useEffect
} from "react"
import {
    NewsStories
} from "./NewsStories"


export const GraphicsBayTrackerHome = () => {
    const [keyprices, fetchkeyprices] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/cardData")
                .then(res => res.json())
                .then(fetchkeyprices)
        },[])
                            
     
    
    return ( <>

        <h1><Link to="/GraphicsBayTrackerHome">GraphicsBay Tracker</Link></h1>  <div> 
            <button><Link to="/GPUDataInterface">Graphics Card Pricing Tool</Link></button>
            {NewsStories()} 
        </div>  
        <aside>
        <p>Key Prices</p>  
        <div>

        {
            keyprices.map(
                (cardDataObject) => {
                    if (cardDataObject.keyPrice === true)
                    return( 
                    <div> 
                        <p key = {`cardDataObject--${cardDataObject.id}`} > {cardDataObject.oem} {cardDataObject.brand} {cardDataObject.model} </p> 
                        <p key = {`cardDataObject--${cardDataObject.id}`}> Card Price - {cardDataObject.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} </p> 
                        </div>)
                }
                )
        }
        </div>
</aside>
</>

    )
}