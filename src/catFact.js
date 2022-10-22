import { useQuery } from "@tanstack/react-query"
import Axios from 'axios'
export const CatFact = ()=>{
    const {data:catData,isLoading} = useQuery(['cat'],()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
    })
    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }
    return(
        <div>
            <p>{catData?.fact}</p>
        </div>
    )
}