import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export const ProfileForm = () => {
   const[usertoedit, setediteduser ] = useState(localStorage.getItem("graphicsbaytracker_customer"))
   const [userpool, setuserpool] = useState([])
   const [ founduser, setfounduser] = useState({})
   const [ editedusername, seteditedusername ] = useState("")
   const [ editeduseremail, setediteduseremail ] = useState("")
   const history = useHistory()


    const editprofileinfocall = () => {
        fetch(`https://localhost:8088/users/${founduser.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    name: editedusername,
                    email: editeduseremail,
                    
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response => {
                            return response.json()
            }).then(json => {
                console.log(json)
                this.setState({
                    user:json
                });
            }).then(() => history.push("profile/Profile"))
        
    }
    useEffect(
        () => {
           const desireduser = userpool.find((userobj) => userobj.id === parseInt(usertoedit))
            return setfounduser(desireduser)
        }, )
    useEffect(
        () => {
            fetch("http://localhost:8088/users")
                .then(res => res.json())
                .then(setuserpool)
        }, [])
    return (
        <>
    <h2>Edit Profile Data</h2>
        <form id="edituserform">
  <label for="fandlname">First and Last Name</label><br/>
  <input type="text" id="fndlname" name="fandlname"  onChange={(e) => {seteditedusername(e.target.editedusername)}}/><br/>
  <label for="email">Email</label><br/>
  <input type="text" id="email" name="email" onChange={(e) => { setediteduseremail(e.target.editeduseremail)}}/>
  <button type="button" id="submitbutton" name="submitbutton" form="edituserform" onClick={()=> editprofileinfocall()}>Submit</button>

    </form>
        </>
    )
}

