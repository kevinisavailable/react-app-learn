import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../App"

export const ChangeProfile =()=>{
    const {setuserName} = useContext(AppContext)
    const [newUsername , setnewUsername] = useState("")
    return(
        <div>
            <input onChange={(event)=>{setnewUsername(event.target.value)}} />
            <button onClick={()=>{setuserName(newUsername)}}>Change UserName</button>
        </div>
    )
}