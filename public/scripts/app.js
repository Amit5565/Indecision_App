"use strict";

var app = document.getElementById("app");

var visibility = false;
var toggle = function toggle() {
  visibility = !visibility;
  render();
};

var render = function render() {

  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggle },
      " ",
      visibility ? "Hide details" : "Show details"
    ),
    React.createElement(
      "p",
      null,
      visibility ? "Surprise I am Amit Kumar Singh an IAS officer" : ""
    )
  );
  ReactDOM.render(template, app);
};
render();
