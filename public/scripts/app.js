'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
// works with arrays, integers
// not with objects. ignores booleans. 


var app = {
    title: 'Indecision App',
    subtitle: 'Some super Cool Infos',
    options: []
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

var onFormSubmit = function onFormSubmit(e) {
    // stops full page refresh
    e.preventDefault();
    // points to the element 
    var option = e.target.elements.option.value;

    if (option) {
        // adds this option to array
        app.options.push(option);
        e.target.elements.option.value = '';
        // render function
        renderSubmission();
    }

    console.log("form submitted");
};

// creating remove all button
// on click -> wipe the array -> rerender
var reset = function reset() {
    // or app.options = [];
    app.options.length = 0;
    console.log("reset button clicked");
    renderSubmission();
};
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

var appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];
// map lets us take an aray and convert it in some way


//onSubmit event handler to reference a function once the form is submitted
var renderSubmission = function renderSubmission() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            'What Should I Do.?'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,

            /* or    app.options.map((option) => <li key = {option}>{option}</li>*/
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderSubmission();

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
