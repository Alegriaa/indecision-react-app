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

var count = 0;

// reference this function
var addOne = function addOne() {
    count++;
    console.log("button clicked");
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    console.log("minus one button clicked");
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    console.log("reset button clicked");
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    // JSX uses parenthesis
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count,
            ' '
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            ' + 1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();

// console.log(templateTwo);
// const userName = 'StreetLevelCode';
// const locationName = 'Oakland';

// const user = {
//     name: 'Brian Alegria',
//     location: 'StreetLevelCode',
//     age: 26
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {user.location}</p>;
//     }
// }

// // you can have any kind of js expression withing the brackets
// const second_template = (
//     <div>
//         <h1>User: {user.name ? user.name : 'No user'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>

// );
