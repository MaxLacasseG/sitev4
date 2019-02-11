import React, { Component } from "react";
import { webData } from "../data/webProject";

export default class Web extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }
    componentDidMount = () => {
        this.setState({ projects: webData });
    };
    render() {
        const projectList = this.state.projects.map(project => {
            return (
                <div className="project" key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Lien du projet
                        </a>
                    ) : null}
                </div>
            );
        });
        return (
            <div className="bg fullsize">
                <div className="container p-5">
                    <div className="row">
                        <h1>Projets web</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">{projectList}</div>
                    </div>
                </div>
            </div>
        );
    }
}
