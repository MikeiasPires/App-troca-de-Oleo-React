import React from "react"
import { Routes,Route } from "react-router-dom"
import Home from "../Home/Home"
import Pagetwo from "../Page 2/Pagetwo"
import './index.css'



export default function Main() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Page" element= {<Pagetwo/>} />
    </Routes>
 )
}


