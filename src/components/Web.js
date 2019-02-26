import React, { Component } from "react";
import ProjectNav from "./navigation/ProjectNav";
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
                <div className="d-flex flex-column ">
                    <div className="align-items-stretch">
                        <div className="col-md-6">{projectList}</div>
                    </div>
                    <ProjectNav />
                </div>
            </div>
        );
    }
}
