import React from "react"
import {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"

export const Logout = () => {
    const [loggedincustomer, setloggedincustomer] = useState(localStorage.graphicsbaytracker_customer)
    return (
        <>
        <div>
        <button onClick={() => setloggedincustomer(localStorage.removeItem("graphicsbaytracker_customer"))}>Log Out</button>
        </div>
        </>
    ) 
    
    
}