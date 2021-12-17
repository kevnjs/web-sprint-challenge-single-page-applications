import React from "react";
import '../styles/ImageMain.css'
import { Link, useHistory } from "react-router-dom";


export default function HomePage () {
    const history = useHistory();


    const routeToForm = () => {
        history.push('/pizza');
      }
    return (

        <div className="mainImg">
            <div className="img" id="image1"></div>
            <div className="img" id="image2">
                <h2>Your favorite food, delivered while coding</h2>
                <button onClick={routeToForm} id="order-pizza"><Link to="/pizza">Pizza?</Link></button>
            </div>
            <div className="img" id="image3"></div>
        </div>
    )
}