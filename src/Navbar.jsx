import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
        </div>
    )
}