import React,{useState , useEffect} from "react";
import axios from "axios";



function Catfact(){
    const [catFact,setCatFact]=useState("")

    const fetchCatFact = ()=>{
    axios.get("https://catfact.ninja/fact")
    .then((res)=>{
        (setCatFact(res.data.fact))
    })}

    useEffect(()=>{

        fetchCatFact()
    },[])
  
   
    return(
        <div>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
        </div>
    )
}

export default Catfact 