import React from "react";
import ReactDOM from 'react-dom';
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Exercise1 from "./pages/exercise1";
import Exercise2 from "./pages/exercise2";

const App = () => {
    return (
        <Router>
            <div className="mainContainer">
                <NavBar />
                <Routes>
                    <Route
                        className="exercise1"
                        path='/exercise1'
                        element={<Exercise1 />} />
                    <Route
                        className="exercise2"
                        path='/exercise2'
                        element={<Exercise2 />} />
                </Routes>
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));