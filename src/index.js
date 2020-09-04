import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Setting = {
    TIMER: 30
}


ReactDOM.render(
    <App timer={Setting.TIMER} />,
    document.querySelector(`#root`)
);
