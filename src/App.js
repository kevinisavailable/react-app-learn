import React from "react";
import ToggleComponent from "./example1"
import Lesstext from './example2'

function App() {
  return (
    <div>
      <ToggleComponent />
      <Lesstext text={`Focused, hard work is the real key
      to success. Keep your eyes on the goal, 
      and just keep taking the next step 
      towards completing it.`}
      maxLength={35} />

     </div>
  );

}

export default App;
