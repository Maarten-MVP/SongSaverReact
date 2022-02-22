import React from "react"
import Navbar from "./components/Navbar"
import Songlist from "./components/Songlist"

import { BrowserRouter as Router, Route, Routes, Link, Redirect} from "react-router-dom"

import MainPage from "./pages/MainPage"
import AboutPage from "./pages/About"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App;