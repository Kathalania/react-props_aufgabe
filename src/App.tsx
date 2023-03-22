import React from 'react';
import './App.css';
import Greetings from "./Greetings";

function App() {
    const name1: string = "Astrid"
    const names: string[] = ["Katharina", "Xin", "Astrid", "Jürgen Klinsmann"]

    return (
        <div className="App">
            <Greetings names={names}/>

        </div>
    );
}

export default App;
