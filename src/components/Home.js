import React, { Component } from "react";
import AnimatedBg from "./home/AnimatedBg";
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <AnimatedBg />
            </div>
        );
    }
}
