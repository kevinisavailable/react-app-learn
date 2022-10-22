import React from "react";
import { CatFact } from "./catFact";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import { Form } from "./Form";
function App() {
const client = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }
})
  return (
    <div>
      <QueryClientProvider client={client}>
      <CatFact />
      {/* <Form /> */}

      </QueryClientProvider>
   
     </div>
  );

}

export default App;




