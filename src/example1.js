// This example uses useState to update the value of button when ever the button is clicked


import React, { useState } from "react";
const ToggleComponent = () => {

  const [button, setButton] = useState(false);

  const toggle = () =>{
    setButton(!button)
  }
  return (
    <div>
      <button onClick={() => toggle()}>Click</button>
      {button && <h1>Hello</h1>}
     </div>
  );
};
export default ToggleComponent;