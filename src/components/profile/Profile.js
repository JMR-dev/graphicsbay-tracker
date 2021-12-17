import { React } from "react"
import { useState, useEffect } from "react";

export const Profile = () => {
    const [Users, fetchUsers] = useState([])
    const [currentuser, setcurrentuser] = useState(localStorage.getItem("graphicsbaytracker_customer"))
    const [currentUsertrackedcards, setcurrentUsertrackedcards] = useState([])

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
// const showprofileinfo = () => {
//     Users.filter((user) => {
//         if (user.id === currentuser)
//     }




    

    const removetrackedcard = (gpudataobj) => {

                const trackedcardtodeleteobj = {
                id: gpudataobj.id,
                userId: gpudataobj.userId,
                cardDataId: gpudataobj.txt
                }
        const deletefetchfortrackedcards = {
                method: "DELETE",
                headers: {
                        "Content-Type": "application/json",
        },
        body: JSON.stringify(trackedcardtodeleteobj),
        }
        
                return fetch("http://localhost:8088/trackedCards", deletefetchfortrackedcards)
        }   
        return(
          <>
          {/* why is my code returning duplicate elements?*/}
        <h2>My Tracked Cards</h2>
        <p> {} </p>
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