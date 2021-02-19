let count = 0;

// reference this function
const addOne = () => {
    count++;
    console.log("button clicked")
    renderCounterApp();

};

const minusOne = () => {
    count--;
    console.log("minus one button clicked")
    renderCounterApp();
};

const reset = () => {
    count = 0;
    console.log("reset button clicked")
    renderCounterApp();
};





const renderCounterApp = () => {
// JSX uses parenthesis
const templateTwo = (
    <div>
    <h1>Count: {count} </h1>
    <button onClick = {addOne}> + 1</button>
    <button onClick = {minusOne}>-1</button>
    <button onClick = {reset} >reset</button>
    </div>

);

ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();