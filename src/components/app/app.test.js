import React from "react";
import App from "./app.jsx";
import renderer from "react-test-renderer";

it(`Render App`, () => {
    const tree = renderer
        .create(<App
            timer={10}
            onWritingQuestionHandle={() => { }}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
