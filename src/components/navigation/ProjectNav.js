import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class componentName extends Component {
    ShowLinks = () => {
        const links = document.querySelectorAll(".link");
        for (let link of links) {
            link.style.display = "flex";
        }
    };

    HideLinks = () => {
        const links = document.querySelectorAll(".link");
        for (let link of links) {
            link.style.display = "none";
        }
    };
    render() {
        return (
            <nav className="project-nav">
                <div className="nav-logo-container" onMouseEnter={this.ShowLinks} onMouseLeave={this.HideLinks}>
                    <img className="nav-logo" src="/img/logoSeulRouge@3x.png" alt="Logo" />
                </div>
                <div id="link-container" onMouseEnter={this.ShowLinks} onMouseLeave={this.HideLinks} className="link-container">
                    <Link className="link" to="/">
                        Back
                    </Link>
                    <Link className="link" to="/">
                        Projet 1
                    </Link>
                    <Link className="link" to="/">
                        Projet 2
                    </Link>
                </div>
            </nav>
        );
    }
}
