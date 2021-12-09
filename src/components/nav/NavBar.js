import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
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
                            <Link className="nav-link" to="/">Pricing Data<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/locations">My Profile and Tracked Cards</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            {
                                // isAuthenticated()
                                   
                            }
                        </li>
                        <li className="nav-item">
                            {
                                // !isAuthenticated()
                                   // <Link className="nav-link" to="/register">Register</Link>
                                 
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
