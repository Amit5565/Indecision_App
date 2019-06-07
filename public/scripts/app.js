"use strict";

//This is where we need to put jsx


//In JSX we can have only one root element


//IN JSX Class is called className
var kahadalnahai = document.getElementById("app");

var numbers = [55, 66, 77];
var frame = {
    title: "Indecision App",
    subtitle: "Phhkhh",
    options: []
};

var onformsubmit = function onformsubmit(e) {
    //TO avoid full page reference
    e.preventDefault();

    //To hold the value that the user had entered

    var option = e.target.elements.options.value;
    if (option) {
        frame.options.push(option);
        //Wiping the input
        e.target.elements.options.value = "";
        render();
    }
};

//Reset Button to clear array to ""
//on click->wipe the array


var reset = function reset() {

    frame.options.splice(0, frame.options.length);
    render();
};

var render = function render() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            frame.title
        ),
        frame.subtitle && React.createElement(
            "p",
            null,
            frame.subtitle
        ),
        React.createElement(
            "p",
            null,
            frame.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "p",
            null,
            frame.options.length
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        ),
        numbers.map(function (element) {
            return React.createElement(
                "p",
                { key: element },
                " Number:",
                element,
                " "
            );
        }),
        React.createElement(
            "ol",
            null,
            frame.options.map(function (element) {
                return React.createElement(
                    "li",
                    { key: element },
                    " ",
                    element
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onformsubmit },
            React.createElement("input", { type: "text", name: "options", placeholder: "Add something" }),
            React.createElement(
                "button",
                null,
                "Add Options"
            )
        )
    );

    ReactDOM.render(template, kahadalnahai);
};
render();
