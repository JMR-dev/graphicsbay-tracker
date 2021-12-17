import react from "react";
import { useState, useEffect } from "react";

export const Profile = () => {
    const [Users, fetchUsers] = useState([])
    const [currentuser, setcurrentuser] = useState(localStorage.getItem("graphicsbaytracker_customer"))
    const [currentUsertrackedcards, setcurrentUsertrackedcards] = useState([]))

    useEffect(
        () => {
            fetch("http://localhost:8088/trackedCards?_expand=cardDataId")
                .then(res => res.json())
                .then(setcurrentUsertrackedcards)
        },[])
        useEffect(
            () => {
                fetch("http://localhost:8088/users")
                    .then(res => res.json())
                    .then(fetchUsers)
            },[])
        return(
          <>
          {/* why is this returning duplicate elements?*/}
        <p>returning something. This is a test</p>
          </>  
        )
}