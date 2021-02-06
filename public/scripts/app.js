'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App '
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var second_template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Brian Alegria'
    ),
    React.createElement(
        'p',
        null,
        'Oakland California'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(second_template, appRoot);
