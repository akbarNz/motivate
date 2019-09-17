import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";
import { AllInclusiveRounded, ArrowForwardIosRounded, AllInclusiveOutlined } from "@material-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./firstPage.css";
import Timer from "./timer";
import Footer from "./footer";
import Pic from "./pic-1.jpeg";

const StyledIcon = withStyles({
    root: {
        color:"white",
        height: 70,
        fontSize: 50
    },
})(AllInclusiveRounded);

const ArrowIcon = withStyles({
    root: {
        color: "white",
        fontSize: 50,
        height: 450,
    }
})(ArrowForwardIosRounded);
const InfinteIcon = withStyles({
    root: {
        color: "#ffffff4a",
        height: 150,
        width: 230,
    }
})(AllInclusiveOutlined)

class FirstPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="first-page-container">
                    <div className = "header-container">
                        <div className = "title-container">
                            <h1 className = "title">Motiv</h1>
                            <StyledIcon />    
                        </div>
                        <Timer />
                    </div>
                    <div className="body-container">
                        <div className="goals-container">
                            <h1 className = "subtitle" >Goals</h1>
                            <FontAwesomeIcon icon="bullseye" className="svg-inline--fa.fa-w-16"/>
                            {/* <p className = "explication">
                                l’app motiv8 vous permet de vous fixer un long objectifs limité dans le temps et que vous pouvez diviser en des petites objectifs dans le but d’avancer plus rapidement et de façon organisée. 
                            </p> */}
                        </div>
                        <div className="challenge-container">
                            <h1 className="subtitle">Challenge</h1>
                            <div className ="chessContainer">
                                <div className="chess-knight-left">
                                    <FontAwesomeIcon icon="chess-knight" />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="chess-knight" />
                                </div>
                            </div>
                            {/* <p className = "explication">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla eget elit maximus, ultricies magna ac, dictum nulla.
                                Duis ullamcorper vel odio quis finibus. Aliquam erat volutpat. 
                                Nunc odio mi, scelerisque eget magna id, pulvinar auctor ligula.
                                Morbi eleifend mi eget consequat gravida. 
                            </p> */}
                        </div>
                        <div className="motivation-container">
                            <h1 className="subtitle">Motivation</h1>
                            <div className="infinite-icon-container"><InfinteIcon /></div>
                            {/* <p className="explication">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla eget elit maximus, ultricies magna ac, dictum nulla.
                                Duis ullamcorper vel odio quis finibus. Aliquam erat volutpat. 
                                Nunc odio mi, scelerisque eget magna id, pulvinar auctor ligula.
                                Morbi eleifend mi eget consequat gravida.
                            </p> */}
                        </div>
                        {/* <div className="icon-container">
                            <ArrowIcon />
                        </div> */}
                    </div> 
                    <Footer />
                </div>
            </div>
        );
    }
}

export default FirstPage;