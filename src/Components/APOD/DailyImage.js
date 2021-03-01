import React from "react";

function DailyImage(props) {
  return (
    <div className="daily-image">
      <img className="dailyImg" alt="" src={props.url} />
    </div>
  );
}

export default DailyImage;
