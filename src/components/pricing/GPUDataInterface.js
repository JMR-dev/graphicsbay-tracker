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
        <div>
        <table>

        </table>
    </div>
        </>
    )}