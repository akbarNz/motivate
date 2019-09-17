import React, { Component } from 'react';
import './App.css';
import Header from "./Component/header";
import Landing from "./Component/landing";
import Goal from "./Component/goal";
import Challenge from "./Component/challenge";
import { library } from "@fortawesome/fontawesome-svg-core";
/* import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"; */
import { fab, faInstagram, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faInstagram, faFacebookF, faTwitter, /* faPaperPlane */)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Goal />
        <Challenge />
      </div>
    );
  }
}

export default App;
