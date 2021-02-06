console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
<div>
    <h1>Indecision App </h1>
    <p>This is some info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>);

var second_template = (
    <div>
        <h1>Brian Alegria</h1>
        <p>Oakland California</p>
    </div>

);
var appRoot = document.getElementById('app');

ReactDOM.render(second_template, appRoot);