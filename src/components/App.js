import React, {Component, useState} from "react";
import '../styles/App.css';


function getCurrentTime() {
    const currentTime = new Date();
    // const hours = currentTime.getHours();
    // const minutes = currentTime.getMinutes();
    // const seconds = currentTime.getSeconds();

    // const realTime = `${hours}:${minutes}:${seconds}`;
    // return realTime;
    return currentTime.toLocaleTimeString();
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            time : getCurrentTime(),
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ time: getCurrentTime() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        return(
         <div class="Clock">
             <h3 id="time">{this.state.time}</h3>
         </div>
        )
    }
}


export default App;
