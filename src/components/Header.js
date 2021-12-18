import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';
export default function Header () {
    return (
        <>
                <div className="header">
                    <h1>Bloom Eats</h1>
                    <nav>
                        <Link className="navBtn" to="/">Home</Link>
                        <Link className="navBtn" to="/help">Help</Link>  
                    </nav>
                </div>
        </>
    )
}