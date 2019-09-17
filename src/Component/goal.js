import React, { Component } from 'react';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Goal extends Component {
    render() {
        return (
            <div className="goal-container">
                <div className="left-container">
                   <h1 className="goal-title">Goal</h1>
                   <div className="p-2-container">
                       <p className="p-2">
                        se fixer des objectifs à court et long terme est l’une de clé vers la motivation.
                        j’ai compris cela grâce à ma propre expérience.dans la musculation tout comme dans tout les autres sports vous êtes motivé lorsque vous avez un objectif à atteindre.l’App vous aide à vous fixer des objectifs et à veiller à ce que vous les concrétiser.
                       </p>
                   </div>
                </div>
                <div className="right-container">
                    <div className="follow">
                        <h3 className="follow-title">follow us</h3>
                        <div className="s-m-container">
                            <a href="https://www.instagram.com" className="s-m-link">
                                <FontAwesomeIcon icon={["fab","instagram"]} className="instagram"/>
                                Motivate
                            </a>
                            <a href="https://www.facebook.com" className="s-m-link">
                                <FontAwesomeIcon icon={["fab","facebook-f"]} className="facebook" />
                                Motivate
                            </a>
                            <a href="https://twitter.com" className="s-m-link">
                                <FontAwesomeIcon icon={["fab","twitter" ]} className="twitter" />
                                Motivate
                            </a>
                        </div>
                        <h3 className="comment-1">
                            best challenges, comments and more 
                            will be posting there
                        </h3>  
                    </div>
                </div>
            </div>
        );
    }
}

export default Goal;