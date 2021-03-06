import { React } from "react"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProfileForm } from "./ProfileForm";

export const Profile = () => {
    const [Users, fetchUsers] = useState([])
    const [currentuser, setcurrentuser] = useState(localStorage.getItem("graphicsbaytracker_customer"))
    const [currentUsertrackedcards, setcurrentUsertrackedcards] = useState([])
    const history = useHistory()


    useEffect(
        () => {
            fetch("http://localhost:8088/trackedCards?_expand=cardData")
                .then(res => res.json())
                .then(setcurrentUsertrackedcards)
        }, [])
        useEffect(
            () => {
                fetch("http://localhost:8088/users")
                    .then(res => res.json())
                    .then(fetchUsers)
            }, [])

            // useEffect =  (
            //     () = {

            //     }, [currentUsertrackedcards]
            //     )
const showprofileinfo = () => {
  const founduser =  Users.find((user) => user.id === parseInt(currentuser)) 
        
  return (<p>{founduser?.name} <br/> {founduser?.email}</p>)
}


    

    const removetrackedcard = (gpudataobj) => {

    
        const deletefetchfortrackedcards = {
                method: "DELETE",
                
        }   
                return fetch(`http://localhost:8088/trackedCards/${gpudataobj.id}`, deletefetchfortrackedcards)
                .then(() => {
                    fetch("http://localhost:8088/trackedCards?_expand=cardData")
                        .then(res => res.json())
                        .then(setcurrentUsertrackedcards)
                })
        }   
        return(
          <>
          
        <h2>My Tracked Cards</h2>
        <p>{showprofileinfo()}</p>
        <button onClick={ () => { history.push("/profile/ProfileForm")
        }
    }>Edit Profile Info </button>
        <table>
            <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
            </tr>
        < tr >


            {
                currentUsertrackedcards.map(
                    gpudataobj => {

                        return ( <>
                              {
                                gpudataobj.cardData.oem
                            } {
                                gpudataobj.cardData.brand
                            } {
                                gpudataobj.cardData.model
                            } {
                                gpudataobj.cardData.price.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                })
                            }   {
                                 <button onClick={ () => removetrackedcard(gpudataobj)} >Remove from Tracked Cards</button>
                                }
                                </>
                                )

                            }  )
                        }
          
</tr>
                    </table>
          </>  
        )
}