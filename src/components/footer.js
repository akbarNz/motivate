import React, { Component } from 'react';
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
    render() {
        return (
        <div className = "footer">
            <div>
                <FontAwesomeIcon icon={["fab","linkedin-in"]}  style={{width:30, color: 'black'}} />
                <label>Motivate</label>
            </div>
            <div>
                <FontAwesomeIcon icon={["fab","instagram"]}  style={{width:30, color: 'black'}}  />
                <label>Motivate</label>
            </div>
            <div>
                <FontAwesomeIcon icon={["fab","facebook-f"]}  style={{width:30, color: 'black'}} />
                <label>Motivate</label>
            </div>
            <div>
                <FontAwesomeIcon icon={["fab","twitter"]}  style={{width:30, height: 20, color: 'black'}} />
                <label>Motivate</label>
            </div>
            <div className = "copyrights">
                <label>copyrights all rights reserved</label>
            </div>
            <div className = "terms">
                <label>terms&condition</label>
            </div>
        </div>
        );
    }
}

export default Footer;