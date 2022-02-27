import React from "react";
import ReactDOM from 'react-dom';
import NavBar from "./components/navbar";

const App = () => {

    return (
        <div>
            <NavBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));