import { useCatFact } from "./useCatFact"
export const CatFact = ()=>{
    const {data,isCatLoading,refetchData} = useCatFact()

    if(isCatLoading){
        return(
            <h1>Loading...</h1>
        )
    }
    return(
        <div>
            <button onClick={refetchData}>Refetch</button>
            <p>{data?.fact}</p>
        </div>
    )
}