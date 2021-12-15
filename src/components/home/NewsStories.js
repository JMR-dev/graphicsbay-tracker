import {
    useEffect,
    useState
} from "react"
export const NewsStories = () => {
    const [newsstories, setNewsStories] = useState([])


     
        useEffect(
            () => {
                fetch("http://localhost:8088/newsstories")
                    .then(res => res.json())
                    .then((data) => {
                        setNewsStories(data)
                    })
            },
            []
        )
    
        
    return ( <>
        <div>{newsstories.map( 
            (newsOBJ) => {
                 return <div><p key={`newsOBJ--${newsOBJ.id}`}>{newsOBJ.storyText} </p>
                    <a href={newsOBJ.link} >{newsOBJ.link}</a>
                 </div>
            }
        )}
            </div>
        </>
        
    )
}