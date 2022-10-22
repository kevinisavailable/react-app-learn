import React,{useState} from "react";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./pages/Navbar";
function App() {

  const [userName, setuserName] = useState("Kevin")
  return (
    <div className="App">
      <Router>
        < Navbar />
        <Routes>
          <Route path="/" element={<Home userName={userName}/>} />
          <Route path="/menu" element={<Menu userName={userName} setuserName={setuserName} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={< Error />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
