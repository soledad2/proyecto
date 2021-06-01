import React from "react"
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { render } from "react-dom"
import { Router, Link } from "@reach/router"
import Map from '../components/MapView';

const buscar = [
    {
    title: "¿Sabes quienes son tus candidatos?" 
    },
]

function Home () {
    return (
    <div id="Home" className="container-fluid">
        <Navbar />
        <Router>
        <Card path="/"/>
        <Map path="/map" />
        </Router>
    </div>
    );
}


export default Home;
