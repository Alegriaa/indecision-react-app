console.log('App.js is running!');


// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Some Cool Infos',
    options: ['One', 'Two']
};

function getSubtitle (subtitle){
 if (subtitle){
     return <p>Subtitle: {app.subtitle}</p>
 }
}

var template = (
<div>
    <h1>{app.title} </h1>
    {getSubtitle(app.subtitle)}
    <p>{app.options.length > 0 ? 'your options: something ' : 'no options available'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
        <li>Item two</li>
    </ol>
</div>);

var userName = 'StreetLevelCode';
var locationName = 'Oakland';

var user = {
    name: 'Brian Alegria',
    location: 'StreetLevelCode',
    age: 26
};

function getLocation(location) {
    if (location) {
        return <p>Location: {user.location}</p>;
    }
}

// you can have any kind of js expression withing the brackets
var second_template = (
    <div>
        <h1>User: {user.name ? user.name : 'No user'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>

);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);