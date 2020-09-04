import React from "react";

const WritingFirst = (props) => {
    const { timeToFinish } = props;

    return (
        <div>
            <h1>TOEFL. Writing. Question First</h1>
            <span>TIMER: {timeToFinish}</span>
        </div>
    );
};

export default WritingFirst;
