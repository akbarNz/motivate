import React, { Component } from 'react';
import "./timer.css"

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countDownDate: new Date("Dec 1, 2020 00:00:00").getTime(),
            d:"",
            h:"",
            m:"",
            s:"",
        };
        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    tick() {
        let now = new Date().getTime();
        let distance = this.state.countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState({
            d: days,
            h: hours,
            m: minutes,
            s: seconds,
        });
        if (distance < this.timerID) {
            clearInterval(this.timerID);
        }
    }
    render() {
        return (
            <h1 className = "timer">
               {this.state.d}d:{this.state.h}h:{this.state.m}m:{this.state.s}s
            </h1>
        );
    }
}
export default Timer;         
