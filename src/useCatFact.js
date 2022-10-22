import { useQuery } from "@tanstack/react-query"
import Axios from 'axios'

export const useCatFact=() =>{
    const {data, isLoading:isCatLoading ,refetch} = useQuery(['cat'],()=>{
    return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
    })

    const refetchData = ()=>{
        window.alert("Data Refetched")
        refetch()
    }
    return{data,isCatLoading,refetchData}

}