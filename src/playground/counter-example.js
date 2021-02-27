

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // keep track of the all the state changes
        this.state = {
            count: props.count
        };
        }
    handleAddOne() {
        // to change component state with the setState function
        //prevState to access the old value
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });

    }
    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            }

        });
    }
    handleReset() {
        this.setState((prevState) => {
            return{
                count: 0
            }

        });
    }


    render() {
        return(
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0

};




ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;

// // reference this function
// const addOne = () => {
//     count++;
//     console.log("button clicked")
//     renderCounterApp();

// };

// const minusOne = () => {
//     count--;
//     console.log("minus one button clicked")
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     console.log("reset button clicked")
//     renderCounterApp();
// };





// const renderCounterApp = () => {
// // JSX uses parenthesis
// const templateTwo = (
//     <div>
//     <h1>Count: {count} </h1>
//     <button onClick = {addOne}> + 1</button>
//     <button onClick = {minusOne}>-1</button>
//     <button onClick = {reset} >reset</button>
//     </div>

// );

// ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp();