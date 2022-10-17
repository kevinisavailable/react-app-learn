//Increments and displays the value 
import {useState}  from 'react'

function StepTracker (){
    const [steps , setSteps] = useState(0)
    
    function updateSteps(){
    setSteps(steps +1)
}
    return (
        <div>
            <h1>I walked {steps} today.</h1>  
            <button onClick={updateSteps}>Update Steps</button>
        </div>
    )
}
export default StepTracker
