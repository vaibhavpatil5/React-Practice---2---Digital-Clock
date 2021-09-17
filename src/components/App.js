import React, {Component, useState} from "react";
import '../styles/App.css';

function getCurrentTime(){
    const currentDate= new Date();
//     const hours = currentDate.getHours();
//     const mins = currentDate.getMinutes();
//     const secs = currentDate.getSeconds();
    
//     return hours + ':' + mins + ':' + secs;
    return currentDate.toLocalTimeString().toUpperCase();
}


class App extends Component {
    
    constructor(props){
        this.currentDate= new Date();
        super(props);
        this.state={
              time:getCurrentTime(),     
        };
    }
    
   componentDidMount(){
        this.intervalId = setInterval(()=>{
            this.setState({time:getCurrentTime()});
        },1000);
   } 
    
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    
    render() {

        return(
            <>
           <div className="Clock">
                <h3 id="time">{this.state.time}</h3>
            </div>
            </>
        )
    }
}


export default App;
