import { ChangeProfile } from "./ChangeProfile"
const Menu = (props)=>{
    return(
        <div>
            <h1>Menu</h1>
            <p>Username is {props.userName}</p>
            <ChangeProfile setuserName={props.setuserName} />
        </div>
    )
    }
export default Menu