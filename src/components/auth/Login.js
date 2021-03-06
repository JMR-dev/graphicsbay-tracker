import React, { useCallback, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("")
    const existDialog = useRef()
    const history = useHistory()
 
    
    


    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then (exists => {
                if (exists) {
                    localStorage.setItem("graphicsbaytracker_customer", exists.id)
                    history.push("")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

const skipLogin = () => {
    const setLocalStorageUser = () => localStorage.setItem("graphicsbaytracker_customer", 1)
    const skipToHome = () => history.replace('./GraphicsBayTrackerHome')
    return (setLocalStorageUser(), skipToHome())
}

const redirectToRegister = () => {
    history.replace("./Register")
}

    return (
        <>
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>GraphicsBay Tracker</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
                <button onClick={ redirectToRegister}>Not a member yet?</button>
           </main>
        </>
    )
}

