import React from "react";
import { CatFact } from "./catFact";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
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
      </QueryClientProvider>
   
     </div>
  );

}

export default App;




