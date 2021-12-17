import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import '../styles/Header.css';

export default function Header () {
    return (
        <>
            <Router>
                <div className="header">
                    <h1>Bloom Eats</h1>
                    <nav>
                        <div className="navBtn">
                            <Link to="/">Home</Link>
                            
                            
                        </div>
                        <div className="navBtn">
                            <Link to="/help">Help</Link>
                        </div>
                    </nav>
                </div>
            </Router>
        </>
    )
}