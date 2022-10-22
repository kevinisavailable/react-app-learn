import { useContext } from "react"
import { AppContext } from "../App"

const Home = (props)=>{
    const {userName} = useContext(AppContext)
return(

    <div>
        <h1>HomePage</h1>
        <p>Username is {userName}</p>
    </div>
)
}

export default Home