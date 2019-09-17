import React, { Component } from 'react';
import "./style.css";
import { withStyles } from "@material-ui/core";
import { AllInclusiveOutlined } from "@material-ui/icons";

const InfinteIcon = withStyles({
    root: {
        color: "white",
        fontSize: 35,
        height: 50,
    }
})(AllInclusiveOutlined)

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        };
        this.showLine = this.showLine.bind(this);
    }
    showLine() {
        this.setState({
            isClicked: true,
        })
    }
    render() {
        return (
            <header className = "header">
                <div className = "title-container">
                    <h1 className = "title">Motiv</h1>
                    <InfinteIcon />    
                </div>
                <nav className = "pages-links">
                    <a href="./goal">
                        Goal
                        <hr />
                    </a>
                    <a href="./challenge">
                        Challenge
                    </a>
                    <a href="./motivation">
                        Motivation
                    </a>
                    <a href="./design">
                        Design
                    </a>
                </nav> 
            </header>
        );
    }
}

export default Header;