import React from "react";
import WritingIndependent from "./writingIndependent.jsx";
import renderer from "react-test-renderer";

it(`Should second part of writing section render correctly`, () => {
    const tree = renderer
        .create(<WritingIndependent
            timeToFinish={20}
            onWritingQuestionClick={() => { }}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
