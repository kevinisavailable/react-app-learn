import { useToggle } from "./useToggle"
export const Toggle= ()=>{  
    const [isvisible , toggle] = useToggle()
        return(
            <div>
                <button onClick={toggle}>
                    {isvisible? "Show":"Hide" }
                </button>
                <h1>
                {isvisible && <h1>HiddenText</h1>}
                </h1>
            </div>
        )
}