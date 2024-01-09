//const heading = React.createElement("h1", {id: "heading"}, "hello world from React!");
//empty object can be used to give attributes
import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "I am first h1 tag"),
        React.createElement("h1", {}, "I am second h1 tag")
    ])
    )
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(parent);