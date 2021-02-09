'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Some super Cool Infos',
    options: ['One', 'Two']
};

function getSubtitle(subtitle) {
    if (subtitle) {
        return React.createElement(
            'p',
            null,
            'Subtitle: ',
            app.subtitle
        );
    }
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title,
        ' '
    ),
    getSubtitle(app.subtitle),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'your options: something ' : 'no options available'
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
    location: 'StreetLevelCode',
    age: 26
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            user.location
        );
    }
}

// you can have any kind of js expression withing the brackets
var second_template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'User: ',
        user.name ? user.name : 'No user'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(second_template, appRoot);
