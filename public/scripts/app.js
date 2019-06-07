"use strict";

//This is where we need to put jsx


//In JSX we can have only one root element
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Amit"
    ),
    React.createElement(
        "p",
        null,
        "Model Town"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "IAS"
        )
    )
);

//IN JSX Class is called className
var kahadalnahai = document.getElementById("app");

var count = 0;

var add1 = function add1() {
    count = count + 1;
    rendercounterapp();
};

var minus1 = function minus1() {
    count--;
    rendercounterapp();
};

var reset = function reset() {
    count = 0;
    rendercounterapp();
};

var rendercounterapp = function rendercounterapp() {

    var template2 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count :",
            count
        ),
        React.createElement(
            "button",
            { onClick: add1 },
            "+1 "
        ),
        React.createElement(
            "button",
            { onClick: minus1 },
            " -1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );

    ReactDOM.render(template2, kahadalnahai);
};
rendercounterapp();
