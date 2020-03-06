import React from "react";


function Apod(props) {

    // console.log(props.url);

    return (
        <div className="daily-image">
            <img className="dailyImg" alt="" src={props.url} />
        </div>
    );
}


export default Apod;