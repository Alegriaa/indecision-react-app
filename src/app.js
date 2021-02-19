

console.log('App.js is running!');


// JSX - JavaScript XML
// works with arrays, integers
// not with objects. ignores booleans. 


const app = {
    title: 'Indecision App',
    subtitle: 'Some super Cool Infos',
    options: []
};

function getSubtitle (subtitle){
 if (subtitle){
     return <p>Subtitle: {app.subtitle}</p>
 }
}

const onFormSubmit = (e) => {
    // stops full page refresh
    e.preventDefault();
    // points to the element 
    const option = e.target.elements.option.value;

    if (option){
        // adds this option to array
        app.options.push(option);
        e.target.elements.option.value = '';
        // render function
        renderSubmission();


    }

    console.log("form submitted")
};

// creating remove all button
// on click -> wipe the array -> rerender
const reset = () => {
    // or app.options = [];
    app.options.length = 0;
    console.log("reset button clicked")
   renderSubmission();
};




const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];
// map lets us take an aray and convert it in some way




//onSubmit event handler to reference a function once the form is submitted
const renderSubmission = () => {
    const template = (
        <div>
            <h1>{app.title} </h1>
            {getSubtitle(app.subtitle)}
            <p>{app.options.length > 0 ? 'your options: something ' : 'no options available'}</p>
            <p>{app.options.length}</p>
            <button onClick = {reset} >Remove All</button>
            {
                // numbers.map((num) => {
                //     return <p key = {num}>Number: {num}</p>
                // })
            }
            <ol>
               {/* mapping over app.options getting back an array of list items (lis), set key and text */}
               {
                   /* or    app.options.map((option) => <li key = {option}>{option}</li>*/
                   app.options.map((option) => {
                       return <li key = {option}>{option}</li>
                   })
               }
            </ol>
            <form onSubmit = {onFormSubmit}>
            <input type ="text" name="option"></input>
            <button>Add Option</button>
            </form>
        </div>);
        ReactDOM.render(template, appRoot)
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

