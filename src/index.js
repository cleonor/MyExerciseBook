import React from "react";
import ReactDOM from 'react-dom';
import NavBar from "./components/navbar";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {

    return (
        <Router>
            <NavBar />
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));