import React from "react";
import PropTypes from "prop-types";

const WritingIndependent = (props) => {
    const {timeToFinish, onWritingQuestionClick} = props;

    return (
        <article>
            <header>
                <h1>TOEFL. Independent Writing</h1>
            </header>
            <span>TIMER: {timeToFinish}</span>
            <form>
                <textarea> </textarea>
                <button onClick={onWritingQuestionClick}>Next</button>
            </form>
        </article>
    );
};

WritingIndependent.propTypes = {
    timeToFinish: PropTypes.number.isRequired,
    onWritingQuestionClick: PropTypes.func.isRequired,
};

export default WritingIndependent;
