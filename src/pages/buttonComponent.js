import React from "react";
import Button from '@mui/material/Button';

const ButtonComponent = ({ className, onClick, title }) => {

    return (
        <Button
            variant="contained"
            type="button"
            className={className}
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default ButtonComponent;