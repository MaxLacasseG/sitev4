import React, { Component } from "react";
import { Link } from "react-router-dom";
import AnimatedBg from "./home/AnimatedBg";
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <AnimatedBg />
                <div className="logo-container">
                    <img src="/img/logoNomCoul@3x.png" alt="logo" className="logo pt-5" />
                    <ul className="nav pt-5">
                        <li className="nav-item">
                            <Link to="/web">Web</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/jeux-video">Jeux vidéo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/creations">Autres créations</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bio">Me joindre</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
