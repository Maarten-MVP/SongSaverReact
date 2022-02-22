import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="nav">
            <h1>Maarten's Songsaver</h1>
            <nav className="navbar">
                <Link to="/" >Song Saver Tool</Link>
                <Link to="/about" >About</Link>
            </nav>
        </div>
    )
}

export default Navbar