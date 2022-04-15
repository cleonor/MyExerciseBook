import React, { useState } from 'react';
import './exercise2.css';
import github from './../images/github.png'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Exercise2 = () => {

    const [isVisible, setVisible] = useState(false);
    const [imageNumber, setImageNumber] = useState([]);

    return (
        <Grid container direction="row"
            alignItems="center"
            justifyContent="center"
            justifyItems="center"
            style={{ height: "90%" }}
        >
            {isVisible ? imageNumber : null}

            <Button
                style={{ position: "absolute" }}
                variant="outlined"
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
                    setImageNumber(images)
                }
                }
            >
                Click me!
            </Button>
        </Grid>
    )
}

export default Exercise2;