import react from "react";
import { useState, useEffect } from "react";

export const Profile = () => {
    const [currentUser, changecurrentUser] = useState(localStorage.getItem("graphicsbaytracker_customer"))
    const [currentUsertrackedcards, setcurrentUsertrackedcards] = useState(localStorage.getItem("graphicsbaytracker_customer"))

    useEffect(
        () => {
            fetch("http://localhost:8088/trackedCards?_expand=cardDataId")
                .then(res => res.json())
                .then(setcurrentUsertrackedcards)
        },[])

        return(

            <h2>My Tracked Cards</h2>
        )
}