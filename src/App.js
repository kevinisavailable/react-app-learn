//This example shows how to pass props to components
import Contact from "./example1";
import Name from "./example2";


const id = {name:"hello",id:1} 
const im = {name:"hi",id:2}
function App() {
  return (
    <div className="App">
      {/* <Contact name ="Student"/>
      <Contact name = "Teacher"/>  */}
      <Name name={id} st={{color:"green",padding:"10px" }} />
      <Name name={im} st={{color:"red",padding:"50px" }} />

    </div>
  )
}

export default App;
