import React from "react"
import {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"

export const Logout = () => {
    const [loggedincustomer, setloggedincustomer] = useState(localStorage.getItem("graphicsbaytracker_customer"))

    const setItemFromLocalStorage = () => {
         setloggedincustomer()
    }
    return (
        <>
        <div>
        <button onClick={() => setItemFromLocalStorage(localStorage.removeItem("graphicsbaytracker_customer"))}>Log Out</button>
        </div>
        </>
    ) 
    
    
}