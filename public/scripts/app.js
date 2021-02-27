"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// stateless functional components
// doesnt allow for state


var obj = {
    name: "Vikam",
    getName: function getName() {

        return this.name;
    }
};
// use bind(); methods on functions to bind 'this' 
// bind the object 
var getName = obj.getName.bind(obj);
console.log(obj.getName());

// extend to give us the features from React
// with React components you most define render()
// uppercase first letter is how React differentiates a html element and a react component 
// passing data when we init a component, that data is called props

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        // binding the handles to this component instance
        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);

        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    // empty the options array
                    options: []
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            // for a empty array
            if (!option) {
                return 'Please Enter a Valid Value';
                // indexOf to see if we already have this option in the array
            } else if (this.state.options.indexOf(option) > -1) {
                return "This option already exists";
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: "render",
        value: function render() {

            var subtitle = "Your life in a computers hands";
            // const options = ["Item One", "Item Two", "Item three"]
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0
                    // passing function down as a prop
                    , handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions

                }),
                React.createElement(AddOption
                // pass this props
                , { handleAddOption: this.handleAddOption

                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []

};

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'

};

// class Header extends React.Component {
//     render() {
//        return (<div> 
//        <h1>{this.props.title}</h1>
//        <h2>{this.props.subtitle}</h2>

//        </div>
//        );
//     }

// }


// stateless functional component
var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                // calls the prop that we set up above
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            "What Should I Do ?"
        )
    );
};

// class based component 

// class Action extends React.Component {
//     render(){
//         return (
//             <div>
//             <button 
//             // calls the prop that we set up above
//             onClick = {this.props.handlePick}
//             disabled={!this.props.hasOptions}
//             >

//             What Should I Do ?
//             </button>
//             </div>
//         );
//     }
// }


// addOption 

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }
    // some validation


    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {

            e.preventDefault();
            // use trim() to clean up any whitespace
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            // state for component

            this.setState(function () {
                return {
                    // indentical object short hand syntax for ES6
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
                    React.createElement("input", { type: "text", name: "option" }),
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

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteOptions },
            "Remove All"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        }),
        React.createElement(Option, null)
    );
};

// class Options extends React.Component {
//     // // basic override of constructor for react components 
//     // constructor(props) {
//     //     super(props);
//     //     // wherever we call hanleRemoveAll(); the context is correct
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);

//     // }
//     // handleRemoveAll(){
//     //     alert("removeall")
//     // }

//     render() {

//         return (
//             <div>
//             <button onClick = {this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 this.props.options.map((option) => <Option key ={option} optionText ={option} />)
//             }
//            <Option />

//             </div>
//         );
//     }
// }


var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optionText
    );
};

// class Option extends React.Component {
//     render () {
//         return (
//             <div>
//             {this.props.optionText}
//             </div>
//         );
//     }
// }

var User = function User(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "Name: ",
            props.name,
            " "
        ),
        React.createElement(
            "p",
            null,
            "Age: ",
            props.age,
            " "
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, { options: ['hello', ' itsme'] }), document.getElementById('app'));
