import React, { Component } from 'react';
import "./style.css";
import Timer from "./timer";
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event) {
        alert('an email was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div className = "landing">
                <Timer />
                <h1 className = "subtitle">Power up your motivation.</h1>
                <div className="p-1-container">
                    <p className = "p-1">
                        Motivate est une aplication mobile en cours de développement qui va vous motiver et
                        vous aider à le rester.<br />
                        motivate se base sur mon éxperience personnelle étant passionné de bodybuilding 
                        et des sports en générale.
                    </p>
                </div>
                <div className="form-container">
                    <form  onSubmit={this.handleSubmit} className="login-form">
                        <h3 className="login-title">Log in</h3> <br />
                        <input type="email" value={this.state.value} onChange={this.handleChange} placeholder="email" className="email"/> <br />
                        <input type="submit" value="log in" className="submit"/>
                    </form>     
                </div> 
            </div>
        );
    }
}

export default Landing;