import React from "react"
import { Link } from "react-router-dom"
import {Route} from "react-router-dom/cjs/react-router-dom.min"
import {useState,useEffect } from "react"
import {NewsStories} from "./NewsStories"
import { GPUDataInterface } from "../pricing/GPUDataInterface"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


export const GraphicsBayTrackerHome = () => {
    const [keyprices, fetchkeyprices] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/cardData")
                .then(res => res.json())
                .then(fetchkeyprices)
        },[])
                            
     
    
    return ( <>

          <div> 
            <button onClick={() => history.push("/pricing/GPUDataInterface")}>Graphics Card Pricing Tool</button>
            {NewsStories()} 
        </div>  
        <aside>
        <p>Key Prices</p>  
        <div>

        {
            keyprices.map(
                cardDataObject => {
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