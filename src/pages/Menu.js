import { ChangeProfile } from "./ChangeProfile"
import { useContext } from "react"
import { AppContext } from "../App"

const Menu = ()=>{
    const {userName} = useContext(AppContext)
    return(
        <div>
            <h1>Menu</h1>
            <p>Username is {userName}</p>
            <ChangeProfile />
        </div>
    )
    }
export default Menu