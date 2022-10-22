
import { UseCounter } from "./useCounter"
export const Counter =()=>{
    const {state:counterid ,Addcounter,Subtractcounter,Resetcounter} =UseCounter()
    return(
        <div style={{margin:"200px",display:"flex",flexDirection:"column",padding:"10px",width:"200px",marginLeft:"auto",marginRight:"auto",justifyContent:"center",textAlign:"center"}}>
            <button onClick={Addcounter}>Add</button>
            <button onClick={Subtractcounter}>Substract</button>
            <button onClick={Resetcounter}>Reset</button>
            <p>{counterid}</p>
        </div>
    )
}