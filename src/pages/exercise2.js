import React, { useState } from 'react';
import './exercise2.css';
import github from './../images/github.png'

const Exercise2 = () => {

    const [isVisible, setVisible] = useState(false);
    const [imageNumber, setImageNumber] = useState([]);

    return (
        <div>
            {isVisible ? imageNumber : null}
            <button
                className="buttonExercise2"
                onClick={() => {
                    setVisible(true);
                    const images = [...imageNumber];
                    images.push(<img
                        className="imageExercise2"
                        src={github}
                        alt="Github"
                        isVisible={isVisible}
                        setVisible={setVisible}
                        key={Math.random}
                    >
                    </img>)
                    setImageNumber(images)}
                }
            >
                Click me!
            </button>
        </div >
    )
}

export default Exercise2;