import React, { useState } from 'react';
import './exercise2.css';
import github from './../images/github.png'

const Exercise2 = () => {

    const [isVisible, setVisible] = useState(false);

    return (
        <div>
            {isVisible ? (<img
                src={github}
                alt="Github"
                isVisible={isVisible}
                setVisible={setVisible}
            >
            </img>) : null }
            <button
                classname="exercise2"
                onClick={() => setVisible(true)}
            >
                Click me!
            </button>
        </div>
    )
}

export default Exercise2;