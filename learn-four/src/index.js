import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const App = () => {
    // const firstName = "Bob"
    // const lastName = "Zirol"
    
    // return (
    //     <h1>Hello {`${firstName} ${lastName}`}!</h1>
    // )


    // const date = new Date()

    // return (
    //     <h1>It is currently about {date.getHours() % 12} o'clock</h1>
    // )

    const date =  new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 30
    } 

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#8914A3"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }

    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))