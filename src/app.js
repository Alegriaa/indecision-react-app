console.log('App.js is running!');


// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Some super Cool Infos',
    options: ['One', 'Two']
};

function getSubtitle (subtitle){
 if (subtitle){
     return <p>Subtitle: {app.subtitle}</p>
 }
}

const template = (
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

const userName = 'StreetLevelCode';
const locationName = 'Oakland';

const user = {
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
const second_template = (
    <div>
        <h1>User: {user.name ? user.name : 'No user'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>

);
const appRoot = document.getElementById('app');

ReactDOM.render(second_template, appRoot);