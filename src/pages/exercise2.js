import React, { useState } from 'react';
import './exercise2.css';
import github from './../images/github.png'

const Exercise2 = () => {

    const [isVisible, setVisible] = useState(false);
    const [imageNumber, setImageNumber] = useState(0);
    console.log(imageNumber);

    return (
        <div>
            {isVisible ? (<img
                className="imageExercise2"
                src={github}
                alt="Github"
                isVisible={isVisible}
                setVisible={setVisible}
            >
            </img>) : null}
            <button
                className="buttonExercise2"
                onClick={() => {
                    setVisible(true);
                    setImageNumber(imageNumber + 1);
                }
                }
            >
                Click me!
            </button>
        </div >
    )
}

export default Exercise2;