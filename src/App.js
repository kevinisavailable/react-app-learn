//This example shows how to pass props to components
import Contact from "./example1";

function App() {
  return (
    <div className="App">
      <Contact name ="Student"/>
      <Contact name = "Teacher"/> 
    </div>
  );
}

export default App;
