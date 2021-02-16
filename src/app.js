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

let count = 0;

// reference this function
const addOne = () => {
    console.log("button clicked")
};

const minusOne = () => {
    console.log("minus one button clicked")
};

const reset = () => {
    console.log("reset button clicked")
};



// JSX uses parenthesis
const templateTwo = (
    <div>
    <h1>Count: {count} </h1>
    <button onClick = {addOne}> + 1</button>
    <button onClick = {minusOne}>-1</button>
    <button onClick = {reset}>reset</button>
    </div>

);

console.log(templateTwo);
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
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);