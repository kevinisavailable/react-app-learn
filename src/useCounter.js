import { useState } from "react"
export const UseCounter=()=>{
    const [state, setState] = useState(0)

    const Addcounter=()=>{setState(state+1)}
    const Subtractcounter=()=>{setState(state-1)}
    const Resetcounter=()=>{setState(0)}

    return{Addcounter,Subtractcounter ,Resetcounter , state ,setState}

}   