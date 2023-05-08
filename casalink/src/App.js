import React from "react"
import {Routes, Route} from "react-router-dom"
//components
import Header from "./components/Header"
import Footer from "./components/Footer"
//pages
import Home from "./pages/Home"
import PropertyDetails from "./pages/PropertyDetails"

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-zinc-800 text-zinc-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/property/:id" element={<PropertyDetails />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;