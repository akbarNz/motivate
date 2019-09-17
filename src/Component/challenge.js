import React, { Component } from 'react';
import "./style.css";
var FontAwesome = require('react-fontawesome');
class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textchallenge: "",
            username: "",
            friends: [],
        };
    }
    
    handleChallenge = (event) => {
        this.setState({
            textchallenge: event.target.value,
        })
    }
    handleUsername = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
    handleFriends = (event) => {
        this.setState({
            friends: event.target.value,
        })  
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="challenge-container">
                <div className="challenge-form-container">
                    <form onSubmit={this.handleSubmit} className="challenge-form">
                        <h3 className="add-challenge-title">Add challenge</h3>
                        <textarea value={this.state.textchallenge} onChange={this.handleChallenge} className="textarea-input"/>
                        <label className="challenge-label">instagram username</label>
                        <input type="text" value={this.state.username} onChange={this.handleUsername} className="username-input"/>
                        <label className="challenge-label">tag your friends</label>
                        <input type="text" value={this.state.friends} onChange={this.handleFriends} className="username-input"/>
                        <label className="challenge-label">
                            <FontAwesome
                                name='paper-plane'
                                size='2x'
                                style={{color:"white" }}
                            />
                            find all challenges on our instagram
                        </label>
                        <input type="submit" value="Submit" className="challenge-submit"/>
                    </form>  
                </div>  
                <div className="challenge-explication">
                    <h1 className="challenge-title">Challenge</h1>
                    <p className="p-3">
                        proposer et relever des challenges des vos amis et ceux proposer par l’application pour vous aider à avancer vers vos objectifs 
                        accomplissez les challenges quotidienne proposer par vos amis et d’autres utilisateurs et vous même  ayant des objectifs similaires en fin des vous motiver mutuellement est d’y arriver ensemble.
                        l’application motiv8 se distingue des autres application en vous proposant des challenges quotidiennes enfin de vous accompagner vers votre objectif et de garder une proximité avec l’utilisateur.
                    </p>
                </div>  
            </div>
        );
    }
}

export default Challenge;