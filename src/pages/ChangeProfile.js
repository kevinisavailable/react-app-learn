import { useState } from "react"

export const ChangeProfile =(props)=>{
    const [newUsername , setnewUsername] = useState("")
    return(
        <div>
            <input onChange={(event)=>{setnewUsername(event.target.value)}} />
            <button onClick={()=>{props.setuserName(newUsername)}}>Change UserName</button>
        </div>
    )
}