import React from "react"
import {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { props } from "react"

export const Logout = (props) => {
     const [loggedIn, setLoggedIn] = useState(true)

 

    useEffect(() => {
      if (localStorage.getItem("graphicsbaytracker_customer") !== "1") {
          setLoggedIn(true)
          }
    }, []);
  
  const logOutCustomer = () => {
        localStorage.removeItem("graphicsbaytracker_customer");
        setLoggedIn(false)
  
    
  }

    
}