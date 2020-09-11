import React from "react";
import WritingIndependent from "../writingIndependent/writingIndependent.jsx";
import PropTypes from "prop-types";

const onWritingQuestionHandle = () => { };

const App = (props) => {
    const {timer} = props;
    return (
        <WritingIndependent
            timeToFinish={timer}
            onWritingQuestionClick={onWritingQuestionHandle}
        />
    );
};

App.propTypes = {
    timer: PropTypes.number.isRequired,
    onWritingQuestionHandle: PropTypes.func.isRequired,
};

export default App;
