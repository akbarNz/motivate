import React, { Component } from 'react';
import "./style.css";

class Motivation extends Component {
    render() {
        return (
            <div className="motivation-container">
                <div className="motivation-content">
                    <h1 className="motivation-title">Motivation</h1>
                    <p className="p-4">
                        on dit souvent l'appétit vient en mangeant, la motivation vient en s'entraînant.
                        en vous fixant des objectifs et en relevant des challenges quotidiennement vous arriverez à vous motiver et à le reste. 
                    </p>
                </div>  
            </div>
        );
    }
}

export default Motivation;