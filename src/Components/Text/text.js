import React from "react";

const Text = props => {
   
    return (
        <div className="explanation">
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default Text;