import React from "react";
import ReactDOM from 'react-dom';
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Exercise1 from "./pages/exercise1";

const App = () => {

    return (
        <Router>
            <div className="mainContainer">
                <NavBar />
                <Routes>
                    <Route path='/exercise1' element={<Exercise1 />} />
                </Routes>
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));