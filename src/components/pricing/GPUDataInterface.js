import { React } from "react"
import { useState, useEffect, } from "react"
import { Link } from "react-router-dom"
export const GPUDataInterface = () => {
    const [gpucarddata, fetchgpucarddata] = useState([])
    const [addedtrackedcards, addtotrackedcards] = useState(0)
    const [currentUser, setcurrentuser] = useState(parseInt(localStorage.getItem("graphicsbaytracker_customer")))
    

    // const [selectedOEM, setselectedOEM]= useState("")
    useEffect(
        () => {
            fetch("http://localhost:8088/cardData")
                .then(res => res.json())
                .then((data) => {
                    fetchgpucarddata(data)
                })
        },
        []
    )
   
{/* unfinished feature, will implement in production version*/}
    // const selectOEM = (event) => {
    //     if (event.target.value === "1") {
    //         return (fetchgpucarddata(gpucarddata.filter((gpudataobj) => gpudataobj.oem === "AMD")))
    //     } else if (event.target.value === "2") {
    //         return (fetchgpucarddata(gpucarddata.filter((gpudataobj) => gpudataobj.oem === "NVIDIA")))
    //     }
    // }

    
    const saveTrackedCards = (gpudataobj) => {
        

       const trackedCardOBJ = {
                userId: currentUser,
                cardDataId: gpudataobj.id
        }
        const postfetchfortrackedcards = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trackedCardOBJ),
        }
        return fetch("http://localhost:8088/trackedCards", postfetchfortrackedcards)
    }

    
    return(
        <>
        <h1>Graphics Card Prices</h1>
                <>
            {/* unfinished feature, will implement in production version*/}
              {/* <div>
              <form>
                    <b> Filter by OEM</b>
                <select defaultValue= "Select an OEM"

                onChange={(event) => selectOEM(event)} >
                <option value="1">AMD</option>
                <option value="2">NVIDIA</option>
                </select>
                </form>
              </div> */}

                </>
             <table>
            <tr> 
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
            </tr>
        < tr > 
        
        
            {
                gpucarddata.map(
                    gpudataobj => {

                        return ( <>
                            <p key = {
                                `gpudataobj--${gpudataobj.id}`
                            } > {
                                gpudataobj.oem
                            } {
                                gpudataobj.brand
                            } {
                                gpudataobj.model
                            } {
                                gpudataobj.price.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                })
                            } </p>   {
                                 <button onClick={() => saveTrackedCards(gpudataobj) }>Add to Tracked Cards</button>
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







