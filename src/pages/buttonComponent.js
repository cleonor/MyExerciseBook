import React from "react";

const ButtonComponent = ({ className, onClick, title }) => {

    return (
        <button type="button" className={className} onClick={onClick}> {title} </button>
    )
}

export default ButtonComponent;