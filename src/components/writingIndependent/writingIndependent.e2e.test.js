import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WritingIndependent from "./writingIndependent.jsx";

Enzyme.configure({
    adapter: new Adapter(),
});

it(`Should question button be pressed`, () => {
    const onWritingQuestionClick = jest.fn();

    const writingIndependent = shallow(
        <WritingIndependent
            timeToFinish={30}
            onWritingQuestionClick={onWritingQuestionClick}
        />
    );
    const writingFinishButton = writingIndependent.find(`button`);

    writingFinishButton.props().onClick();
    expect(onWritingQuestionClick.mock.calls.length).toBe(1);
});
