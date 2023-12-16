import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    )
}