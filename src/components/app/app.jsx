import React from "react";
import WritingFirst from "../writingPartFirst/writingPartFirst.jsx";

const App = (props) => {
    const { timer } = props;
    return (
        <WritingFirst timeToFinish={timer} />
    );
};

export default App;
