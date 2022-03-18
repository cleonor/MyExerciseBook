import React from 'react';
import './exercise2.css';
import github from './../images/github.png'

const Exercise2 = () => {
    return (
        <div>
            <img src={github} alt="Github"></img>
            <button
                classname="exercise2"
            >
                Click me!
            </button>
        </div>
    )
}

export default Exercise2;