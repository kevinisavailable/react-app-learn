import React,{createContext, useState} from "react";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./pages/Navbar";
export const AppContext = createContext()
function App() {
  
  const [userName, setuserName] = useState("Kevin")
  return (
    
    <div className="App">
      <AppContext.Provider value={{userName, setuserName}}>
      <Router>
        < Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={< Error />} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App;
