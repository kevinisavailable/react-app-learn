import  axios from "axios"
import React,{useState,useEffect} from "react"


function PredictAge(){
    const [name,setName] = useState("")
    const [predictedage , setPredictedage] = useState(null)
    const fetchAge =()=> {
        axios.get(`https://api.agify.io?name=${name}`).then((res)=>{
            setPredictedage(res.data)
        })
    }

    return (
        <div>
            <h1>Age Predictor</h1>
            <input placeholder="Enter the Name"  onChange={(event)=>{setName(event.target.value)}}/>
            <button onClick={fetchAge}>Start Prediction</button>
            <p>Predicted Age is {predictedage?.age}</p>
        </div>
    )
}

export default PredictAge