import React from "react";
import ReactDOM from 'react-dom';
import NavBar from "./components/navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'

const App = () => {

    return (
        <Router>
            <div className="mainContainer">
                <NavBar />
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));