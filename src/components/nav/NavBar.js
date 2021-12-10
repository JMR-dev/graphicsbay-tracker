import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Login } from "../auth/Login"
import { Logout } from "../auth/Logout"
import "./NavBar.css"



export const NavBar = () => {
    const history = useHistory()

    

    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top onTop">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNavDropdown" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/PricingData">Pricing Data<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Profile">My Profile and Tracked Cards<span className="sr-only"></span></Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {
                            localStorage.graphicsbaytracker_customer >= 1 ? <Link className="nav-Link" to="/Logout">Logout</Link> :  <Link className="nav-link" to="/Login">Login</Link>
                               
                                   
                            }
                        </li>
                        <li className="nav-item">
                            {
                            
                                 
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
