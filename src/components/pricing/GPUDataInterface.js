import { React } from "react"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
export const GPUDataInterface = () => {
    const [gpucarddata, fetchgpucarddata] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/cardData")
                .then(res => res.json())
                .then((data) => {
                    fetchgpucarddata(data)
                })
        },
        []
    )
    return (
        <>
        <h1>GPUDataInterface</h1>
        
        <table>
            <tr> 
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
            </tr>
        <tr>{gpucarddata.map(gpudataobj => {return ( <p key ={`gpucardobj--${gpudataobj.id}`}> {gpudataobj.brand} {gpudataobj.model} {gpudataobj.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>)})}
        </tr>
        </table>
          
        </>
    )}