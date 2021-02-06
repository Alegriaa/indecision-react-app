'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Some Cool Info'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title,
        ' '
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
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

var userName = 'StreetLevelCode';
var locationName = 'Oakland';

var user = {
    name: 'Brian Alegria',
    location: 'StreetLevelCode'
};
// you can have any kind of js expression withing the brackets
var second_template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name + '!'
    ),
    React.createElement(
        'p',
        null,
        user.location
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
