"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

        _this.handlePick = _this.handlePick.bind(_this);

        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            list: []
        };

        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleDeleteOption",
        value: function handleDeleteOption() {

            this.setState(function () {
                return {
                    list: []
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var idx = Math.floor(Math.random() * this.state.list.length);
            var option = this.state.list[idx];
            alert(option);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {

            if (!option) {
                return "Enter valid value to add one";
            } else if (this.state.list.indexOf(option) > -1) // Means item already present
                {
                    return "Item already present";
                }
            this.setState(function (prevState) {

                return {
                    list: prevState.list.concat(option)
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision";
            var subtitle = "Put your life in the hands of the computer";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOption: this.state.list.length <= 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    list: this.state.list,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {

    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

// class Header extends React.Component{
//      render(){

//          return (
//              <div>
//              <h1>{this.props.title}</h1>
//              <h2>{this.props.subtitle}</h2>
//              </div>
//          )
//      }
// }


var Action = function Action(props) {

    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handlePick, disabled: props.hasOption },
            "What should I do ?"
        )
    );
};
// class Action extends React.Component{

//     render(){
//         return(
//             <div>
//             <button onClick={this.props.handlePick} disabled={this.props.hasOption}>What should I do ?
//             </button>
//             </div>
//         )
//     }
// }


var Options = function Options(props) {

    return React.createElement(
        "div",
        null,
        props.list.map(function (element) {
            return React.createElement(Option, { key: element, option: element });
        }),
        React.createElement(
            "button",
            { onClick: props.handleDeleteOption },
            "Remove All"
        )
    );
};
// class Options extends React.Component{

//     render(){
//         return (

//             <div>
//             {
//                 this.props.list.map((element) => <Option key={element} option={element} />)
//             }
//             <button onClick= {this.props.handleDeleteOption}>Remove All</button>
//             </div>


//         );
//     }
// }


var Option = function Option(props) {

    return React.createElement(
        "p",
        null,
        props.option
    );
};
// class Option extends React.Component{
//     render(){
//         return(
//             <p>{this.props.option}</p>
//         )
//     }
// }

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    // Create constructor when ever we are using this in the function
    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };

        return _this2;
    }

    //This remains because this prt is suitable for the child and not the parent


    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var item = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(item);

            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "option", placeholder: "Add Something" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// const User=(props) =>{
//     return (
//         <div>
//         <p>Name:{props.name}</p>
//         </div>
//     )
// }


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
