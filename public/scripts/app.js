"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterApp = function (_React$Component) {
    _inherits(CounterApp, _React$Component);

    function CounterApp(props) {
        _classCallCheck(this, CounterApp);

        var _this = _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).call(this, props));

        _this.handleMinusOne = _this.handleMinusOne.bind(_this);

        _this.handleOne = _this.handleOne.bind(_this);

        _this.handleReset = _this.handleReset.bind(_this);

        //Setting default value for setting state
        _this.state = {
            count: props.count
        };

        return _this;
    }

    _createClass(CounterApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {

            var json = localStorage.getItem("count");
            console.log(json);

            this.setState(function () {
                return {
                    count: json
                };
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            var json = prevState.count;

            localStorage.setItem("count", json);
        }
    }, {
        key: "handleOne",
        value: function handleOne() {
            // alert("+1");
            //To manipulate our default state
            this.setState(function (prevState) {
                return {
                    count: parseInt(prevState.count, 10) + 1
                };
            });
        }
    }, {
        key: "handleMinusOne",
        value: function handleMinusOne() {
            //alert("-1");
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: "handleReset",
        value: function handleReset() {
            // alert("0");

            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Count:",
                    this.state.count,
                    " "
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleOne },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleMinusOne },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleReset },
                    "Reset"
                )
            );
        }
    }]);

    return CounterApp;
}(React.Component);

CounterApp.defaultProps = {
    count: 0
};
ReactDOM.render(React.createElement(CounterApp, null), document.getElementById("app"));
