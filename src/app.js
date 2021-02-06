console.log('App.js is running!');


// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Some Cool Info'
};

var template = (
<div>
    <h1>{app.title} </h1>
    <p>{app.subtitle}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>);

var userName = 'StreetLevelCode';
var locationName = 'Oakland';

var user = {
    name: 'Brian Alegria',
    location: 'StreetLevelCode'
};
// you can have any kind of js expression withing the brackets
var second_template = (
    <div>
        <h1>{user.name + '!'}</h1>
        <p>{user.location}</p>
    </div>

);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);