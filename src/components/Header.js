import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import '../styles/Header.css';
export default function Header () {
    return (
        <>
            <Router>
                <div className="header">
                    <h1>Bloom Eats</h1>
                    <nav>
                        <Link className="navBtn" to="/" >Home</Link>
                        <Link className="navBtn" to="/help" >Help</Link>  
                    </nav>
                </div>
            </Router>
        </>
    )
}