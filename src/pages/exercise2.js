import React, { useState } from 'react';
import './exercise2.css';
import github from './../images/github.png'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
            <Stack direction="row" spacing={5}>
                <Button
                    variant="outlined"
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
                    Add One!
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        setVisible(true);
                        const images = [...imageNumber];
                        images.pop(<img
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
                    Remove One!
                </Button>
            </Stack>
        </Grid >
    )
}

export default Exercise2;